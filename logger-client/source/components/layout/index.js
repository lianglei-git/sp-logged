import { loadVue } from 'utils';
import { defineComponent } from 'vue';
const template = await loadVue(import.meta.url, 'index.vue');

export default defineComponent({
  template
});
