/** 集成io的Server服务 */
const Koa = require('koa');
const Http = require('http');
const cors = require('koa2-cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
module.exports = class BaseIoServer {
  app = null;
  router = null;
  params = null;
  constructor() {
    this.init();
    this.server = Http.Server(this.app.callback()); /** 测试(接口)进程服务状态。与socket公用一个端口。 */
  }

  /** 定义接口 */
  defineRoute(method, url, callback, ...middleware) {
    const stack = this.router.stack;
    const l = this.router.stack.length;
    let right = false;
    for (let i = 0; i < l; i++) {
      if (stack[i].path === url) {
        console.error('接口重复定义::', url);
        right = true;
        continue;
      }
    }
    return right ? null : this.router[method || 'get'](url, callback, ...middleware);
  }
  /** 断开接口 */
  defineRouteDisconnect(callback) {
    this.defineRoute('get', '/_socket/disconnect', callback);
  }
  init() {
    this.app = new Koa();
    this.router = new Router();
    this.app
      .use(cors())
      .use(bodyParser())
      .use(this.router.routes())
      .use(this.router.allowedMethods())
      .use((ctx, next) => {
        ctx.body = 'here.'; // 测试使用
        next();
      });
  }

  listen() {
    return this.server.listen(...arguments);
  }
};
