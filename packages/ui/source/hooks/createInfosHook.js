import { reactive } from 'vue';

const createInfo = (basic) => {
  const baseMsg = {
    label: '日志信息: ',
    type: 'info'
  };
  const lines = reactive([baseMsg]);
  /**
   * @param {{type: string, label: string}} data
   */
  const addLine = (data) => {
    lines.push(data || baseMsg);
  };
  const info = reactive({ clientName: '', id: '', ...basic, lines, addLine });

  return info;
};
const createInfosHook = () => {
  // 基本的数据格式
  const infos = reactive([createInfo()]);

  // 返回添加操作
  return {
    infos,
    addInfo(any) {
      const info = createInfo(any);
      infos.push(info);
      return info;
    },
    hasInfo(id) {
      return infos.find(item => item.id === id);
    }
  };
};

export { createInfosHook };
