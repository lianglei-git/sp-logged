import { createContext, useContext, useEffect } from 'react';
import { useEffectSync } from './hook-effect-sync';

/** 当前已经生成的上下文映射表 */
const Contexts = {};

/**
 * 获取上下文实例
 * @param {string} key
 * @returns {React.Context<MessageManager>};
 */
export const getMessageContext = (key = 'default') => {
  Contexts[key] = Contexts[key] || createContext(new MessageManager());
  return Contexts[key];
};

/**
 * 获取消息发送器
 * @param {string} key 要获取的发送器唯一标识符，默认为default
 */
export const useMessage = (key = 'default') => {
  return useContext(getMessageContext(key));
};

/**
 * 侦听一个消息
 * @param {string} name 要侦听的消息
 * @param {*} callback 消息回调
 * @param {string} key 要使用的消息管理器，默认为default
 */
export const useMessageListen = (name, callback, key = 'default') => {
  var mgr = useContext(getMessageContext(key));

  useEffect(() => {
    return mgr.addListener(name, callback);
  }, [name, key]);
};

/** 消息管理器 */
export class MessageManager {
  /** @type {{[key:string]:(()=>{})[]}} 当前的消息侦听表 */
  messages = {};

  /**
   * 添加侦听
   * @param {string} name 要侦听的消息名
   * @param {()=>{}} func 回调方法
   * @returns
   */
  addListener(name, func) {
    this.messages[name] = this.messages[name] || [];
    this.messages[name].push(func);
    // 析构处理
    return () => {
      this.messages[name].splice(this.messages[name].indexOf(func), 1);
    };
  }

  /** 触发消息 */
  trigger(name, ...props) {
    for (var i in this.messages[name]) {
      this.messages[name][i](...props);
    }
  }

  triggerSync(name, ...props) {
    if (!Array.isArray(this.messages[name])) return [];
    return Promise.all(this.messages[name].map((func) => func(...props)));
  }
}
