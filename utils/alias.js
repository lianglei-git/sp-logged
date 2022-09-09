/**
 * 转义编译时，文件别名（JSconfig.json）IDE跳转使用
 */

const { join, resolve } = require('path');
const fs = require('fs');
const FRAMEWORK_PATH = join(__dirname, '../../', 'framework');
const SRC_PATH = join(__dirname, '..');
const moduleAlias = require('module-alias');
const FRAMEWORK_Files = fs.readdirSync(FRAMEWORK_PATH);
const SRC_Files = fs.readdirSync(SRC_PATH);

function resolvePathMap(anys, paths) {
  return anys.reduce((maps, files, idx) => {
    maps[idx] = files.reduce((target = {}, file) => {
      !/\./g.test(file) && Reflect.set(target, file, resolve(paths[idx], file));
      return target;
    }, maps[idx]);
    return maps;
  }, new Array(anys.length));
}

resolvePathMap([FRAMEWORK_Files, SRC_Files], [FRAMEWORK_PATH, SRC_PATH]).forEach(e => moduleAlias.addAliases(e));
