import { defineComponent } from 'vue';
import 'sparrow-ui'
import Layout from './components/layout/index.js';
import Unit from './components/unit/index.js';
const template = `
<Layout>
  <sp-radio-group value='单项' ref={demo}>
    <sp-radio>全部展示</sp-radio>
    <sp-radio>单项</sp-radio>
    <sp-radio>其他</sp-radio>
  </sp-radio-group>
  <div>
    <Unit />
  </div>
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
