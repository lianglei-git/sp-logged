import { loadVue } from 'utils';
import { defineComponent, onMounted, onUpdated, ref } from 'vue';
const template = await loadVue(import.meta.url, 'item.vue');
export default defineComponent({
  template,
  props: ['info'],
  setup() {
    onMounted(() => {
      console.log('初始化');
    });

    return {
      any: 'any'
    };
  }
});
