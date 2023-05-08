/** rewrite color.js */
const formatter =
  (open: string, close: string, replace = open) =>
    (input: string) => {
      const string = '' + input;
      const index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };

const replaceClose = (string: string, close: string, replace: any, index: number):string => {
  const start = string.substring(0, index) + replace;
  const end = string.substring(index + close.length);
  const nextIndex = end.indexOf(close);
  return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const toBrowserColor = (color: string) => (input: any) => `<span style="color:${color}">${input}</span>`.replaceAll('\n', '<br />');
const toBrowserColorB = (color: string) => (input: any) =>
  `<span style="background:${color};"><span style="filter: invert(100%);color:${color}">${input}</span></span>`.replaceAll('\n', '<br />');

const createColors = (enabled = true) => ({
  reset: enabled ? (s: any) => `\x1b[0m${s}\x1b[0m` : String,
  bold: enabled
    ? formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m')
    : (msg: any) => `<span style="font-weight: bold">${msg}</span>`,
  dim: enabled ? formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m') : String,
  italic: enabled ? formatter('\x1b[3m', '\x1b[23m') : String,
  underline: enabled ? formatter('\x1b[4m', '\x1b[24m') : String,
  inverse: enabled
    ? formatter('\x1b[7m', '\x1b[27m')
    : (msg: any) => `<span style="filter: invert(100%)">${msg}</span>`,
  hidden: enabled ? formatter('\x1b[8m', '\x1b[28m') : String,
  strikethrough: enabled ? formatter('\x1b[9m', '\x1b[29m') : String,
  //
  black: enabled ? formatter('\x1b[30m', '\x1b[39m') : toBrowserColor('black'),
  red: enabled ? formatter('\x1b[31m', '\x1b[39m') : toBrowserColor('red'),
  green: enabled ? formatter('\x1b[32m', '\x1b[39m') : toBrowserColor('green'),
  yellow: enabled ? formatter('\x1b[33m', '\x1b[39m') : toBrowserColor('yellow'),
  blue: enabled ? formatter('\x1b[34m', '\x1b[39m') : toBrowserColor('blue'),
  magenta: enabled ? formatter('\x1b[35m', '\x1b[39m') : toBrowserColor('magenta'),
  cyan: enabled ? formatter('\x1b[36m', '\x1b[39m') : toBrowserColor('cyan'),
  white: enabled ? formatter('\x1b[37m', '\x1b[39m') : toBrowserColor('white'),
  gray: enabled ? formatter('\x1b[90m', '\x1b[39m') : toBrowserColor('gray'),

  bgBlack: enabled ? formatter('\x1b[40m', '\x1b[49m') : toBrowserColorB('black'),
  bgRed: enabled ? formatter('\x1b[41m', '\x1b[49m') : toBrowserColorB('red'),
  bgGreen: enabled ? formatter('\x1b[42m', '\x1b[49m') : toBrowserColorB('green'),
  bgYellow: enabled ? formatter('\x1b[43m', '\x1b[49m') : toBrowserColorB('yellow'),
  bgBlue: enabled ? formatter('\x1b[44m', '\x1b[49m') : toBrowserColorB('blue'),
  bgMagenta: enabled ? formatter('\x1b[45m', '\x1b[49m') : toBrowserColorB('magenta'),
  bgCyan: enabled ? formatter('\x1b[46m', '\x1b[49m') : toBrowserColorB('cyan'),
  bgWhite: enabled ? formatter('\x1b[47m', '\x1b[49m') : toBrowserColorB('white')
});

const pcolor = createColors();

module.exports = { pcolor, createColors };
