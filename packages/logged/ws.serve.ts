/** 集成io的Server服务 */
import Http = require('http');
// import cors = require('koa2-cors');
// import Router = require('koa-router');
// import bodyParser = require('koa-bodyparser');
// import createApplication, { useCores, useBody } from 'sproxy-server/source/kiss'

// 1. 需要重写 this.app.callback
// 2. 需要吧 koa-router 重写一遍

export default class BaseIoServer {
  app = null;
  router = null;
  params = null;
  constructor() {
    // this.init();
    // this.server = Http.Server(this.app.callback()); /** 测试(接口)进程服务状态。与socket公用一个端口。 */
    this.server = Http.Server((req,res) => {
      res.end('')
    }); /** 测试(接口)进程服务状态。与socket公用一个端口。 */

  }

  /** define interface */
  // defineRoute(method, url, callback, ...middleware) {
  //   const stack = this.router.stack;
  //   const l = this.router.stack.length;
  //   let right = false;
  //   for (let i = 0; i < l; i++) {
  //     if (stack[i].path === url) {
  //       console.error('接口重复定义::', url);
  //       right = true;
  //       continue;
  //     }
  //   }
  //   return right ? null : this.router[method || 'get'](url, callback, ...middleware);
  // }
  // /** create disconnect interface */
  // defineRouteDisconnect(callback) {
  //   this.defineRoute('get', '/_socket/disconnect', callback);
  // }
  // /** init */
  // init() {
  //   this.app = createApplication();
  //   // 
  //   this.router = new Router();
  //   this.app
  //     .use(useCores())
  //     .use(useBody())
  //     .use(this.router.routes())
  //     .use(this.router.allowedMethods())
  //     .use((ctx, next) => {
  //       ctx.body = 'here.'; // 测试使用
  //       next();
  //     });
  // }

  listen() {
    return this.server.listen(...arguments);
  }
};
