import SocketIo, { Socket } from 'socket.io-client'


type WsParams = {
  WsURI: string
}
class Ws {

  wss: Socket | null = null;
  constructor(params: WsParams) {
    this.wss = SocketIo(params.WsURI);
  }


  static proto: Ws | null = null;
  static create(p: WsParams) {
    if (!Ws.proto) {
      return Ws.proto = new Ws(p);
    }
    return Ws.proto;
  }


}

export default Ws;