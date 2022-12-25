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
      data.id = data.port;
      if (!data.port) {
        // 主进程信息
        base.infos[0].lines.push({ label: data.str, type: 'info' });
        return void 0;
      }

      const ed = base.hasInfo(data.port);
      if (ed) {
        ed.addLine({ label: data.str, type: 'info' });
      } else {
        const info = base.addInfo(data);
        info.addLine({ label: data.str, type: 'info' });
      }
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
