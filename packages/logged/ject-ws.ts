import { CreateWebSocketServer } from './ws';
import { existsSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

/** ==========   CONST    ========== **/
const __dirname = dirname(fileURLToPath(import.meta.url));
const FLAG_FILE_PATH = resolve(__dirname, './show.v');
// const eventsBranch = require('../other/branchEvents');

// 这里需要看一下在子进程里 require是否会使用同一个缓存? 看来是不行的，要通过其他方式来限制 WS
// 全局只能有一个 WS 实际对象
// 通过文件系统来判断吧...

function isInstance() {
  const is = existsSync(FLAG_FILE_PATH);
  // if (is) {
  //   throw Error('Only one instance object can exist!');
  // }
  return is;
}

function createShowVFile() {
  return !isInstance() && writeFileSync(FLAG_FILE_PATH, Buffer.from([0x62]));
}

function removeShowVFile() {
  return isInstance() && rmSync(FLAG_FILE_PATH);
}

const gl:any = {
  private_ws: null,
  sendMsg(str: any) {
    isInstance();
    this.private_ws.emit('log_msg', str);
  },
  instance() {
    // if (isInstance()) throw Error('Only one instance object can exist!');
    createShowVFile();
    this.private_ws = new CreateWebSocketServer(void 0, {
      port: 28256,
      onConnected(socket:any) {
        console.log('privaste 连接成功');
      },
      onBeforeConnect() {
        setTimeout(() => {
          // this.private_ws.wsServer.defineRouteDisconnect((ctx:any) => {
          //   console.log('关闭socket');
          //   // ws.close();
          //   // ctx.body = {};
          // });
        }, 1000);
      },
      onBeforeClose() {
        removeShowVFile();
        return true;
      }
    });

    return this.private_ws ;
  }
};
export default gl;
export {
  isInstance,
  removeShowVFile,
  createShowVFile
};
