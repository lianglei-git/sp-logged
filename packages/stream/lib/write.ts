import {
  statSync,
  createWriteStream,
  ensureDirSync,
  appendFileSync,
  pathExistsSync,
} from "fs-extra";
import type { WriteStream } from "fs";
import { fileURLToPath } from "url";
import { parse, dirname, format } from "path";
import utils from "util";
import dateFormat from "date-format";
import Common, { HistoryContentConfig } from "./common";
import os from "os";
const eol = os.EOL;

const isObject = (t: any) =>
  Object.prototype.toString.call(t) == "[object Object]";
const isHas = Reflect.has;

/**
 * In case give up, What was the effort before that?
 */
const defaultConfig = {
  path: process.cwd() + "/logs/out.log",
  // maxFileSize: 10 * 1024 * 1000,
  maxFileSize: 10  * 1000,
  fileSize: 0,
  isPathExists: false,
  plugins: [],
};

// const __dirname = dirname(fileURLToPath(import.meta.url));

type Dispose_StreamWriteConfig = HistoryContentConfig & {
  fileSize?: number;
  // ws options
  maxFileSize?: number;
  wsoptions?: typeof createWriteStream extends (k1: any, k2: infer U) => any
    ? U
    : never;
  [k: string]: any;
};

type StreamWriteConfig = {
  [k in keyof Dispose_StreamWriteConfig]-?: Dispose_StreamWriteConfig[k];
};
/** write entry */
type $StreamWrite = {
  config: Dispose_StreamWriteConfig;
  plugins: any[];
  ws: WriteStream;
};

abstract class _StreamWrite extends Common {
  defaultWsOptions: $StreamWrite["config"]["wsoptions"] & object = {
    mode: 438,
    flags: "w+", // 'a+'
    encoding: "utf8", // base64
    fd: undefined,
  };

  /** define default path */
  // defaultPath = () => {
  //    return {
  //         cout: process.cwd() + '/logs/cout.log',
  //         error: process.cwd() + '/logs/error.log',
  //         pid: process.cwd() + '/logs/pid.log'
  //    }
  // }

  // defaultPath = () => {
  //     return process.cwd() + '/logs/cout.log'
  // }

  touchFile = (
    file: string,
    options = {
      mode: this.defaultWsOptions.mode,
      flags: this.defaultWsOptions.flags,
    }
  ) => {
    // attempt to create the directory
    const mkdir: any = (dir: string) => {
      try {
        return ensureDirSync(dir);
      } catch (e: any) {
        // backward-compatible fs.mkdirSync for nodejs pre-10.12.0 (without recursive option)
        // recursive creation of parent first
        if (e.code === "ENOENT") {
          mkdir(dirname(dir));
          return mkdir(dir);
        }

        // throw error for all except EEXIST and EROFS (read-only filesystem)
        if (e.code !== "EEXIST" && e.code !== "EROFS") {
          throw e;
        }

        // EEXIST: throw if file and not directory
        // EROFS : throw if directory not found
        else {
          try {
            if (fs.statSync(dir).isDirectory()) {
              return dir;
            }
            throw e;
          } catch (err) {
            throw e;
          }
        }
      }
    };
    mkdir(dirname(file));
    // try to throw EISDIR, EROFS, EACCES
    appendFileSync(file, "", { mode: options.mode, flag: options.flags });
  };

  format = (...anys: any[]) => utils.format(...anys);

  colorize = (str: string, colour: string) => {
    return colour + str;
  };

  timestampLevelAndCategory = (data: any, colour = "red") => {
    return this.colorize(
      utils.format(
        "[%s] [%s] %s - ",
        dateFormat.asString(data.startTime),
        data.level.toString(),
        data.preix
      ),
      colour
    );
  };

  getFileSize = (pathLike: string): number => {
    let size: any = 0;
    try {
      size = statSync(pathLike).size;
    } catch {}
    return size;
  };
}
/**
 * 
日志级别  说明
OFF	    关闭：最高级别，不打印日志。
Fatal	致命：指明非常严重的可能会导致应用终止执行错误事件。
Error	错误：指明错误事件，但应用可能还能继续运行。
Warn	警告：指明可能潜在的危险状况。
Info	信息：指明描述信息，从粗粒度上描述了应用运行过程。
Debug	调试：指明细致的事件信息，对调试应用最有用。
Trace	跟踪：指明程序运行轨迹，比DEBUG级别的粒度更细。
All	    所有：所有日志级别，包括定制级别。
ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF
 */
enum LevelType {
  ALL = 0,
  Trace,
  Debug,
  Info,
  Warn,
  Error,
  Fatal,
  Off,
}
class StreamWrite extends _StreamWrite implements $StreamWrite {
  ws!: WriteStream;

  // 只有初始化会进行赋值
  _path = "";

  // chunks: any[] = Array();
  // writeable = false;

  plugins = Array();
  /** log转换成html日志形式 */
  /** html转换成log日志形式 */
  /** 输出到文件里面 */
  /** 输出到控制台里面 */
  /** 输出到前端页面里面 */
  /** 根据条件进行过滤的插件，比如层级条件、log、或者自定义条件 */
  /** 日志级别的操控 */

  config!: StreamWriteConfig;

  constructor(_config: $StreamWrite["config"] = defaultConfig) {
    super();
    if (!isObject(_config)) throw Error("请传入对象类型.");
    this.created(_config);

    process.on("exit", this.destory);
  }

  created = (_config: any): void => {
    this.config = Object.assign(defaultConfig, _config);
    this._path = this.config.path;
    this.config.isPathExists = pathExistsSync(this._path);
    this.ws = this._createWriteStream();
    this.plugins = this.plugins.concat(
      [this._fristWritePlugin],
      (this.config.plugins as any) || []
    );
    // init history "config.stream" for file
    if (!isHas(this.hscf_content, this.config.path)) {
      this.hscf_content[this.config.path] = {
        ...this.config,
        history: [],
      };
    }
  };

  destory = (): void => {
    this.writeHscf();
  };

  _createWriteStream = (): WriteStream => {
    if (this.ws) {
      this.ws.close((err) => []);
    }
    if (!this.config.isPathExists) {
      this.touchFile(this.path);
    }
    const ws = createWriteStream(
      this.path,
      Object.assign(this.defaultWsOptions, this.config.wsoptions)
    );
    this.useLogFileSize = this.getFileSize(this.path);
    return ws;
  };

  isExceedMaxFileSize = (p: string = this.path): boolean => {
    return this.getFileSize(p) > this.maxFileSize;
  };

  get maxFileSize() {
    return this.config.maxFileSize ?? 0;
  }
  get useLogFileSize() {
    return this.config!.fileSize ?? 0;
  }

  // 文件大小
  set useLogFileSize(v) {
    this.config!.fileSize = v;
  }

  // 执行写入操作
  _lastWritePlugin = (logData: any) => {
    const stdoutContent =
      this.timestampLevelAndCategory(logData, "red") + logData.content + eol;
    const buffer = Buffer.from(stdoutContent);
    this.useLogFileSize += buffer.length;
    this.largeFileHandle();
    // 更新一下，因为每次写入后外面无法监听，后续在做优化吧
    // this.ws.write(buffer, (err: Error | unknown) => {
    //   console.log(err, "errerr");

    //   // if (this.chunks.length == 0) {
    //   //     self.writeable = false;
    //   // }else {
    //   //     this.chunks.shift()();
    //   // }
    // });

    // 新的逻辑
    const ws = this._createWriteStream();
    ws.end(buffer, (err?:any) => {
      console.log(err);
    })
  };

  // 数据转换 = [{}, '', bool] => "{}''bool"
  _fristWritePlugin = (next: any, logs: any[]) => {
    const data = {
      content: this.format(...logs),
      type: "log",
      preix: "重要",
      level: "all",
      startTime: new Date(),
    };

    next(data);
  };

  // 要区分这个 输入的目的地，
  _write = (logs: any[]) => {
    const last = this._lastWritePlugin;
    let cpPlugin = this.plugins.map((callback, index) => {
      return function (_: any[]) {
        const _params = arguments.length === 0 ? [void 0] : arguments;
        callback(cpPlugin[index + 1] ?? last, ..._params);
      };
    });
    cpPlugin[0](logs);
  };

  // 如果文件过大则新创建文件
  largeFileHandle = (): void => {
    if (!(this.useLogFileSize > this.maxFileSize)) return void 0;
    let p = this._path,
      hscf_content = this.hscf_content[p],
      historyLength = hscf_content?.history.length ?? 0,
      cout = historyLength + 1,
      { root, dir, name, base, ext }: any = parse(p);
    const _name = name,
      lastFile = hscf_content?.history[historyLength];

    // 每次结束都把文件的配置项输出成config配置文件，根据路径去哪里面匹配得到相应信息
    // 如果没有上个文件 或者 有上个文件并且文件也大于的话
    if (!lastFile || (lastFile && this.isExceedMaxFileSize(lastFile.path))) {
      const isExists = () => {
        name = _name + "-" + cout;
        p = format({
          root,
          dir,
          ext,
          base: name + ext,
          name,
        });
        return pathExistsSync(p);
      };
      while (isExists()) {
        cout++;
      }
      this.config.path = p;
      this.config.isPathExists = false;
      this.hscf_content[this._path].history.push({ ...this.config });
    } else {
      // 如果有文件且不大于最大限度的话就采用那个文件
      this.config.path = lastFile.path as string;
    }
    this.ws = this._createWriteStream();
  };

  write = (...logs: any) => {
    // console.log(this.ws.writable,this.getMaxFileSize());
    // if(this.writeable) {
    //     this.chunks.push(() => {
    // this.largeFileHandle();
    //         this._write(logs);
    //     })
    // }else {
    //     this.writeable = true;
    // }
    this._write(logs);
  };

  get path() {
    return this.config.path;
  }

  /**
   * 使用参数 根据plugins文件提供
   * new StreamWrite().use(Plugin)
   * @param callback
   * @returns {This}
   */
  use(callback: (next: (next: Function, logs: any) => unknown, logs: any) => any) {
    this.plugins.push(callback);
    return this;
  }

  protected static createStreamWrite<E>(options?: any) {
    throw new Error("Method not implemented.");
  }
}

export default StreamWrite;

/** StreamWrite params docs */

/** 参数均为可选 */
// new StreamWrite({
//   path: 'process.cwd() + "/logs/out.log"', // 输出文件的路径 默认值 (process.cwd() + "/logs/out.log")[string]
//   isPathExists: false, // 路径是否存在； 默认值为 false[boolean]
//   wsoptions: { flags: "a+", mode: 438, fd: 0, start: 1 /**... 等等 */ }, // writestream参数 object[object]
//   maxFileSize: 10 * 1000 * 1024, // 默认值为 (10 * 1000 * 1024)[number]
//   plugins: [], // 插件 默认 无
// });
