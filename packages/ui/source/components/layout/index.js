import { loadVue } from 'utils';
import { defineComponent } from 'vue';
const template = await loadVue(import.meta.url, 'index.vue');
// import template from './index.vue'

export default defineComponent({
  template,
  // setup() {
  //   document.body.innerHTML = template
  // }
});
