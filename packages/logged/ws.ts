import {Server as socketIO} from 'socket.io';
import BaseIoServer from './ws.serve';
import { UUID } from './u';

const wsServerEvents = ['connection', 'error', 'headers', 'listening', 'message'];
const wsBasicEventName = ['connection', 'disconnect', 'error', 'connect', 'join', 'ping', 'reconnect'];
// 抛出生命周期， beforeConnect、connected、beforeClose、closed、disconnect
class CreateWebSocketServer {
  wss;
  port;
  /** BaseIoServer */
  wsServer;
  TIME = null; /** 计时器 */
  uuid = UUID();

  #_beforeConnect;
  #_connected;
  #_disconnect;
  #_beforeClose;
  #_closed;
  /**
   * @param {BaseIoServer} server
   * @param {{port?: number, onBeforeConnect?: Function, onConnected?: Function, onBeforeClose?: Function, onClosed?: Function, onDisconnect?: Function}} config
   */
  constructor(server, config) {
    this.port = config.port || 24687;
    this.wsServer = server || new BaseIoServer();
    this.autoDestroy();
    const _function = new Function();
    this.#_beforeConnect = config.onBeforeConnect || _function;
    this.#_connected = config.onConnected || _function;
    this.#_disconnect = config.onDisconnect || _function;
    this.#_beforeClose = config.onBeforeClose || _function;
    this.#_closed = config.onClosed || _function;
    this.startup();
  }

  _close() {
    if (this.#_beforeClose() === true) return void 0;
    this.TIME && clearTimeout(this.TIME);
    this.wss && this.wss.close();
    if (this.#_closed() === true) return void 0;
  }

  startup() {
    if (this.#_beforeConnect() === true) return void 0;
    this.wss = new socketIO(this.wsServer.server, {
      serveClient: false,
      cors: {
        credentials: true
      },
      maxHttpBufferSize: 1e8,
      pingTimeout: 60000
    });
    this.wss.on('connection', (socket) => {
      if (this.#_connected(socket) === true) return void 0;
      this._connect(socket);
    });
    this.wsServer.listen(this.port, '0.0.0.0', () => {
      console.log('http服务启动端口： ', this.port);
    });
  }
  _connect(socket) {
    this.lastTime = null;
    const _on = socket.on.bind(socket);
    socket.on = (eventName, callback, ...args) => {
      if (wsBasicEventName.includes(eventName)) {
        return _on(eventName, callback, ...args);
      }
      return _on(eventName, (arg, ack) => {
        const clientUUID = (arg && arg.clientUUID) || null;
        if (clientUUID && clientUUID !== this.uuid) {
          socket.emit('reset');
          socket.disconnect();
          return () => [];
        }
        return callback(arg, ack);
      });
    };
    socket.emit('uuid', this.uuid);
    socket.on('disconnect', (reason) => {
      if (this.#_disconnect(reason) === true) return void 0;
      console.log('socket disconnect 连接丢失', reason);
      this.lastTime = new Date().getTime();
    });

    socket.on('reconnect', () => {
      console.log('reconnect');
      this.lastTime = null;
    });
  }

  autoDestroy = () => {
    this.TIME = setTimeout(this.autoDestroy, 1000);
    if (this.lastTime == null) return;
    if (this.lastTime + 1000 * 60 < Date.now()) {
      this._close();
    }
  };

  on(event, fn) {
    this.wss.on(event, fn);
  }
  emit(...args) {
    this.wss.emit(...args)
  }

  off(event, fn) {
    this.wss.off(event, fn);
  }

  close() {
    
    const wss = this.wss;
    this._close();
    // return new Promise((resolve, reject) => {
    //   wss.clients.forEach((client) => {
    //     client.terminate()
    //   })
    //   wss.close((err) => {
    //     if (err) {
    //       reject(err)
    //     } else {
    //       if (httpsServer) {
    //         httpsServer.close((err) => {
    //           if (err) {
    //             reject(err)
    //           } else {
    //             resolve()
    //           }
    //         })
    //       } else {
    //         resolve()
    //       }
    //     }
    //   })
    // })
  }
}

export { CreateWebSocketServer };

