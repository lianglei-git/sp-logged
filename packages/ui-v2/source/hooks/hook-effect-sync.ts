import { useEffect, useRef } from 'react';

/**
 * 立即运行回调的useEffect
 * @param {()=>(()=>{})} callback 要运行的回调函数
 * @param {[]} vals 要侦听的变化内容
 */
export const useEffectSync = (callback, vals) => {
  /** 用于保存数据 */
  var save = useRef({
    init: false,
    /** 上一次的对比内容 */
    vals: [],
    /** 最后一次的dispose回调 */
    dispose: null
  }).current;

  // 判断内容是否变化
  var change = vals == null || save.init === false;
  for (var i in vals) {
    if (vals[i] !== save.vals[i]) {
      change = true;
    }
  }
  save.vals = vals;
  save.init = true;

  // 如果变化则运行回调
  if (change) {
    // 执行上一次的析构
    if (save.dispose) {
      save.dispose();
      delete save.dispose;
    }
    // 运行一次回调
    save.dispose = callback();
  }

  // 处理最后一次析构
  useEffect(() => {
    return () => {
      // 如果还有dispose没有运行则运行
      if (save.dispose) {
        save.dispose();
      }
    };
  }, []);
};
