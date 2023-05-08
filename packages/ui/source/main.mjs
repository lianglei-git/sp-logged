import { defineComponent } from 'vue';
import '@sparrowend/ui'
import Layout from './components/layout/index.js';
import Unit from './components/unit/index.js';
import FristDesign from './components/fristDesign/index.js';
// const template = `
// <Layout>
//   <sp-button @click="request">请求一下</sp-button>
//   <sp-radio-group value='单项' ref={demo}>
//     <sp-radio>全部展示</sp-radio>
//     <sp-radio>单项</sp-radio>
//     <sp-radio>其他</sp-radio>
//   </sp-radio-group>
//   <div>
//     <Unit />
//   </div>
// </Layout>
// `;

/** design of frist */
const template = `
<Layout>
  <FristDesign />
</Layout>
`;

const RootComponent = defineComponent({
  template,
  components: {
    Layout,
    Unit,
    FristDesign
  },
  setup() {
    return {
      request(){
        fetch("http://127.0.0.1:8080/entry.mjs")
      }
    }
  }
});

export default RootComponent;
