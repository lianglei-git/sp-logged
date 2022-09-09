import { defineComponent } from 'vue';
import Layout from './components/layout/index.js';
import Unit from './components/unit/index.js';
const template = `
<Layout>
<Unit />
</Layout>
`;

const RootComponent = defineComponent({
  template,
  components: {
    Layout,
    Unit
  },
  setup() {}
});

export default RootComponent;
