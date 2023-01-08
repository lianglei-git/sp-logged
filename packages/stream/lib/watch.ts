import chokidar from 'chokidar';
import Common from './common';
import dateFormat from "date-format";
import { stat, open } from 'fs-extra'

type Options = {
    watchOptions?: {
        file: string,
        other?: any
    }
}

type historyInfo_value = {
    endTime: Date; // 最后一次修改时间
    nu: number; // 最后一次修改的行数
    length: number; // 添加的长度
    position: number; //偏移量
}

class StreamWatch  extends Common{
    /** 存放历史文件修改的信息，修改内容，字节，长度，在原文件位置，以key为path做标准 */
    historyInfo:Map<string, historyInfo_value> = new Map();
    _options:Required<Options> = {
        watchOptions: {
            file: '../',
            other: null
        }
    };

    // 截取文件start到end的内容
    sclieContent(fd, strat, end){

    }
    
    // 获取文件最后修改的内容
    getEndChangeConetnt(path:string) {
     

    }

    resetOneInfo():historyInfo_value {
        const endTime = dateFormat.asString();
        return {
            endTime,
            nu: 0,
            position: 0,
            length: 0
        }
    }



    // 更新 存放历史文件修改的信息
    // 还要做一层没有文件的判断
    updateHistoryInfo = (pathLike: string) => {
        if(!this.historyInfo.has(pathLike)) {
            stat(pathLike, (err,starts) => {
                const _info:historyInfo_value = this.resetOneInfo();
                if(!err) {
                    console.log(err, ' --> updateHistoryInfo')
                    _info.nu = 0;
                    _info.position = 0;
                    _info.length = starts.size;
                }

                this.historyInfo.set(pathLike, _info)
            })
        }
    }

    constructor(options: Options) {
        super();
        this._options = Object.assign(this._options, options)
        chokidar.watch(this._options.watchOptions.file, {
            ignored: [/node_modules/],
            ...(this._options.watchOptions?.other||{})
        }).on('all', (event, path) => {
            
            // if(this.historyInfo.has(path)) {
            //     return;
            // } 
            // this.historyInfo.set(path, {
            //     nu: 0,
            //     endTime: dateFormat.asString(),
            // })

            console.log(event, path);
        });
        this.updateHistoryInfo(this._options.watchOptions.file);
    }
}

export default StreamWatch;
