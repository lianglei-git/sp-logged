import { io } from 'socket';
import { onBeforeMount } from 'vue';

const SOCKET_IP = 'http://' + location.hostname + ':28256';
// const SOCKET_IP = 'http://10.2.107.46:28256';

const createWsHook = (ip = SOCKET_IP) => {
  return new Promise((res) => {
    onBeforeMount(() => {
      const ws = io(ip);
      ws.on('connect', () => {
        console.log('连接成功');
        window.onbeforeunload = () => {
          console.log('刷新');
          fetch(ip + '/_socket/disconnect');
        };
        res(ws);
      });
    });
  });
};

export { createWsHook };
