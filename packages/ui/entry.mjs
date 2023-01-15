import { createApp } from 'vue';
import { SWorker } from './libs/sw-entry.mjs';
import { Notify } from '@sparrowend/ui'

const sw = new SWorker('service-worker.js', { scope: './' });


window.addEventListener('sw.update', (event) => {
  const code = [
    "<div>",
    "  <sp-button onclick='window.sw_Notify_update()' type='primary'>更新</sp-button>",
    "  <sp-button onclick='window.sw_Notify_close()' type='danger'> 取消</sp-button>",
    "</div>"
  ];
  const _Notify = Notify({
    title: "❗️ service worker 是否需要更新？",
    message: code.join('\n'),
    duration: 0
  })
  window.sw_Notify_update = event.update;
  window.sw_Notify_close = _Notify.close;
})
import('./source/main.mjs').then((RootComponent) => {
  createApp(RootComponent.default).mount('#app');
});
