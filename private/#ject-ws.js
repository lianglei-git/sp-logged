const { CreateWebSocketServer } = require('../utils/ws');
// const eventsBranch = require('../other/branchEvents');
const ws = new CreateWebSocketServer(void 0, {
  port: 28256,
  onConnected(socket) {
    console.log('privaste 连接成功');
  },
  onBeforeConnect() {
    setTimeout(() => {
      ws.wsServer.defineRouteDisconnect((ctx) => {
        console.log('关闭socket');
        // ws.close();
        // ctx.body = {};
      });
    }, 1000);
  },
  onBeforeClose() {
    return true;
  }
});

const cfg = {
  sendMsg(str) {
    ws.emit('log_msg', str);
  }
};

module.exports = cfg;
