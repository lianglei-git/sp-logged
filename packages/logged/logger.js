const { pcolor: colors, createColors } = require('./pcolor');
const basic = ['log', 'error', 'info', 'table'];
const outputKeys = ['timestamp', 'error', 'clear']; // output options keys
const process = require('process');
let lastMsg = null;
let lastType = null;
let sameCount = 0;

const browserColors = createColors(false);

// 文件输出使用
function clearScreen() {
  // 清空
}

const plugins = {
  /** shu'f */
  client_logger() {
    return {
      enforce: 'post',
      start(type, _msg, options, htmlStr, other) {
        const branchSocket = require('../private/#ject-ws');
        branchSocket.sendMsg({
          str: htmlStr,
          ...other,
          ...options
        });
      }
    };
  },
  sendPrintBranch() {
    return {
      enforce: 'pre',
      /**
       * 发送输出请求
       * @param {{type: string; msg :string, options: object}} loggerOptions
       */
      start(loggerOptions) {
        // if (global.branch || options.branch) {
        //   // console.log('正常操作 --> ');
        //   // 主窗口处理
        // } else {
        process.send({
          data: 'print',
          loggerOptions
        });
        return true;
        // }
      }
    };
  },
  tofile() {
    return {};
  },
  oneline() {
    return {
      enforce: 'pre',
      start(loggerOptions) {
        // let msg;
        if (typeof loggerOptions.msg === 'object') {
          try {
            loggerOptions.msg = JSON.stringify(loggerOptions.msg);
          } catch {
            // msg = _msg;
          }
        }
      }
    };
  }
};

const _plugins = [plugins.tofile()];

function createLogger(options = {}) {
  const loggedErrors = new WeakSet();
  const warnedMessages = new Set();

  let { prefix = '[冠脉]', allowClearScreen = true, plugins, ...other } = options;
  plugins = [..._plugins, ...plugins];
  // 缺少判断条件k, 保留个别判断空隙
  const canClearScreen = allowClearScreen;
  const clear = canClearScreen ? clearScreen : () => {};
  function output(_type, _msg, _options = {}) {
    const anys = { type: _type, msg: _msg, options: _options };
    for (let i = 0; i < plugins.length; i++) {
      if (plugins[i].enforce === 'pre') {
        if (plugins[i].start(anys)) return void 0;
      }
    }

    const { type, msg, options } = anys;
    const method = type === 'red' ? 'error' : type === 'yellow' ? 'warn' : type === 'gray' ? 'info' : 'log';
    const format = (isBrowser) => {
      const color = colors[type] ? colors[type] : (a) => a;
      const browserColor = browserColors[type] ? browserColors[type] : (msg) => `<span>${msg}</span>`;
      if (options.timestamp) {
        const tag = color(colors.bold(prefix));
        const browserTag = browserColors.bold(browserColor(prefix));
        return isBrowser
          ? `<span>${new Date().toLocaleTimeString()} ${browserTag} ${browserColors.bold(msg)}</span> `
          : `${colors.dim(new Date().toLocaleTimeString())} ${tag} ${msg}`;
      } else {
        return isBrowser ? browserColor(msg) : color(msg);
      }
    };

    if (options.error) {
      loggedErrors.add(options.error);
    }
    if (canClearScreen) {
      if (lastMsg === msg && lastType === type) {
        sameCount++;
        clear();
        console[method](format(), colors.yellow(`(x${sameCount + 1})`));
      } else {
        sameCount = 0;
        lastMsg = msg;
        lastType = type;
        if (options.clear) {
          clear();
        }
        console[method](format());
      }
    } else {
      console[method](format());
    }
    const htmlStr = format(true);
    for (let i = 0; i < plugins.length; i++) {
      if (plugins[i].enforce === 'post') plugins[i].start(type, _msg, options, htmlStr, other);
    }
    return htmlStr;
  }

  const oneline = (type, ...args) => {
    const last = args[args.length - 1];
    const isObj = Object.prototype.toString.call(last) === '[object Object]';
    const isOutputOptions = isObj && outputKeys.map((key) => last[key]).filter(i => i)[0];
    const options = (isOutputOptions && last) || Object.create(null);
    if (isOutputOptions) {
      args = args.splice(0, args.length - 1);
    }
    const al = args.reduce((t, i) => {
      if (typeof i === 'object') {
        t += JSON.stringify(i);
      } else {
        t += i;
      }
      return t;
    }, '');
    return output(type, al, options);
  };
  const logger = {
    hasWarned: false,
    clear,
    output: oneline,
    _output: output,
    log(...msg) {
      return oneline('log', ...msg);
    },
    error(...msg) {
      logger.hasWarned = true;
      return oneline('red', ...msg);
    },
    warn(...msg) {
      return oneline('yellow', ...msg);
    },
    info(...msg) {
      return oneline('gray', ...msg);
    },
    warnOnce(...msg) {
      if (warnedMessages.has(msg[0])) return;
      logger.hasWarned = true;
      warnedMessages.add(msg[0]);
      return logger.warn(...msg);
    },
    hasErrorLogged(error) {
      return loggedErrors.has(error);
    },
    transform() {
      console.log('transform');
    }
  };
  return logger;
}

// 输出url
// function printServerUrls(urls, optionsHost) {
//     const colorUrl = (url) =>
//     colors.cyan(url.replace(/:(\d+)\//, (_, port) => `:${colors.bold(port)}/`))
// }

module.exports = {
  createLogger,
  plugins
};
