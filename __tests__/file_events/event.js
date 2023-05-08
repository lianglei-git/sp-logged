/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/** eslint-disable file */
import fs, { readFile } from 'node:fs';
// import glob from 'glob';
// glob('./*.js', (err, matchs) => {
//     console.log(matchs)
// })
const { watchFile, watch } = fs;
const CONST_PATH = './e.txt';
// watchFile(CONST_PATH, (curr, prev) => {
// //   console.log(curr, prev);
// });

const watchEText = watch(CONST_PATH);

const _throttled = new Map();
const _throttle = (type, file, timeout) => {
  if (!_throttled.has(type)) {
    _throttled.set(type, new Map());
  }
  const action = _throttled.get(type);
  const actionPath = action.get(file);

  if (actionPath) {
    actionPath.count++;
    return false;
  }

  let timeoutObj;
  const clear = () => {
    const item = action.get(file);
    const count = item.count || 0;
    action.delete(file);
    clearTimeout(timeoutObj);
    if (item) clearTimeout(item.timeoutObj);
    return count;
  };

  timeoutObj = setTimeout(clear, timeout);
  const thr = { timeoutObj, clear, count: 0 };
  action.set(file, thr);
  return thr;
};

/** ========================   开发区    ======================== */

let a = 0;
watchEText.on('change', (eventType, filename) => {
//     const is = _throttle('module_watch', filename, 10);
//     console.log(!is);
//   if (!is) return;
//   a++;
  console.log('修改了修改了', eventType, filename, a);
  readFile(filename, (err,data) => {
    console.log(data);
  })
});

watchEText.on('close', () => {
  console.log('close 了');
});
