import chokidar from 'chokidar';
import Common from './common';
import dateFormat from "date-format";
import { stat, openSync, read, readFileSync } from 'fs-extra'
import type { WatchOptions } from 'chokidar'
import os from 'os';
// 普通的错误 -- 文件找不到， 文件没有， 打开异常
const Error_Normal = Symbol('Error_Normal')
const EOL = os.EOL || '\n'

export type Options = {
    watchOptions?: {
        rootDir: string, // 监听改变的跟路径
        other?: WatchOptions
    }
    fileChange?: (event: 'add' | 'change', pathLike: string, content: string) => void
    //返回true继续执行
    stdError?: (functionName: string, errStack: any) => boolean
}

type FunctionKey = {
    [K in keyof Required<Options>]: Required<Options>[K] extends (...p: any) => any ? K : never
}[keyof Required<Options>]

type historyInfo_value = {
    endTime: Date; // 最后一次修改时间
    nu: number; // 最后一次修改的行数
    length: number; // 添加的长度
    position: number; //偏移量
}

class StreamWatch extends Common {
    /** 存放历史文件修改的信息，修改内容，字节，长度，在原文件位置，以key为path做标准 */
    historyInfo: Map<string, historyInfo_value> = new Map();
    _options: Required<Options> = {
        watchOptions: {
            rootDir: '../',
            other: {}
        },
        fileChange: () => [],
        stdError: () => false
    };

    // 截取文件start到end的内容
    // sclieContent(fd, strat, end) {

    // }


    // 兼容300毫秒内出现多次触发
    adapter300MSChangeContent() {

    }

    // 获取文件最后修改的内容
    getEndChangeConetnt(path: string, length: number = 0, position: number = 0): Promise<any> {
        // 后续可能使用readStream优化
        // 要做300毫秒内的优化，做个储存功能解决 性能不足问题
        this.adapter300MSChangeContent();
        const fd = openSync(path, 'r');
        if (typeof fd !== 'number') {
            if (this._eventCallback('stdError', 'getEndChangeConetnt', EOL + 'openSync -> Error_Normal')) {
                throw Error(Error_Normal.toString());
            }
            return Promise.reject(Error_Normal);
        }
        return new Promise((resolve, reject) => {
            read(fd, Buffer.alloc(length), 0, length, position, (err, bytes, buffer) => {
                if (err) {
                    if (this._eventCallback('stdError', 'getEndChangeConetnt', EOL + 'read -> Error_Normal' + EOL + err)) {
                        throw Error(Error_Normal.toString() + EOL + err);
                    }
                    return reject(err);
                }
                resolve(buffer.toString());
            })
        })
    }

    resetOneInfo(): historyInfo_value {
        const endTime = dateFormat.asString();
        return {
            endTime,
            nu: 0,
            position: 0,
            length: 0
        }
    }

    // 获取文件多少行
    getFileLinenNu(conetnt: string): number {
        return conetnt.split('\n').length

    }

    // 获取文件内容
    getFileContent(pathLike: string): string {
        const contents = readFileSync(pathLike, 'utf-8');
        if (!contents) {
            this._eventCallback('stdError', 'getFileContent', EOL + 'readFileSync')
            return '';
        }
        return contents
    }


    // 文件内容回调函数出去
    _eventCallback(cbName: FunctionKey, ...content: any[]): any {
        return (this._options[cbName] as any)(...content)
        // this._options[cbName](...(content as (Options[FunctionKey] extends (...keys: infer R) ? [...R]: R)))
    }


    // 更新 存放历史文件修改的信息
    // 还要做一层没有文件的判断
    updateHistoryInfo = (pathLike: string) => {
        if (!this.historyInfo.has(pathLike)) {
            stat(pathLike, (err, starts) => {
                const _info: historyInfo_value = this.resetOneInfo();
                if (!err) {
                    const content = this.getFileContent(pathLike)
                    _info.nu = this.getFileLinenNu(content);
                    _info.position = 0;
                    _info.length = starts.size;
                    // 初始化调用接口外部传回去
                    this._eventCallback('fileChange', 'init', pathLike, content);
                } else {
                    console.error(err, 'watch.ts updateHistoryInfo  !this.historyInfo.has(pathLike)')
                }
                this.historyInfo.set(pathLike, _info)
            })
        } else {
            stat(pathLike, (err, starts) => {
                const last_info: historyInfo_value = this.historyInfo.get(pathLike) as historyInfo_value
                let n_info = this.resetOneInfo();
                if (!err) {
                    const newLength = starts.size;
                    const lastLength = last_info.length
                    n_info.position = lastLength;
                    n_info.length = newLength;
                    this.historyInfo.set(pathLike, n_info)
                    this.getEndChangeConetnt(pathLike, n_info.length, n_info.position)
                        .then(content => {
                            n_info.nu = last_info.nu + (content.split('\n').length - 1 ?? 0);
                            // 文件修改调用接口外部传回去
                            this._eventCallback('fileChange', 'change', pathLike, content);
                            n_info = (null as any);
                        })
                } else {
                    console.error(err, 'watch.ts updateHistoryInfo  this.historyInfo.has(pathLike)')
                }
            })
        }
    }

    constructor(options?: Options) {
        super();
        this._options = Object.assign(this._options, options || {})
        chokidar.watch(this._options.watchOptions.rootDir, {
            ignored: [/node_modules/],
            ...(this._options.watchOptions?.other || {})
        }).on('all', (event, path) => {

            if (event == 'add' || event == 'change') {
                this.updateHistoryInfo(path);
            }
            // console.log(event, path);

        });
    }
}

export default StreamWatch;
