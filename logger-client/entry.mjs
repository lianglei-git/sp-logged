import { createApp } from 'vue';
import('./source/main.mjs').then((RootComponent) => {
  createApp(RootComponent.default).mount('#app');
});
