import { loadVue } from 'utils';
import { defineComponent, onUpdated, ref } from 'vue';
import Item from './item.js';
import { createInfosHook, createWsHook } from 'hooks';
import { pcolor } from 'utils';
import { io } from 'socket';
const template = await loadVue(import.meta.url, 'index.vue');

const startup = (base) => {
  createWsHook().then((ws) => {
    ws.on('log_msg', (data) => {
      if(data.id && data.id.length > 9) {
        data.id = data.id.slice(-9)
      }
      if (!data.id) {
        // 主进程信息
        base.infos[0].lines.push({ label: data.message, type: 'info' });
        return void 0;
      }

      const ed = base.hasInfo(data.id);
      if (ed) {
        ed.addLine({ label: data.message, type: 'info' });
      } else {
        const info = base.addInfo(data);
        info.addLine({ label: data.message, type: 'info' });
      }
      setTimeout(() => {
        let dom = document.getElementById(data.id);
        dom.scrollTop = dom.scrollHeight;
      })
    });
  });


};
export default defineComponent({
  template,
  components: {
    Item
  },
  setup() {
    const base = createInfosHook();
    const container = ref(null);
    // onUpdated(() => {
    //   console.log('更新了', container.value);
    // });
    startup(base);
    return { infos: base.infos, container };
  }
});
