(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.umd = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    const runIFELSE = sets => {
      let _arr = new Array();
      for (let [is, fn = () => true] of sets) {
        if (is) {
          if (fn()) {
            _arr.push(true);
            break;
          }
          _arr.push(false);
        }
      }
      if (!_arr.includes(false)) {
        return true;
      }
    };
    let _globalThis;
    const getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
    };
    const sto = (fn, time = 16) => {
      let t = setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        yield fn();
        clearTimeout(t);
      }), time);
      return t;
    };
    const isObject = tar => Object.prototype.toString.call(tar) === '[object Object]';
    const has = (target, key) => Reflect.has(target, key);
    function ArrayRemove(any) {
      if (Array.isArray(any)) {
        any.map(i => {
          this.map((i2, idx) => {
            if (i == i2) this.splice(idx, 1);
          });
        });
        return;
      }
      this.map((i, idx) => i == any && this.splice(idx, 1));
    }

    let zIndex = 2000;
    const getIndex = () => {
      return zIndex;
    };
    const setIndex = (i = 1) => {
      zIndex += i;
      return zIndex;
    };

    const messageTypeslProps = () => ({
      visible: false,
      type: 'success'    ,
      message: '',
      duration: 3000,
      showclose: false,
      center: false,
      offset: 20,
      beforeClose: () => {},
      style: undefined,
      className: ''
    });

    const $el = (el, target = document) => target.querySelectorAll(el);
    const createEl = (tag, type = 'createElement') => document[type](tag);
    const setStyle = (target, obj) => {
      for (const key in obj) {
        // Object.prototype.hasOwnProperty.call(target['style'], key) && 
        if (obj[key] != "") {
          target['style'][key] = obj[key];
        }
      }
    };
    const getProps = target => {
      let attributes = target.attributes;
      let _o = new Array(attributes.length).fill(null).reduce((obj, _, index) => {
        let prop = attributes.item(index);
        obj[prop['nodeName']] = prop['value'];
        return obj;
      }, {});
      return _o;
    };
    const defineEl = (props, Element, options) => {
      var _a;
      // let _corel: HTMLElement | { [key: string]: any } | any = null
      // let tags = window?.customElements?.get(props.tag)
      if (typeof window !== 'undefined') {
        let is = runIFELSE(new Set([[props.tag.indexOf('-') == -1, () => {
          // 这里后续会替换成 用我们本组件内的提示
          alert('请检查 tag 参数！');
        }]
        // [tags , (): boolean => {
        //     alert('已经存在了这个标签，bro')
        //     return false
        // }]
        ]));

        if (!is) return;
        //props?.observedAttributes
        let getAttribute = (target, observedAttributes) => {
          if (observedAttributes) {
            observedAttributes.forEach(attr => {
              Object.defineProperty(target, 'attr-' + attr, {
                enumerable: false,
                configurable: false,
                get() {
                  return target.getAttribute(attr);
                },
                set(val) {
                  target.setAttribute(attr, val);
                }
              });
            });
          }
        };
        let wishClass = name => {
          var _a;
          let o = {
            [name]: (_a = class extends HTMLElement {
              constructor() {
                super();
                props.shadow ? this.attachShadow({
                  mode: props.shadow
                }) : '';
                // new Proxy(this, {});
                o[name].target = this;
                // _corel = this
                getAttribute(this, props === null || props === void 0 ? void 0 : props.observedAttributes);
              }
              connectedCallback() {
                var _a, _b;
                props.connectedCallback.bind(this)() || (() => {});
                (_b = (_a = this).onload) === null || _b === void 0 ? void 0 : _b.call(_a);
              }
              disconnectedCallback() {
                var _a;
                ((_a = props.disconnectedCallback) === null || _a === void 0 ? void 0 : _a.bind(this)()) || (() => {});
              }
              attributeChangedCallback(name, oldValue, newValue) {
                var _a;
                (_a = props.attributeChangedCallback) === null || _a === void 0 ? void 0 : _a.bind(this)(name, oldValue, newValue);
              }
            }, _a.target = undefined, _a)
          };
          return o[name];
        };
        let HTMl = wishClass(props.tag);
        Reflect.has(props, 'getConstructor') && ((_a = props.getConstructor) === null || _a === void 0 ? void 0 : _a.bind(undefined)(HTMl));
        HTMl.observedAttributes = (props === null || props === void 0 ? void 0 : props.observedAttributes) || [];
        // getAttribute(HTMl?.target, props?.observedAttributes)
        window.customElements.define(props.tag, Element || HTMl, options);
        return HTMl;
      }
    };
    // 绑定事件
    const listener = (target, event, func, opt) => {
      if (target.addEventListener) {
        target.addEventListener(event, func, opt);
      }
      return {
        remove: function remove() {
          if (target.removeEventListener) {
            target.removeEventListener(event, func);
          }
        }
      };
    };

    class MessageBase {
      constructor() {
        this.setup = function () {
          let allEls = $el('sp-message');
          let propsOffset = parseInt(this.attrs.offset) || 20;
          let top = [...allEls].reduce((total, el) => {
            el['attr-visible'] == 'true' && (total += el.offsetHeight + propsOffset);
            return total;
          }, propsOffset);
          this['attr-visible'] = 'true';
          setStyle(this, {
            top: top + 'px',
            zIndex: getIndex() + ''
          });
        };
        this.initView = function () {
          this.className = 'sp-message sp-message-' + this.attrs.type;
          this.id = 'sp-message__' + getIndex();
          let iconEl = createEl('span'),
            contentEl = createEl('div'),
            closeEl = createEl('span'),
            t = null;
          contentEl.innerHTML = this.attrs.message;
          iconEl.className = 'sp-icon sp-icon-' + this.attrs.type;
          closeEl.className = 'sp-icon sp-icon-close';
          contentEl.className = 'sp-message-content';
          this.appendChild(iconEl);
          this.appendChild(contentEl);
          this.attrs.showclose == 'true' && this.appendChild(closeEl);
          if (+this.attrs.duration > 0) {
            t = sto(() => {
              this['attr-visible'] = false;
            }, +this.attrs.duration);
          }
          closeEl.onclick = () => {
            t > 0 && clearTimeout(t);
            this['attr-visible'] = false;
          };
          setStyle(contentEl, {
            justifyContent: this.attrs.center == 'true' ? 'center' : ''
          });
        };
        let self = this;
        defineEl({
          tag: 'sp-message',
          observedAttributes: Object.keys(messageTypeslProps()),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, messageTypeslProps()), this.attrs);
            this.close = () => {
              this['attr-visible'] = false;
            };
            sto(() => {
              self.initView.call(this);
            });
            this.setup = self.setup.bind(this);
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            let elAlls = Array.from($el('sp-message'));
            runIFELSE.call(this, new Set([[key == 'visible', () => {
              var _a;
              let offsetHeight = this.offsetHeight;
              newval && setIndex();
              if (newval == 'false') {
                setStyle(this, {
                  opacity: '0',
                  zIndex: '0'
                });
                this.classList.add('sp-message-fade-leave');
                let _index = elAlls.findIndex(i => i.id == this.id);
                this.beforeClose && this.beforeClose();
                elAlls.forEach((element, i) => {
                  if (i >= _index) {
                    setStyle(element, {
                      top: parseInt(element.style.top, 10) - offsetHeight - 20 + 'px'
                    });
                  }
                });
                (_a = this.beforeDistroy) === null || _a === void 0 ? void 0 : _a.call(this);
                sto(() => this.remove(), 290);
              } else {
                this.classList.add('sp-message-fade-enter');
                sto(() => this.classList.add('sp-message-fade-enter-active'));
              }
            }]]));
          }
        });
      }
    }
    function Message(params = messageTypeslProps()) {
      let props = Object.assign(Object.assign({}, messageTypeslProps()), params);
      delete props.visible;
      let t = createEl('sp-message');
      runIFELSE(new Set([[has(props, 'beforeClose'), () => {
        t.beforeClose = props.beforeClose;
        delete props.beforeClose;
      }], [has(params, 'style'), () => {
        setStyle(t, params.style);
        delete props.style;
      }], [has(params, 'className'), () => {
        t.classList.add(params.className);
        delete params.className;
      }]]));
      for (let k in props) {
        t[`attr-${k}`] = props[k] + '';
      }
      document.body.appendChild(t);
      t.setup();
      let p = new Promise(r => {
        t.beforeDistroy = () => r(t);
      });
      return Object.assign(p, t);
    }
    ['info', 'success', 'error', 'loading', 'warning'].forEach(type => {
      Message[type] = (options, args) => {
        if (isObject(options)) {
          return Message(Object.assign(Object.assign({}, options), {
            type
          }));
        }
        return Message(Object.assign({
          type,
          message: options
        }, args));
      };
    });
    Message.closeAll = () => {
      let allEls = $el('sp-message');
      [...allEls].forEach(el => {
        el['attr-visible'] = false;
      });
    };
    new MessageBase();

    const modaTypeslProps = () => ({
      title: String,
      closable: Boolean,
      appendbody: Boolean,
      visible: Boolean,
      class: String || Array,
      classname: String || Array,
      center: Boolean,
      modal: Boolean,
      canceltext: String,
      oktext: String,
      footer: String || Boolean
    });
    // 如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。
    const modalProps = {
      title: '提示',
      closable: 'true',
      appendbody: 'false',
      visible: 'false',
      class: '',
      classname: '',
      center: 'false',
      modal: 'true',
      canceltext: '取消',
      oktext: '确认',
      footer: 'true',
      setslotstyle: ''
    };

    // import './style'
    // 考虑到loc 这边后续会增加依赖注入和后期依赖参数； (defineReactive)
    // 现在还没办法做到改变外部依赖的数据
    // 打算通过原型注入api e.target
    // 已经实现了多个弹窗叠加功能 
    // 2021-10-7 已完成基本的功能
    // 下一步开始优化代码、单元测试、md文档、动态attr兼容 
    const spButtonCss = `
  .sp-modal-footer{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
  `;
    const keys$7 = Object.keys(modaTypeslProps());
    const cancelClick = function () {
      this.onClose && this.onClose();
    };
    class Modal {
      constructor() {
        this.initView = function (context) {
          {
            setIndex();
          }
          let content = createEl('main'),
            headerL = createEl('span'),
            headerR = createEl('span'),
            header = createEl('header'),
            template = createEl('template'),
            mock = createEl('div'),
            footer = createEl('footer'),
            footerCancel = createEl('sp-button'),
            footerOk = createEl('sp-button');
          let nodes = Array.from(this.children);
          let slots = ['footer', 'header', 'content'];
          let slotObj = nodes.reduce((obj, i) => {
            let slot = i.getAttribute('slot');
            if (slots.includes(slot)) obj[slot] = slot;
            return obj;
          }, Object.create(null));
          this.zIndex = getIndex();
          this.className = 'sp-modal' + ' sp-modal' + (getIndex() - 2000) + ' ' + this.attrs.class;
          content.className = 'sp-modal-content';
          headerR.className = this.attrs.closable == 'false' ? '' : 'sp-icon sp-icon-close';
          mock.className = 'sp-modal-mock sp-modal-mock-' + getIndex();
          header.className = 'sp-modal-header';
          footer.className = 'sp-modal-footer-active';
          headerL.innerHTML = this.attrs.title;
          footerCancel.innerHTML = this.attrs.canceltext;
          footerOk.innerHTML = this.attrs.oktext;
          header.setAttribute('slot', 'header');
          footer.setAttribute('slot', 'footer');
          header.appendChild(headerL);
          header.appendChild(headerR);
          footer.appendChild(footerCancel);
          footer.appendChild(footerOk);
          footerCancel.onclick = cancelClick.bind(this);
          footerOk.onclick = _ => {
            var _a, _b;
            (_a = this === null || this === void 0 ? void 0 : this.onOk) === null || _a === void 0 ? void 0 : _a.call(this, ((_b = this === null || this === void 0 ? void 0 : this.onOk) === null || _b === void 0 ? void 0 : _b.length) > 0 ? _ : null);
          };
          template.innerHTML = `
        <style>${spButtonCss}${this.attrs.setslotstyle}</style>
        <slot name="header"></slot> 
        <slot name="content">按照格式书写</slot>
        <slot name="footer" class="sp-modal-footer"></slot>
        `;
          setStyle(this, {
            zIndex: String(getIndex()),
            marginTop: this.attrs.center == 'false' ? '15vh' : 'auto',
            display: 'none'
          });
          setStyle(mock, {
            zIndex: String(getIndex() - 1),
            display: 'none'
          });
          listener(headerR, 'click', cancelClick.bind(this));
          !(slotObj === null || slotObj === void 0 ? void 0 : slotObj.header) && this.insertBefore(header, this.firstChild);
          this.attrs.footer !== 'null' && !Reflect.has(slotObj, 'footer') && this.appendChild(footer);
          this.shadowRoot.appendChild(template.content.cloneNode(true));
          if (this.attrs.modal !== 'false') {
            document.body.appendChild(mock);
            mock.onclick = cancelClick.bind(this);
          }
          if (this.attrs.visible == 'true') {
            setStyle(this, {
              display: 'block'
            });
            setStyle(mock, {
              display: 'block'
            });
            context.commonClass(this, 'add', 'enter');
            sto(() => {
              context.commonClass(this, 'remove', 'enter');
            }, 290);
          }
          return {
            header,
            headerL,
            headerR,
            mock
          };
        };
        let self = this;
        defineEl({
          tag: 'sp-modal',
          observedAttributes: keys$7,
          shadow: 'open',
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, modalProps), this.attrs);
            if (this.attrs.appendbody == 'true') {
              this.remove();
              this['attr-appendbody'] = 'false';
              document.body.appendChild(this);
            } else {
              sto(() => {
                this.useAllEls = self.initView.call(this, self);
                self.defineReactive(keys$7, this);
              }); // 初始化视图
            }
          },

          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            runIFELSE.call(this, new Set([[key == 'visible', () => {
              newval && setIndex();
              if (this.useAllEls) self._fadeami(newval, this);
            }], [key == 'center', () => {
              setStyle(this, {
                marginTop: newval == 'false' ? '15vh' : 'auto'
              });
            }]]));
          }
        });
      }
      defineReactive(keys, el) {
        keys.map(i => {
          Object.defineProperty(el, i, {
            enumerable: false,
            get() {
              return this['_' + i];
            },
            set(v) {
              this.setAttribute(i, v);
              return this['_' + i] = v;
            }
          });
        });
      }
      commonClass(target, type, base) {
        var _a;
        target.classList[type]('sp-modal-' + base + '-active');
        (_a = target.useAllEls) === null || _a === void 0 ? void 0 : _a.mock.classList[type]('sp-modal-mock-' + base + '-active');
      }
      _fadeami(newkey, target) {
        var _a;
        if (newkey == 'true') {
          setStyle(target, {
            display: 'block',
            zIndex: String(getIndex() + 1)
          });
          setStyle((_a = target.useAllEls) === null || _a === void 0 ? void 0 : _a.mock, {
            display: 'block',
            zIndex: String(getIndex())
          });
          this.commonClass(target, 'add', 'enter');
          sto(() => {
            this.commonClass(target, 'remove', 'enter');
          }, 290);
        } else {
          this.commonClass(target, 'add', 'leave');
          sto(() => {
            var _a;
            setStyle(target, {
              display: 'none'
            });
            setStyle((_a = target.useAllEls) === null || _a === void 0 ? void 0 : _a.mock, {
              display: 'none'
            });
            this.commonClass(target, 'remove', 'leave');
          }, 290);
        }
      }
      static config(params) {
        let _p = Object.assign(Object.assign({}, modalProps), params);
        let dialog = createEl('sp-modal');
        let content;
        let footerhtml;
        if ('bodyhtml' in _p) {
          content = createEl('div');
          content.setAttribute('slot', 'content');
          if (typeof _p.bodyhtml == 'string') {
            content.innerHTML = _p.bodyhtml;
          } else {
            throw Error('请传入相应类型');
          }
          dialog.appendChild(content);
        }
        if ('footerhtml' in _p) {
          footerhtml = createEl('div');
          footerhtml.setAttribute('slot', 'footer');
          if (typeof _p.footerhtml == 'string') {
            footerhtml.innerHTML = _p.footerhtml;
          } else {
            throw Error('请传入相应类型');
          }
          dialog.appendChild(footerhtml);
        }
        keys$7.map(k => {
          if (Reflect.has(_p, k)) {
            // @ts-ignore
            dialog.setAttribute(k, _p[k]);
          }
        });
        dialog.onOk = (_p === null || _p === void 0 ? void 0 : _p.onOk) || (() => {
          dialog['attr-visible'] = false;
        });
        dialog.onClose = (_p === null || _p === void 0 ? void 0 : _p.onClose) || (() => {
          dialog['attr-visible'] = false;
        });
        document.body.appendChild(dialog);
        return {
          show(v) {
            dialog['attr-visible'] = v;
          },
          setBodyHtml(html) {
            if (typeof html == 'string') {
              content.innerHTML = html;
            }
          },
          setFooterHtml(html) {
            if (typeof html == 'string') {
              footerhtml.innerHTML = html;
            }
          },
          __$: dialog
        };
      }
    }
    new Modal();

    // default // [默认值] // [是否完成]
    const loadingProps = {
      'icon': undefined,
      'classname': undefined,
      'background': undefined,
      'fullscreen': undefined,
      'text': '加载中...',
      'target': undefined,
      'status': 'true' // ok
    };
    // close 事件

    // import './style'
    const keys$6 = Object.keys(loadingProps);
    class Loading {
      constructor() {
        this.initChildrens = (root, callback) => __awaiter(this, void 0, void 0, function* () {
          let iconEl = createEl('i'),
            contentEl = createEl('span'),
            basename = root.tagName.toLocaleLowerCase();
          iconEl.basename = basename + '-icon';
          contentEl.basename = basename + '-content';
          iconEl.classList.add(iconEl.basename, 'sp-icon', 'sp-icon-loading');
          contentEl.classList.add(contentEl.basename);
          root.iconEl = iconEl;
          root.contentEl = contentEl;
          this._setClassName(root);
          yield callback(iconEl, contentEl);
          root.append(iconEl, contentEl);
        });
        const context = this;
        defineEl({
          tag: 'sp-loading',
          observedAttributes: keys$6,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, loadingProps), this.attrs);
            context.initView(this);
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            context.set({
              attrs: {
                [key]: newval
              },
              target: this,
              iconEl: this.iconEl,
              contentEl: this.contentEl
            });
          }
        });
      }
      _setClassName(root) {
        var _a;
        // 第一次执行的时候使用的应该是 默认的 如果不传值的情况下 --- root.attrs.classname
        // 反之 之后每次修改用到的都是 root['attr-classname'] 这样子的
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname'])];
        root.className = classList.join(' ');
      }
      initView(root) {
        const init = (iconEl, contentEl) => {
          var _a;
          let parent = (_a = root === null || root === void 0 ? void 0 : root.parentElement) === null || _a === void 0 ? void 0 : _a.style;
          if (root.parentElement && parent.position == '' || parent.position == 'static') {
            root.parentElement.style.position = 'relative';
          }
          this.set({
            attrs: root.attrs,
            target: root,
            iconEl,
            contentEl
          });
        };
        this.initChildrens(root, init);
      }
      set({
        attrs,
        target,
        iconEl,
        contentEl
      }) {
        runIFELSE(new Set([[(attrs === null || attrs === void 0 ? void 0 : attrs['icon']) && iconEl, () => {
          iconEl.className = iconEl.basename + ' sp-icon ' + (attrs === null || attrs === void 0 ? void 0 : attrs['icon']);
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['classname'], () => this._setClassName(target)], [attrs === null || attrs === void 0 ? void 0 : attrs['background'], () => {
          setStyle(target, {
            backgroundColor: attrs === null || attrs === void 0 ? void 0 : attrs['background']
          });
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['fullscreen'], () => {
          if (target === null || target === void 0 ? void 0 : target['target']) return;
          let nesetparent = target.parentElement;
          let istrue = (attrs === null || attrs === void 0 ? void 0 : attrs['fullscreen']) == 'true' && 'true';
          let isfalse = (attrs === null || attrs === void 0 ? void 0 : attrs['fullscreen']) == 'false' && 'false';
          if (istrue || target.isfullscreen && isfalse) {
            target === null || target === void 0 ? void 0 : target.remove();
            iconEl === null || iconEl === void 0 ? void 0 : iconEl.remove();
            contentEl === null || contentEl === void 0 ? void 0 : contentEl.remove();
          }
          if (target.isfullscreen && isfalse) {
            target.isfullscreen = false;
            target.parentEl.append(target);
            return;
          }
          if (istrue) {
            target['attr-fullscreen'] = '';
            target.isfullscreen = true;
            target.parentEl = nesetparent;
            document.body.appendChild(target);
          }
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['text']) && contentEl, () => {
          contentEl.textContent = attrs === null || attrs === void 0 ? void 0 : attrs['text'];
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['target'], () => {
          let el = $el(attrs === null || attrs === void 0 ? void 0 : attrs['target']);
          target['attr-target'] = '';
          target._target = attrs === null || attrs === void 0 ? void 0 : attrs['target'];
          el = el.length && el.length > 0 ? el[0] : el;
          if (!el) throw Error('target nothingness');
          target.remove();
          iconEl.remove();
          contentEl.remove();
          el.appendChild(target);
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['status'], () => {
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['status']) == 'true') {
            target.classList.remove('sp-loading-fade-leave');
            setStyle(target, {
              display: 'flex',
              opacity: '0'
            });
            sto(() => target.classList.add('sp-loading-fade-enter'));
            return;
          }
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['status']) == 'false') {
            target.classList.remove('sp-loading-fade-enter');
            target.classList.add('sp-loading-fade-leave');
            sto(() => setStyle(target, {
              display: 'none'
            }), 190);
          }
        }]]));
      }
      static config(params) {
        const target = createEl('sp-loading');
        for (let k in params) {
          target['attr-' + k] = params[k];
        }
        return {
          close() {
            target['attr-status'] = 'false';
          }
        };
      }
    }
    new Loading();

    // default
    const notifyProps = {
      visible: false,
      type: undefined,
      message: undefined,
      duration: 4500,
      showclose: 'true',
      offset: 20,
      beforeClose: () => {},
      style: undefined,
      title: '',
      classname: undefined,
      position: 'top-right' //  | 'top-left' | 'bottom-right' | 'bottom-left'
    };
    // onChange 事件

    // import './style'
    const keys$5 = Object.keys(notifyProps);
    class NotifyBase {
      constructor() {
        this.initChildrens = (root, callback) => __awaiter(this, void 0, void 0, function* () {
          var _a, _b;
          let iconEl = createEl('i'),
            contentEl = createEl('div'),
            titleEl = createEl('span'),
            pEl = createEl('p'),
            closeEl = createEl('i'),
            basename = root.tagName.toLocaleLowerCase();
          this._setClassName(root);
          root.id = 'sp-notify__' + getIndex();
          iconEl.basename = basename + '-icon';
          contentEl.basename = basename + '-content';
          closeEl.basename = basename + '-close';
          iconEl.classList.add(iconEl.basename, 'sp-icon', 'sp-icon-' + (root === null || root === void 0 ? void 0 : root['attr-type']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['type']));
          contentEl.classList.add(contentEl.basename);
          closeEl.classList.add(closeEl.basename, 'sp-icon', 'sp-icon-close');
          titleEl.innerText = root.attrs.title;
          pEl.innerText = ((_b = root.attrs) === null || _b === void 0 ? void 0 : _b.message) || '';
          root.iconEl = iconEl;
          root.titleEl = titleEl;
          root.pEl = pEl;
          root.attrs.showclose !== 'true' && (closeEl = '');
          yield callback({
            iconEl,
            contentEl,
            closeEl
          });
          contentEl.append(titleEl, pEl);
          root.append(iconEl, contentEl, closeEl);
        });
        this.setup = function () {
          let allEls = $el('sp-notify');
          let propsOffset = parseInt(this.attrs.offset) || 20;
          let top = [...allEls].reduce((total, el) => {
            if (el['attr-position'].indexOf(this['attr-position']) > -1) {
              el['attr-visible'] == 'true' && (total += el.offsetHeight + propsOffset);
            }
            return total;
          }, propsOffset);
          this['attr-visible'] = 'true';
          setStyle(this, {
            [this['attr-position'].indexOf('bottom') > -1 ? 'bottom' : 'top']: top + 'px',
            zIndex: getIndex() + ''
          });
        };
        const context = this;
        defineEl({
          tag: 'sp-notify',
          observedAttributes: keys$5,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, notifyProps), this.attrs);
            this.close = () => {
              this['attr-visible'] = false;
            };
            sto(() => {
              context.initView(this);
            });
            this.setup = context.setup.bind(this);
          },
          attributeChangedCallback(...args) {
            var _a;
            let [key, _, newval] = args;
            let elAlls = Array.from($el('sp-notify'));
            if (key == 'visible') {
              let offsetHeight = this.offsetHeight;
              newval && setIndex();
              if (newval == 'false') {
                this.classList.add('sp-notify-fade-leave-' + this['attr-position']);
                setStyle(this, {
                  opacity: '0',
                  zIndex: '0'
                });
                let _index = elAlls.findIndex(i => i.id == this.id);
                this.beforeClose && this.beforeClose();
                elAlls.forEach((element, i) => {
                  if (i >= _index && element['attr-position'].indexOf(this['attr-position']) > -1) {
                    let dir = this['attr-position'].indexOf('bottom') > -1 ? 'bottom' : 'top';
                    let px = parseInt(element.style[dir], 10) - offsetHeight - 20 + 'px';
                    setStyle(element, {
                      [dir]: px
                    });
                  }
                });
                (_a = this.beforeDistroy) === null || _a === void 0 ? void 0 : _a.call(this);
                sto(() => this.remove(), 290);
              } else {
                this.classList.add('sp-notify-fade-enter-' + this['attr-position'] + '');
                sto(() => this.classList.add('sp-notify-fade-enter-' + this['attr-position'] + '-active'));
              }
            }
          }
        });
      }
      _setClassName(root) {
        var _a, _b, _c;
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [root.className, basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname']), (root === null || root === void 0 ? void 0 : root['attr-position']) || ((_b = root === null || root === void 0 ? void 0 : root.attrs) === null || _b === void 0 ? void 0 : _b['position']), basename + '--' + (root === null || root === void 0 ? void 0 : root['attr-type']) || ((_c = root === null || root === void 0 ? void 0 : root.attrs) === null || _c === void 0 ? void 0 : _c['type'])];
        root.className = classList.join(' ');
      }
      initView(root) {
        let t = 0;
        const init = ({
          closeEl
        }) => {
          if (+root.attrs.duration > 0) {
            t = sto(() => {
              root['attr-visible'] = false;
            }, +root.attrs.duration);
          }
          if (closeEl) {
            closeEl.onclick = () => {
              t > 0 && clearTimeout(t);
              root['attr-visible'] = false;
            };
          }
        };
        this.initChildrens(root, init);
      }
    }
    function Notify(params) {
      let props = Object.assign(Object.assign({}, notifyProps), params);
      delete props.visible;
      let t = createEl('sp-notify');
      runIFELSE(new Set([[has(props, 'beforeClose'), () => {
        t.beforeClose = props.beforeClose;
        delete props.beforeClose;
      }], [has(params, 'style'), () => {
        setStyle(t, params.style);
        delete props.style;
      }], [has(params, 'classname'), () => {
        t.classList.add(params.classname);
        delete params.classname;
      }]]));
      for (let k in props) {
        let v = props[k];
        if (v == undefined) continue;
        t[`attr-${k}`] = v + '';
      }
      document.body.appendChild(t);
      sto(t.setup);
      let p = new Promise(r => {
        t.beforeDistroy = () => r(t);
      });
      return Object.assign(p, t);
    }
    ['info', 'success', 'error', 'warning'].forEach(type => {
      Notify[type] = (options, args) => {
        if (isObject(options)) {
          return Notify(Object.assign(Object.assign({}, options), {
            type
          }));
        }
        return Notify(Object.assign({
          type,
          message: options
        }, args));
      };
    });
    Notify.closeAll = () => {
      let allEls = $el('sp-notify');
      [...allEls].forEach(el => {
        el['attr-visible'] = false;
      });
    };
    new NotifyBase();

    const drawerProps = {
      'append-to-body': 'true',
      'mask-closable': 'true',
      keyboard: 'true',
      visible: undefined,
      classname: '',
      placement: 'right',
      closable: 'true',
      closeicon: undefined,
      mask: 'true',
      fullscreen: 'true',
      width: undefined
    };

    class SlotBase {
      constructor(props) {
        this.$$style = props.$$style || '';
      }
      _setClassName(root) {
        var _a, _b, _c;
        let basename = root.tagName.toLocaleLowerCase();
        root.$$placement = (root === null || root === void 0 ? void 0 : root['attr-placement']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['placement']);
        let classList = [basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_b = root === null || root === void 0 ? void 0 : root.attrs) === null || _b === void 0 ? void 0 : _b['classname']), '_-_' + root.$$placement,
        // (root?.['append-to-body'] || root?.attrs?.['append-to-body']) == 'true' ? 'is-fixed' : ''
        ((root === null || root === void 0 ? void 0 : root.fullscreen) || ((_c = root === null || root === void 0 ? void 0 : root.attrs) === null || _c === void 0 ? void 0 : _c.fullscreen)) == 'true' ? 'is-fixed' : ''];
        root.className = classList.join(' ');
      }
      _template(root) {
        return `
        <style>${this.$$style}${root.attrs.setslotstyle}</style>
        <slot name="header"></slot> 
        <slot name="content"></slot>
        `;
      }
      _showContentType(root, slots) {
        let nodes = Array.from(root.children);
        let slotObj = nodes.reduce((obj, i) => {
          let slot = i.getAttribute('slot');
          if (slots.includes(slot)) obj[slot] = slot;
          return obj;
        }, Object.create(null));
        return slotObj[slots[0]] || false;
      }
    }

    // import './style';
    const keys$4 = Object.keys(drawerProps);
    const $$style = ``;
    class Drawer extends SlotBase {
      constructor() {
        super({
          $$style
        });
        const context = this;
        defineEl({
          tag: 'sp-drawer',
          shadow: 'open',
          observedAttributes: keys$4,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, drawerProps), this.attrs);
            // if (this.attrs['append-to-body'] == 'true') {
            //     this.isbody = true
            //     // this.remove();
            //     this['attr-append-to-body'] = 'false' // 重新走下面
            //     context._setClassName(this)
            //     // document.body.append(this)
            //     // return;
            // }
            if (this.attrs.fullscreen == 'true') {
              this.isbody = true;
              context._setClassName(this);
            }
            sto(() => {
              context.initView(this);
            }); // 初始化视图
          },

          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            context.set({
              attrs: {
                [key]: newval
              },
              target: this,
              mask: this === null || this === void 0 ? void 0 : this.maskEl,
              header: this === null || this === void 0 ? void 0 : this.headerEl
            });
          }
        });
      }
      // protected beforeAppend(...args: any) {
      //     let { title, attrs, close } = args;
      //     runIFELSE(new Set([
      //         [!attrs?.['title'], () => {
      //             title = ''
      //         }],
      //         [!attrs?.['closable'], () => {
      //             close = ''
      //         }]
      //     ]))
      // }
      initView(root) {
        var _a, _b, _c;
        let header = createEl('header'),
          title = createEl('span'),
          close = createEl('i'),
          mask = createEl('div'),
          template = createEl('template'),
          slotObj = this._showContentType(root, ['header']);
        mask.className = 'sp-drawer-mask __' + getIndex();
        template.innerHTML = this._template(root);
        this._setClassName(root);
        header.setAttribute('slot', 'header');
        header.append(title, close);
        listener(close, 'click', () => root === null || root === void 0 ? void 0 : root.onClose());
        ((_a = root.attrs) === null || _a === void 0 ? void 0 : _a['keyboard']) == 'true' && listener(document.body, 'keydown', e => {
          if (e.which === 27 && root['attr-visible'] == 'true') {
            root === null || root === void 0 ? void 0 : root.onClose();
          }
        });
        ((_b = root.attrs) === null || _b === void 0 ? void 0 : _b['mask']) == 'false' && (mask = '');
        ((_c = root.attrs) === null || _c === void 0 ? void 0 : _c['mask-closable']) == 'true' && mask && listener(mask, 'click', () => root === null || root === void 0 ? void 0 : root.onClose());
        root.headerEl = header;
        !slotObj.header && root.insertBefore(header, root.firstChild);
        root.shadowRoot.appendChild(template.content.cloneNode(true));
        this.set({
          title,
          attrs: root.attrs,
          close,
          target: root,
          mask,
          header
        });
        root.maskEl = mask;
      }
      set(args) {
        let {
          title,
          attrs,
          close,
          target,
          mask
        } = args;
        runIFELSE(new Set([[(attrs === null || attrs === void 0 ? void 0 : attrs['title']) && title, () => {
          title.innerText = attrs['title'];
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['closable']) && close, () => {
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['closable']) == 'true') {
            close.className = 'sp-icon ' + ((attrs === null || attrs === void 0 ? void 0 : attrs['closeicon']) ? attrs === null || attrs === void 0 ? void 0 : attrs['closeicon'] : 'sp-icon-close');
          } else {
            setStyle(close, {
              display: 'none'
            });
          }
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['classname'], () => this._setClassName(target)], [attrs === null || attrs === void 0 ? void 0 : attrs['placement'], () => this._setClassName(target)], [attrs === null || attrs === void 0 ? void 0 : attrs['visible'], () => {
          let width = target['attr-width'];
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['visible']) == 'true') {
            target.classList.add('_-_' + (target === null || target === void 0 ? void 0 : target.$$placement));
            mask === null || mask === void 0 ? void 0 : mask.classList.add('block');
            sto(() => {
              width && setStyle(target, {
                width
              });
              target.classList.add('_-_' + (target === null || target === void 0 ? void 0 : target.$$placement) + '-open');
              mask === null || mask === void 0 ? void 0 : mask.classList.add('open');
            });
            {
              setIndex();
              setStyle(mask, {
                zIndex: getIndex() + ''
              });
              setStyle(target, {
                zIndex: getIndex() + 1 + ''
              });
            }
            return;
          }
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['visible']) == 'false') {
            target === null || target === void 0 ? void 0 : target.classList.remove('_-_' + (target === null || target === void 0 ? void 0 : target.$$placement) + '-open');
            mask === null || mask === void 0 ? void 0 : mask.classList.remove('open');
            sto(() => {
              mask === null || mask === void 0 ? void 0 : mask.classList.remove('block');
            }, 290);
          }
        }], [attrs === null || attrs === void 0 ? void 0 : attrs.fullscreen, () => {
          if (!mask) return;
          if (target.isbody) {
            document.body.append(mask);
            return;
          }
          let nesetparent = target.parentElement;
          nesetparent.append(mask);
          setStyle(nesetparent, {
            position: 'relative'
          });
        }]]));
      }
    }
    new Drawer();

    // default
    const switchProps = {
      'disabled': 'false',
      'width': '',
      'classname': '',
      'default-checked': 'false',
      'loading': 'false',
      'size': '',
      'active-text': '',
      'inactive-text': '',
      'active-color': '',
      'inactive-color': '',
      'active-icon': '',
      'inactive-icon': '',
      'value': undefined
    };
    // onChange 事件

    class Base {
      _setClassName(root, classesarr = []) {
        var _a;
        if (!this.isinit) {
          this.baseName = root.className;
        }
        this.isinit = true;
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [this.baseName, basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname']), ...(typeof classesarr == 'string' ? [classesarr] : classesarr)];
        root.className = classList.join(' ');
      }
      getRootClassName(root, classesarr = []) {
        var _a;
        if (!this.isinit) {
          this.baseName = root.className;
        }
        this.isinit = true;
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [this.baseName, basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname']), ...(typeof classesarr == 'string' ? [classesarr] : classesarr)];
        return classList.join(' ');
      }
      static setClassName(root, classesarr = []) {
        var _a;
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname']), ...(typeof classesarr == 'string' ? [classesarr] : classesarr)];
        root.className = classList.join(' ');
      }
    }

    const keys$3 = Object.keys(switchProps);
    const iconbaseclass = 'sp-switch-icon sp-icon ';
    class Switch extends Base {
      constructor() {
        super();
        let self = this;
        defineEl({
          tag: 'sp-switch',
          observedAttributes: keys$3,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, switchProps), this.attrs);
            this.isActive = false;
            this.onclick = _ => {
              var _a, _b;
              (_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, this.isActive, this);
              if (this['attr-disabled'] == 'true') return;
              self.click(this);
              (_b = this.onChange) === null || _b === void 0 ? void 0 : _b.call(this, this.isActive, this);
            };
            Object.defineProperty(this, 'isActive', {
              enumerable: false,
              set(v) {
                var _a, _b;
                setStyle(this, {
                  backgroundColor: !v ? ((_a = this.attrs) === null || _a === void 0 ? void 0 : _a['inactive-color']) || '#dcdfed' : ((_b = this.attrs) === null || _b === void 0 ? void 0 : _b['active-color']) || '#409eff'
                });
                // 变更text 文案
                this.textEl && (this.textEl.textContent = !v ? (this === null || this === void 0 ? void 0 : this['attr-inactive-text']) || '' : (this === null || this === void 0 ? void 0 : this['attr-active-text']) || '');
                // loading 权重最高 其他icon
                if (this.iconEl && (this === null || this === void 0 ? void 0 : this['attr-loading']) !== 'true') {
                  this.iconEl.set(!this.isActive ? this === null || this === void 0 ? void 0 : this['attr-active-icon'] : this === null || this === void 0 ? void 0 : this['attr-inactive-icon']);
                }
                self.transform({
                  is: v,
                  target: this,
                  width: this.offsetWidth,
                  icon: this.iconEl,
                  text: this.textEl
                });
                this['_isActive'] = v;
              },
              get() {
                return this['_isActive'] || false;
              }
            });
            self.initView(this);
          },
          attributeChangedCallback(...args) {
            let [key, old, newval] = args;
            key == 'size' && this.classList.remove(old);
            self.set({
              attrs: {
                [key]: newval
              },
              target: this,
              icon: this.iconEl,
              text: this.textEl
            });
          }
        });
      }
      transform({
        is,
        target,
        width,
        icon,
        text
      }) {
        let small = target.className.indexOf('small') > -1;
        let left = (!is ? 1 : parseInt(width) - (small ? 12 : 16) - 3) + 'px';
        icon && setStyle(icon, {
          left
        });
        let w = (text === null || text === void 0 ? void 0 : text.offsetWidth) > 0 ? parseInt(width) - text.offsetWidth - 4 : small ? 12 : 16; // display 情況下 ofsetwidth 失效
        text && icon && setStyle(text, {
          transform: `translateX(${is ? 3 + 'px' : w + 'px'})`
        });
      }
      click(root) {
        if (root === null || root === void 0 ? void 0 : root['attr-value']) return; // 使用value 时取消click
        root.isActive = !root.isActive;
      }
      initView(root) {
        var _a;
        let text = createEl('span'),
          icon = createEl('em');
        this._setClassName(root);
        icon.classList.add('sp-switch-icon');
        text.classList.add('sp-switch-text');
        if (((_a = root.attrs) === null || _a === void 0 ? void 0 : _a['default-checked']) == 'true') {
          root.isActive = true;
        }
        root.appendChild(text);
        root.appendChild(icon);
        icon.set = v => {
          icon.className = iconbaseclass + v;
        };
        this.set({
          attrs: root.attrs,
          target: root,
          text,
          icon
        });
        root.textEl = text;
        root.iconEl = icon;
        !root['attr-width'] && (root['attr-width'] = root.offsetWidth + 22 > 40 ? root.offsetWidth + 22 : root['attr-size'] == 'small' ? 28 : 40);
        sto(() => root.textEl.classList.add('enter')); // 加载完后 添加transition
      }

      // 变更 属性更新
      set({
        attrs,
        target,
        icon,
        text
      }) {
        runIFELSE(new Set([[attrs === null || attrs === void 0 ? void 0 : attrs['classname'], () => {
          this._setClassName(target, [(target === null || target === void 0 ? void 0 : target['attr-size']) || '', (target === null || target === void 0 ? void 0 : target['attr-disabled']) == 'true' ? 'is-disabled' : '']);
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['loading']) && icon, () => {
          let isloading = attrs === null || attrs === void 0 ? void 0 : attrs['loading'];
          if (isloading == 'false') {
            icon.classList.remove('sp-icon-loading');
          } else if (isloading == 'true') {
            icon.set('sp-icon-loading');
          }
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['active-icon']) && icon, () => {
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['active-icon'].indexOf('sp-icon')) > -1) {
            target.isActive && icon.set(attrs === null || attrs === void 0 ? void 0 : attrs['active-icon']);
          }
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['inactive-icon']) && icon, () => {
          if ((attrs === null || attrs === void 0 ? void 0 : attrs['inactive-icon'].indexOf('sp-icon')) > -1) {
            !target.isActive && icon.set(attrs === null || attrs === void 0 ? void 0 : attrs['inactive-icon']);
          }
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['size'], () => {
          target.classList.add(attrs === null || attrs === void 0 ? void 0 : attrs['size']);
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['active-text'], () => {
          target.isActive && text && (text.textContent = attrs === null || attrs === void 0 ? void 0 : attrs['active-text']);
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['inactive-text'], () => {
          !target.isActive && text && (text.textContent = attrs === null || attrs === void 0 ? void 0 : attrs['inactive-text']);
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['active-color'], () => {
          target.isActive && setStyle(target, {
            backgroundColor: attrs === null || attrs === void 0 ? void 0 : attrs['active-color']
          });
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['inactive-color'], () => {
          !target.isActive && setStyle(target, {
            backgroundColor: attrs === null || attrs === void 0 ? void 0 : attrs['inactive-color']
          });
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['disabled'], () => {
          let disabled = attrs === null || attrs === void 0 ? void 0 : attrs['disabled'];
          let type = disabled == 'true' ? 'add' : disabled == 'false' ? 'remove' : 0;
          type && target.classList[type]('is-disabled');
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['width'], () => {
          let is = target.isActive;
          let width = (parseInt(attrs === null || attrs === void 0 ? void 0 : attrs['width']) || 24) + 'px';
          setStyle(target, {
            width
          });
          this.transform({
            is,
            target,
            width,
            icon,
            text
          });
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['value'], () => {
          let ifs = ['true', '1', true, 1];
          let elses = ['false', '0', false, 0];
          ifs.includes(attrs === null || attrs === void 0 ? void 0 : attrs['value']) && (target.isActive = true);
          elses.includes(attrs === null || attrs === void 0 ? void 0 : attrs['value']) && (target.isActive = false);
        }]]));
      }
    }
    new Switch();

    // default // [默认值] // [是否完成]
    const alertProps = {
      'icon': undefined,
      'classname': undefined,
      'type': 'success',
      'closable': undefined,
      'center': undefined,
      'title': undefined,
      'close-text': undefined,
      'effect': 'light' // ok
    };
    // close 事件

    // import './style'
    const keys$2 = Object.keys(alertProps);
    const spAlertTitleCss = `.sp-alert-content {
    width: 100%;
  }
  .sp-alert-icon {
    margin-right: 10px;
  }
  .sp-alert-close {
    margin-left: 10px;
    cursor: pointer;
  }
  .sp-alert-close:hover {
    filter: brightness(0.8);
  }
  `;
    class Alert {
      constructor() {
        const context = this;
        defineEl({
          tag: 'sp-alert',
          observedAttributes: keys$2,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, alertProps), this.attrs);
            setTimeout(() => context.initView(this));
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            context.set({
              attrs: {
                [key]: newval
              },
              target: this,
              iconEl: this.iconEl,
              contentEl: this.contentEl,
              closeEl: this.closeEl
            });
          }
        });
      }
      _setClassName(root) {
        var _a, _b, _c;
        // 第一次执行的时候使用的应该是 默认的 如果不传值的情况下 --- root.attrs.classname
        // 反之 之后每次修改用到的都是 root['attr-classname'] 这样子的
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname']), basename + '--' + ((root === null || root === void 0 ? void 0 : root['attr-type']) || ((_b = root === null || root === void 0 ? void 0 : root.attrs) === null || _b === void 0 ? void 0 : _b['type'])), (root === null || root === void 0 ? void 0 : root['attr-effect']) || ((_c = root === null || root === void 0 ? void 0 : root.attrs) === null || _c === void 0 ? void 0 : _c['effect'])];
        root.className = classList.join(' ');
      }
      _initTempalte(root) {
        root.attachShadow({
          mode: 'open'
        });
        const template = createEl('template');
        template.innerHTML = `
            <style>${spAlertTitleCss}${root === null || root === void 0 ? void 0 : root['attr-setslotstyle']}</style>
            <slot name="l"></slot>
            <div class="sp-alert-content">
                <slot name="title"></slot>
            </div>
            <slot name="r"></slot>
        `;
        root.shadowRoot.appendChild(template.content.cloneNode(true));
      }
      showContentType(root) {
        // console.log(root.children,'root.children')
        let nodes = Array.from(root.children);
        let slots = ['title'];
        let slotObj = nodes.reduce((obj, i) => {
          let slot = i.getAttribute('slot');
          if (slots.includes(slot)) obj[slot] = slot;
          return obj;
        }, Object.create(null));
        return slotObj[slots[0]] || false;
      }
      initView(root) {
        let iconEl = createEl('i'),
          contentEl = createEl('span'),
          closeEl = createEl('span');
        iconEl.basename = 'sp-alert-icon';
        contentEl.basename = 'sp-alert-content';
        closeEl.basename = 'sp-alert-close';
        iconEl.classList.add(iconEl.basename);
        contentEl.classList.add(contentEl.basename);
        closeEl.classList.add(closeEl.basename);
        this._setClassName(root);
        root.iconEl = iconEl;
        root.contentEl = contentEl;
        root.closeEl = closeEl;
        listener(closeEl, 'click', () => __awaiter(this, void 0, void 0, function* () {
          var _a;
          let flag = yield (_a = root.close) === null || _a === void 0 ? void 0 : _a.call(root);
          !flag && root.remove();
        }));
        this.set({
          attrs: root.attrs,
          target: root,
          iconEl,
          contentEl,
          closeEl
        });
        if (this.showContentType(root)) {
          this._initTempalte(root);
          contentEl = '';
          iconEl.setAttribute('slot', 'l');
          closeEl.setAttribute('slot', 'r');
        }
        root.append(iconEl, contentEl, closeEl);
      }
      set({
        attrs,
        target,
        contentEl,
        iconEl,
        closeEl
      }) {
        runIFELSE(new Set([[(attrs === null || attrs === void 0 ? void 0 : attrs.icon) && iconEl, () => {
          iconEl.className = iconEl.basename + ' sp-icon ' + (attrs === null || attrs === void 0 ? void 0 : attrs.icon);
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs.closable) && closeEl, () => {
          let display = attrs.closable == 'true' ? 'block' : attrs.closable == 'false' ? 'none' : '';
          display == 'block' && (closeEl.innerHTML = '');
          display == 'block' && (closeEl.className = closeEl.basename + ' sp-icon sp-icon-close');
          setStyle(closeEl, {
            display
          });
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['close-text']) && closeEl, () => {
          closeEl.className = closeEl.basename;
          closeEl.innerText = attrs === null || attrs === void 0 ? void 0 : attrs['close-text'];
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['classname']) || attrs['type'] || (attrs === null || attrs === void 0 ? void 0 : attrs['effect']), () => this._setClassName(target)], [(attrs === null || attrs === void 0 ? void 0 : attrs['center']) && contentEl, () => {
          let textAlign = attrs.center == 'true' ? 'center' : attrs.center == 'false' ? 'left' : '';
          setStyle(contentEl, {
            textAlign
          });
        }], [(attrs === null || attrs === void 0 ? void 0 : attrs['title']) && contentEl, () => {
          contentEl.innerText = attrs.title;
        }]]));
      }
    }
    new Alert();

    const tuple = (...args) => args;

    const ButtonTypes = tuple('default', 'primary', 'dashed', 'text', 'link', 'danger');
    const ButtonSizes = tuple('middle', 'small', 'mini');
    const ButtonShapes = tuple('circle', 'default', 'round');
    const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
    const buttonProps = () => ({
      type: ButtonTypes,
      size: ButtonSizes,
      shape: ButtonShapes,
      htmltype: ButtonHTMLTypes,
      disabled: Boolean,
      loading: Boolean || {
        delay: Number
      },
      icon: String
    });

    const typePropsObj = buttonProps();
    const changeProps = (elconstr, props) => {
      let includes = ['shape', 'size', 'type']; // , 'disabled'
      for (let key in props) {
        runIFELSE(new Set([[includes.includes(key), () => {
          let base = elconstr.baseClassName;
          let classes = {
            type: (elconstr['attr-type'] || 'default') !== 'default' ? ' sp-button--' + elconstr['attr-type'] : '',
            size: (elconstr['attr-size'] || 'middle') !== 'middle' ? ' sp-button-size--' + elconstr['attr-size'] : '',
            shape: (elconstr['attr-shape'] || 'default') !== 'default' ? ' sp-button-shape--' + elconstr['attr-shape'] : ''
          };
          for (let k in classes) {
            base += classes[k];
          }
          elconstr.className = base;
        }], [key == 'loading', () => {
          if (!props[key] || props[key] == 'false') {
            if (elconstr.loadinEl) {
              elconstr.loadinEl.classList.remove('sp-icon', 'sp-icon-loading');
              elconstr.classList.remove('is-loading');
              elconstr.loadinEl.remove();
              elconstr.loadinEl = null;
            }
          } else {
            if (elconstr.loadinEl === null) {
              elconstr.loadinEl = createEl('span');
              elconstr.classList.add('is-loading');
              elconstr.loadinEl.classList.add('sp-icon', 'sp-icon-loading');
              elconstr.insertBefore(elconstr.loadinEl, elconstr.firstChild);
            }
          }
        }], [key == 'disabled', () => {
          var _a;
          let type = props[key] == 'true' ? 'add' : 'remove';
          (_a = elconstr.classList) === null || _a === void 0 ? void 0 : _a[type]('is-disabled');
        }], [key == 'icon', () => {
          if (elconstr.loadinEl) return;
          let classname = 'sp-icon ' + props['icon'];
          if (elconstr.iconEl) {
            elconstr.iconEl.className = classname;
            return;
          }
          const el = createEl('i');
          el.className = classname;
          elconstr.iconEl = el;
          !elconstr.firstChild ? sto(set) : set();
          function set() {
            if (!elconstr.firstChild) {
              elconstr.append(el);
              return;
            }
            elconstr.insertBefore(el, elconstr.firstChild);
          }
        }]]));
      }
    };
    // 需要重构第三次!!
    // 为了避免冲突引发问题， 动态获取 标签属性要通过（attr-name）来获取 
    defineEl({
      tag: 'sp-button',
      observedAttributes: Object.keys(typePropsObj),
      connectedCallback() {
        let base = this.getAttribute('classname') || '';
        // let self = this
        this.loadinEl = null;
        this.baseClassName = 'sp-button ' + base;
        this.className = 'sp-button ' + base;
        this.setAttribute('hidefocus', true);
        this.setAttribute('tabindex', 0);
        // type styletype = { // Partial
        //     [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P]
        // }
        // let _style: styletype = {
        //     transition: '.3s'
        // }
        // let handler: ProxyHandler<any> = {
        //     set(target: any, key: string, value: string) {
        //         let d = Reflect.set(target, key, value)
        //         setStyle(self, { [key]: value } as any)
        //         return d
        //     }
        // }
        // let target = new Proxy(_style, handler)
        // sto(() => setStyle(this, target))
        let attributesObj = Object.assign({}, getProps(this));
        // for (let k1 in typePropsObj) {
        //     let k1v = attributesObj[k1]
        //     let k2v = typePropsObj[k1]
        //     runIFELSE(new Set([
        //         [(k2v instanceof Array), () => {
        //             if (!k2v.includes(k1v)) {
        //                 attributesObj[k1] = baseprops[k1]
        //                 self['attr-' + k1] = baseprops[k1]
        //             }
        //         }],
        //         [k1 == 'disabled', () => {
        //             attributesObj[k1] = k1v || 'false'
        //             self['attr-disabled'] = k1v || 'false'
        //         }]
        //     ]))
        // }
        changeProps(this, attributesObj);
        function adapderEmpty(childNodes) {
          let copty = [...childNodes];
          copty.shift();
          if (copty.length == 0) return true;else {
            let is = true;
            for (let i = 0; i < copty.length; i++) {
              if (copty[i].tag) {
                is = false;
                break;
              } else {
                copty[i].nodeValue.trim().length > 0 && (is = false);
                break;
              }
            }
            return is;
          }
        }
        if (this.loadinEl && adapderEmpty(this.childNodes)) {
          this.classList.add('empty-loading');
        }
      },
      attributeChangedCallback(name, _, newval) {
        changeProps(this, {
          [name]: newval
        });
      }
    });

    const timelineProps = {
      mode: 'left',
      pending: 'false'
    };
    const timeItemlineProps = {
      color: undefined,
      position: 'left',
      label: undefined,
      icon: undefined
    };

    class TimeLine extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-timeline',
          observedAttributes: ['pending', 'mode'],
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, timelineProps), this.attrs);
            context.initView(this);
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            context.set({
              attrs: {
                [key]: newval
              },
              root: this
            });
          }
        });
      }
      initView(root) {
        let islabel = false;
        Array.from(root.children).filter(el => {
          el.getAttribute('label') && (islabel = true);
          return el.tagName == 'SP-TIMELINE-ITEM';
        });
        this._setClassName(root, islabel ? ' sp-timeline-label' : '');
        root.islabel = islabel;
        this.set({
          root,
          attrs: root.attrs
        });
      }
      set({
        root,
        attrs
      }) {
        runIFELSE(new Set([[attrs['mode'], () => {
          if (root.islabel) {
            if (attrs['mode'] == 'right') {
              root.classList.add('label-reverse');
              return;
            }
            root.classList.remove('label-reverse');
            return;
          }
          if (attrs['mode'] == 'right') {
            root.classList.add('is-reverse');
            return;
          }
          root.classList.remove('is-reverse');
        }], [attrs['pending'], () => {
          var _a;
          let childrens = Array.from(root.children).filter(el => {
            return el.tagName == 'SP-TIMELINE-ITEM';
          });
          // 这里需要满足两个条件， 默认和动态改变的 还有一个额外条件 新添加的元素 如果改变？
          let lastChildIconEl = childrens === null || childrens === void 0 ? void 0 : childrens[childrens.length - 1];
          if (attrs['pending'] == 'true') {
            root.classList.add('is-pending');
            let isicon = (_a = lastChildIconEl === null || lastChildIconEl === void 0 ? void 0 : lastChildIconEl.getAttribute) === null || _a === void 0 ? void 0 : _a.call(lastChildIconEl, 'icon');
            if (isicon) return;
            if (lastChildIconEl === null || lastChildIconEl === void 0 ? void 0 : lastChildIconEl.iconEl) {
              lastChildIconEl.iconEl.className = 'sp-icon sp-icon-loading';
              return;
            }
            lastChildIconEl.prentCallback = iconEl => {
              iconEl.className = 'sp-icon sp-icon-loading';
            };
            return;
          }
          attrs['pending'] == 'false' && lastChildIconEl.iconEl && (lastChildIconEl.iconEl.className = 'sp-timeline-item-icon');
          root.classList.remove('is-pending');
        }]]));
      }
    }
    new TimeLine();

    class TimeLineItem {
      constructor() {
        const context = this;
        defineEl({
          tag: 'sp-timeline-item',
          observedAttributes: Object.keys(timeItemlineProps),
          connectedCallback() {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
              this.attrs = getProps(this);
              this.attrs = Object.assign(Object.assign({}, timeItemlineProps), this.attrs);
              yield context.initView(this);
              (_a = this.onload) === null || _a === void 0 ? void 0 : _a.call(this, this);
            });
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            context.set({
              attrs: {
                [key]: newval
              },
              root: this
            });
          }
        });
      }
      initView(root) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          // if (root.parentElement.tagName == 'SP-TIMELINE') {
          //     root.parentElement?.changeChildren?.(root)
          // }
          let icon = createEl('i'),
            line = createEl('span');
          icon.className = 'sp-timeline-item-icon';
          line.className = 'sp-timeline-item-line';
          this._setClassName(root);
          (_a = root === null || root === void 0 ? void 0 : root.prentCallback) === null || _a === void 0 ? void 0 : _a.call(root, icon);
          root.iconEl = icon;
          root.lineEl = line;
          yield root.append(icon, line);
          this.set({
            root,
            attrs: root.attrs
          });
        });
      }
      _setClassName(root) {
        var _a, _b, _c;
        let basename = root.tagName.toLocaleLowerCase();
        let classList = [root.className, basename, (root === null || root === void 0 ? void 0 : root['attr-classname']) || ((_a = root === null || root === void 0 ? void 0 : root.attrs) === null || _a === void 0 ? void 0 : _a['classname']), (root === null || root === void 0 ? void 0 : root['attr-label']) || ((_b = root === null || root === void 0 ? void 0 : root.attrs) === null || _b === void 0 ? void 0 : _b['label']) ? 'label' : '', (root === null || root === void 0 ? void 0 : root['attr-position']) || ((_c = root === null || root === void 0 ? void 0 : root.attrs) === null || _c === void 0 ? void 0 : _c['position']) == 'right' ? 'reverse' : ''];
        root.className = classList.join(' ');
      }
      set({
        root,
        attrs
      }) {
        runIFELSE(new Set([[attrs['color'] && (root === null || root === void 0 ? void 0 : root.iconEl), () => {
          setStyle(root.iconEl, {
            borderColor: attrs['color']
          });
        }], [root === null || root === void 0 ? void 0 : root.iconEl, () => {
          if (attrs['icon'] || root['attr-icon']) {
            root.iconEl.className = 'sp-icon ' + (attrs['icon'] || root['attr-icon']);
            return;
          }
          root.iconEl.className = 'sp-timeline-item-icon';
        }], [attrs['label'], () => sto(() => {
          var _a;
          if (root === null || root === void 0 ? void 0 : root.labelEl) {
            root.labelEl.innerText = attrs['label'];
            return '';
          }
          let label = createEl('span');
          label.className = 'sp-timeline-item-label';
          this._setClassName(root);
          label.innerText = attrs['label'];
          root.insertBefore(label, root.firstChild);
          (_a = root.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('sp-timeline-label');
          root.labelEl = label;
        })], [attrs['position'], () => {
          if (attrs['position'] == 'right') {
            this._setClassName(root);
            return;
          }
          if (root.labelEl && root['attr-position'] == 'left') {
            setStyle(root, {
              paddingLeft: 'calc(50% + 25px)',
              textAlign: 'left',
              paddingRight: 'inherit'
            });
            setStyle(root.labelEl, {
              textAlign: 'right',
              left: '-25px'
            });
          }
          root.classList.remove('reverse');
        }]]));
      }
    }
    new TimeLineItem();

    class Item {
      constructor() {
        defineEl({
          tag: 'sp-breadcrumb-item',
          connectedCallback() {
            this.className += ' ' + this.tagName.toLocaleLowerCase();
            // !this.innerHTML ?
            sto(() => this.appendChild(this.parentElement.icon.cloneNode(true)));
            // :this.appendChild(this.parentElement.icon.cloneNode(true))
          }
        });
      }
    }

    new Item();

    const breadcrumbProps = {
      separator: '/',
      'separator-class': ''
    };

    class BreadCrumb {
      constructor() {
        const context = this;
        defineEl({
          tag: 'sp-breadcrumb',
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, breadcrumbProps), this.attrs);
            this.className += ' ' + this.tagName.toLocaleLowerCase();
            context.initView(this);
          }
        });
      }
      initView(root) {
        let el = createEl('span');
        if (root.attrs['separator-class']) {
          el.className = 'sp-separator sp-icon ' + root.attrs['separator-class'];
        }
        if (!root.attrs['separator-class']) {
          el.className = 'sp-separator';
          el.innerText = root.attrs['separator'];
        }
        root.icon = el;
      }
    }
    new BreadCrumb();

    const progressProps = {
      percentage: 0,
      type: 'line',
      'text-inside': undefined,
      'stroke-width': 6,
      status: undefined,
      color: undefined,
      'show-info': true,
      width: 100,
      'stroke-linecap': 'round'
    };

    const keys$1 = Object.keys(progressProps);
    // 此代码绝壁是最吐血的 待整理... 未完待续...
    class Progress extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-progress',
          observedAttributes: keys$1,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, progressProps), this.attrs);
            context.initView(this);
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            context.setObserve({
              attrs: {
                [key]: newval
              },
              target: this,
              svg: this._svg,
              line: this._line,
              text: this._text
            });
          }
        });
      }
      initView(root) {
        let {
          svg,
          line,
          text
        } = this.setOnce({
          target: root,
          attrs: root.attrs
        });
        this.setObserve({
          target: root,
          attrs: root.attrs,
          svg,
          line,
          text
        });
      }
      setObserve({
        target,
        attrs,
        svg,
        line,
        text
      }) {
        let type = attrs.type || target['attr-type'] || target._type;
        runIFELSE(new Set([[(attrs === null || attrs === void 0 ? void 0 : attrs['status']) && (text === null || text === void 0 ? void 0 : text.baseName), () => {
          var _a;
          this._setClassName(target, ['sp-progress-' + type, (_a = attrs['status']) !== null && _a !== void 0 ? _a : '']);
          if (attrs['status'] == 'normal') {
            text.className = text.baseName;
            return;
          }
          if ('' + ((target === null || target === void 0 ? void 0 : target['attr-show-info']) || (attrs === null || attrs === void 0 ? void 0 : attrs['show-info'])) == 'false') return;
          if (type == 'line') {
            text.className = text.baseName + ' sp-icon sp-icon-' + attrs['status'];
          } else {
            text.innerText = '';
            let _ = attrs['status'] == 'error' ? 'close' : attrs['status'] == 'success' ? 'seleted' : '';
            text.className = text.baseName + ' sp-icon sp-icon-' + _;
          }
        }], [has(attrs, 'percentage'), () => {
          var _a, _b;
          let $percentage = parseInt(attrs['percentage']);
          let content = (_a = target === null || target === void 0 ? void 0 : target.format) === null || _a === void 0 ? void 0 : _a.call(target, $percentage);
          let percentage = content || $percentage + '%';
          text && text.className.indexOf('sp-icon') == -1 && (text.innerText = percentage);
          if (type == 'line') {
            setStyle(line, {
              width: $percentage + '%'
            });
            return;
          }
          let rate = type === 'dashboard' ? 0.75 : 1;
          let color = attrs['color'] || target['attr-color'] || '#409EFF';
          let style = `stroke-dasharray:${target.perimeter * rate * ($percentage / 100)}px,${target.perimeter}px ;
                stroke-dashoffset:${-1 * target.perimeter * (1 - rate) / 2}px;transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;stroke:`;
          if ($percentage <= 0) {
            this.t = sto(() => {
              var _a;
              (_a = svg === null || svg === void 0 ? void 0 : svg.path2) === null || _a === void 0 ? void 0 : _a.setAttribute('style', style + 'rgb(229, 233, 242) !important; ');
            }, 90);
          } else {
            if (this.t) {
              clearTimeout(this.t);
              this.t = 0;
            }
            (_b = svg === null || svg === void 0 ? void 0 : svg.path2) === null || _b === void 0 ? void 0 : _b.setAttribute('style', style + color + ';');
          }
        }], [has(attrs, 'color'), () => {
          var _a, _b;
          // 设置颜色
          if (type == 'line') {
            setStyle(line, {
              backgroundColor: attrs['color']
            });
            return;
          }
          let style = (_a = svg === null || svg === void 0 ? void 0 : svg.path2) === null || _a === void 0 ? void 0 : _a.getAttribute('style');
          (_b = svg === null || svg === void 0 ? void 0 : svg.path2) === null || _b === void 0 ? void 0 : _b.setAttribute('style', style + `stroke:${attrs['color']};`);
        }], [has(attrs, 'stroke-linecap'), () => {
          var _a;
          if (type == 'line') return;
          (_a = svg === null || svg === void 0 ? void 0 : svg.path2) === null || _a === void 0 ? void 0 : _a.setAttribute('stroke-linecap', attrs['stroke-linecap']);
        }], [attrs === null || attrs === void 0 ? void 0 : attrs['classname'], () => {
          var _a;
          return this._setClassName(target, ['sp-progress-' + type, (_a = attrs['status']) !== null && _a !== void 0 ? _a : '']);
        }]]));
      }
      trackPath(type, strokeWidth, width) {
        const relativeStrokeWidth = (strokeWidth / width * 100).toFixed(1);
        // @ts-ignore
        const radius = parseInt(50 - parseFloat(relativeStrokeWidth) / 2, 10);
        const isDashboard = type === 'dashboard';
        return {
          path: `
            M 50 50
            m 0 ${isDashboard ? '' : '-'}${radius}
            a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
            a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
            `,
          radius
        };
      }
      setOnce({
        target,
        attrs
      }) {
        var _a;
        let type = attrs.type; // 'line' | 'circle' | 'dashboard';
        let text = createEl('span');
        var svg;
        var inner;
        text.className = 'sp-progress-bar__text';
        text.baseName = 'sp-progress-bar__text';
        this._setClassName(target, ['sp-progress-' + type, (_a = attrs['status']) !== null && _a !== void 0 ? _a : '']);
        runIFELSE(new Set([['' + attrs['show-info'] == 'false', () => {
          text = '';
        }], [type == 'line', () => {
          let line = createEl('div'),
            outer = createEl('div'),
            isInside = has(attrs, 'text-inside') && attrs['text-inside'] == 'true';
          inner = createEl('div');
          line.className = 'sp-progress-bar';
          outer.className = 'sp-progress-bar__outer';
          inner.className = 'sp-progress-bar__inner';
          setStyle(outer, {
            height: (parseInt(attrs['stroke-width']) || 6) + 'px'
          });
          if (isInside) {
            inner.append(text);
          }
          outer.append(inner);
          line.append(outer, !isInside && text || '');
          target.append(line);
          // 线条
        }], [type != 'line', () => {
          // 圆形
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
            path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
            strokeWidth = (parseInt(attrs['stroke-width']) || 6) + 'px',
            {
              path: d,
              radius
            } = this.trackPath(type, parseInt(attrs['stroke-width']), attrs.width);
          let rate = type === 'dashboard' ? 0.75 : 1;
          let perimeter = 2 * Math.PI * radius;
          let style = `stroke-dasharray:${perimeter * rate}px,${perimeter}px;stroke-dashoffset:${-1 * perimeter * (1 - rate) / 2}px;transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;`;
          svg.path1 = path1;
          svg.path2 = path2;
          svg.setAttribute('viewBox', `0 0 ${attrs.width} ${attrs.width}`);
          path1.setAttribute('class', 'el-progress-' + type + '__path');
          path1.setAttribute('class', 'el-progress-' + type + '__track');
          path2.setAttribute('class', 'el-progress-' + type + '__path');
          path2.setAttribute('class', 'el-progress-' + type + '__track');
          path1.setAttribute('stroke-width', strokeWidth);
          path2.setAttribute('stroke-width', strokeWidth);
          path1.setAttribute('fill', 'none');
          path2.setAttribute('fill', 'none');
          path1.setAttribute('d', d);
          path2.setAttribute('d', d);
          path1 === null || path1 === void 0 ? void 0 : path1.setAttribute('style', style + `stroke: rgb(229, 233, 242) !important;`);
          svg.append(path1, path2);
          target.append(svg, text);
          setStyle(target, {
            width: attrs.width + 'px',
            height: attrs.width + 'px'
          });
          target.perimeter = perimeter;
        }]]));
        target._type = type;
        target._svg = svg;
        target._line = inner;
        target._text = text;
        return {
          svg,
          line: inner,
          text
        };
      }
    }
    new Progress();

    const affixProps = {
      'offset-bottom': undefined,
      'offset-top': 0
    };

    function getTargetRect(target) {
      return target !== window ? target.getBoundingClientRect() : {
        top: 0,
        bottom: window.innerHeight
      };
    }
    function getFixedTop(targetRect, offsetTop) {
      if (offsetTop !== undefined && targetRect.top) {
        return offsetTop + targetRect.top;
      }
      return undefined;
    }
    function getFixedBottom(targetRect, offsetBottom) {
      if (offsetBottom !== undefined && targetRect.bottom) {
        const targetBottomOffset = window.innerHeight - targetRect.bottom;
        return offsetBottom + targetBottomOffset;
      }
      return undefined;
    }

    var raf = function raf(callback) {
      return +setTimeout(callback, 16);
    };
    var caf = function caf(num) {
      return clearTimeout(num);
    };
    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      raf = function raf(callback) {
        return window.requestAnimationFrame(callback);
      };
      caf = function caf(handle) {
        return window.cancelAnimationFrame(handle);
      };
    }
    var rafUUID = 0;
    var rafIds = new Map();
    function cleanup(id) {
      rafIds.delete(id);
    }
    function wrapperRaf(callback, _delayFrames = 1) {
      var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      rafUUID += 1;
      var id = rafUUID;
      function callRef(leftTimes) {
        if (leftTimes === 0) {
          // Clean up
          cleanup(id); // Trigger
          callback();
        } else {
          // Next raf
          var realId = raf(function () {
            callRef(leftTimes - 1);
          }); // Bind real raf id
          rafIds.set(id, realId);
        }
      }
      callRef(times);
      return id;
    }
    wrapperRaf.cancel = function (id) {
      var realId = rafIds.get(id);
      cleanup(realId);
      return caf(realId);
    };

    // raf 代替 sto
    const keys = Object.keys(affixProps);
    class Affix extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-affix',
          observedAttributes: keys,
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, affixProps), this.attrs);
            wrapperRaf(() => context.initView(this));
          }
        });
      }
      initView(root) {
        var _a, _b, _c, _d, _e;
        root.isFixed = false;
        this._setClassName(root);
        let offsetTop = ((_a = root.attrs) === null || _a === void 0 ? void 0 : _a['offset-top']) ? +((_b = root.attrs) === null || _b === void 0 ? void 0 : _b['offset-top']) : undefined;
        let offsetBottom = ((_c = root.attrs) === null || _c === void 0 ? void 0 : _c['offset-bottom']) ? +((_d = root.attrs) === null || _d === void 0 ? void 0 : _d['offset-bottom']) : undefined;
        let isOriginElFixed = ((_e = root.attrs) === null || _e === void 0 ? void 0 : _e['origin-elfixed']) + '' == 'true' ? true : false;
        let placeholderEl = createEl('div');
        let parent = root.parentElement || root.parentNode || document.body;
        setStyle(placeholderEl, {
          width: root.offsetWidth + 'px',
          height: root.offsetHeight + 'px'
        });
        if (isOriginElFixed) {
          setStyle(root, {
            width: root.offsetWidth + 'px',
            height: root.offsetHeight + 'px'
          });
        }
        function handler(t, distance, type, cal) {
          var _a, _b;
          if (root[type == 'bottom' ? 'top' : 'bottom']) return;
          let toFixedDistance = type == 'top' ? getFixedTop(t, 0) : getFixedBottom(t, 0);
          let fixedDistance = toFixedDistance && parseInt(toFixedDistance);
          if (fixedDistance < distance && !root.isFixed) {
            root.isFixed = true;
            root[type] = true;
            parent.insertBefore(placeholderEl, root);
            setStyle(root, Object.assign({
              position: 'fixed'
            }, cal(distance)));
            (_a = root.onChange) === null || _a === void 0 ? void 0 : _a.call(root, root.isFixed, type);
            return;
          }
          if (root.isFixed) {
            let _placeholder = getTargetRect(placeholderEl);
            let placeholderElToFixedtDistance = type == 'top' ? getFixedTop(_placeholder, 0) : getFixedBottom(_placeholder, 0);
            let placeholderElDistance = placeholderElToFixedtDistance && parseInt(placeholderElToFixedtDistance);
            if (placeholderElDistance > distance) {
              placeholderEl.remove();
              root[type] = false;
              setStyle(root, {
                position: 'static'
              });
              root.isFixed = false;
              (_b = root.onChange) === null || _b === void 0 ? void 0 : _b.call(root, root.isFixed, type);
            }
          }
          return;
        }
        function star(_) {
          let target = getTargetRect(root);
          if (offsetTop != undefined) {
            handler(target, offsetTop, 'top', top => ({
              top: top + 'px',
              bottom: 'inherit'
            }));
          }
          if (offsetBottom != undefined) {
            handler(target, offsetBottom, 'bottom', bottom => ({
              bottom: bottom + 'px',
              top: 'inherit'
            }));
          }
        }
        root.star = star;
        star();
        listener(window, 'scroll', star, true);
        listener(window, 'resize', () => {
          star();
        }, true);
      }
    }
    new Affix();

    const backTopProps = {
      target: undefined,
      'visibility-height': 200,
      right: 40,
      bottom: 40
    };
    // click 回调事件

    class BackTop extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-backtop',
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, backTopProps), this.attrs);
            context.initView(this);
          }
        });
      }
      initView(root) {
        var _a;
        this._setClassName(root);
        root.show = false;
        let {
          target: propTarget,
          bottom,
          right,
          'visibility-height': vHeight
        } = root.attrs;
        let target = $el(propTarget);
        if (target.length <= 0) throw Error('!!! Please pass in a valid element');
        let _target = target[0];
        let s = 0;
        function scrollTop(target) {
          if (_target.scrollTop <= 0) return;
          s += 2;
          _target.scrollTop -= s;
          wrapperRaf(() => scrollTop());
        }
        root.onclick = e => {
          var _a;
          s = 0;
          scrollTop();
          (_a = root === null || root === void 0 ? void 0 : root.click) === null || _a === void 0 ? void 0 : _a.call(root, e);
        };
        function scroller(__tar) {
          let scrollTop = propTarget == 'body' ? document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset : __tar.scrollTop;
          if (scrollTop > vHeight && !root.show) {
            root.show = true;
            setStyle(root, {
              display: 'flex',
              opacity: '0',
              zIndex: '' + (getIndex() + 1),
              bottom: bottom + 'px',
              right: right + 'px'
            });
            sto(() => setStyle(root, {
              opacity: '1'
            }), 190);
            return;
          }
          if (scrollTop < vHeight && root.show) {
            root.show = false;
            setStyle(root, {
              opacity: '0'
            });
            sto(() => setStyle(root, {
              display: 'none'
            }), 190);
          }
        }
        _target.addEventListener('scroll', e => scroller(e.target), true);
        scroller(_target);
        let icon = createEl('em');
        icon.className = 'sp-icon sp-icon-rising';
        ((_a = root === null || root === void 0 ? void 0 : root.childNodes) === null || _a === void 0 ? void 0 : _a.length) == 0 && root.append(icon);
      }
    }
    new BackTop();

    // getPopupContainer 或 get-popup-container 前者为function 后者为string 不同的传参数方式， 属性权重较大
    // onVisibleChange显示隐藏的回调函数
    const tooltipProps = {
      title: '',
      placement: 'top',
      trigger: 'hover',
      visible: undefined,
      'get-popup-container': undefined,
      'mouse-enter-delay': 100,
      'mouse-leave-delay': 100,
      'mouse-move-delay': 90,
      classname: undefined,
      color: undefined,
      popupstyle: undefined,
      'arrow-point-at-center': false,
      effect: 'drak',
      offcenter: undefined
    };

    class ToolTipCommon extends Base {
      constructor(target) {
        super();
        this._target = target;
        if (target.attrs['arrow-point-at-center'] + '' == 'true') {
          this._target.APAC = true; // 是否常驻局中
        }

        this.init(this._target);
      }
      _adapterTrigger(trigger) {
        if (trigger.length) {
          if (trigger[0] == '[') {
            return JSON.parse(trigger);
          }
          if (Array.isArray(trigger)) {
            return trigger;
          }
          return [trigger];
        }
        return ["hover"];
      }
      getType() {
        return this.tagName.indexOf('sp-tooltip') > -1 ? 'tooltip' : this.tagName.indexOf('sp-popover') > -1 ? 'popover' : 'confirm';
      }
      init(target) {
        let interval = 0;
        let t = 0;
        let attrs = target.attrs;
        let trigger = this._adapterTrigger(attrs.trigger);
        this._type = this.getType();
        this.fixedView(this._type, attrs);
        if (trigger.includes('hover')) {
          listener(target, 'mouseenter', _ => {
            if (!this.fixedEl.inset || !this.fixedEl.outset) {
              interval = Date.now();
            }
            t = sto(this._mouseenter.bind(this, _), attrs['mouse-enter-delay']);
          });
          listener(target, 'mouseleave', _ => {
            var _a, _b;
            if ((_a = Date.now() - interval < attrs['mouse-move-delay']) !== null && _a !== void 0 ? _a : 80) {
              // 这个是传入过来的延迟
              clearTimeout(t);
              return;
            }
            sto(this._mouseleave.bind(this, _), (_b = attrs['mouse-leave-delay']) !== null && _b !== void 0 ? _b : 100);
          });
          listener(this.fixedEl, 'mouseenter', _ => sto(this._fixedEl_mouseenter.bind(this, _), 80));
          listener(this.fixedEl, 'mouseleave', _ => sto(this._fixedEl_mouseleave.bind(this, _), 100));
        }
        if (trigger.includes('click')) {
          listener(target, 'click', _ => this._click.call(this, _));
          listener(this.fixedEl, 'click', e => {
            e.stopPropagation();
            e.preventDefault();
          });
        }
        if (trigger.includes('contextmenu')) {
          listener(target, 'contextmenu', _ => this._contextmenu.call(this, _));
          listener(this.fixedEl, 'click', e => {
            e.stopPropagation();
            e.preventDefault();
          });
        }
        if (trigger.includes('focus')) {
          // 第三个参数 2022/1/10修改 （并修改了button的聚焦问题）
          listener(target, 'blur', this._leave.bind(this), true);
          listener(target, 'focus', _ => this._focus.call(this, _), true);
          listener(this.fixedEl, 'click', e => {
            e.stopPropagation();
            e.preventDefault();
          });
        }
        if (trigger.includes('click') || trigger.includes('contextmenu')) {
          listener(document.body, 'click', this._reset.bind(this));
        }
      }
      get tagName() {
        return this.contextTarget.tagName.toLocaleLowerCase();
      }
      get contextTarget() {
        return this._target;
      }
      visible(is) {
        if (this.visibleStatus == is) return;
        if (is == 'true') {
          this.visibleStatus = is;
          this._changePosition(this.fixedEl);
          return;
        }
        this.visibleStatus = is;
        this._leave();
      }
      destory() {
        this._destory();
      }
      fixedView(type, attrs, callback) {
        var _a, _b, _c;
        let core = createEl('div'),
          arrow = createEl('span'),
          content = createEl('div'),
          arrow_child = createEl('span'),
          title = createEl('span');
        core.setAttribute('role', type);
        core.className = this.getRootClassName(this.contextTarget, [(_a = '__' + attrs['placement']) !== null && _a !== void 0 ? _a : '__top', ((_b = this.contextTarget) === null || _b === void 0 ? void 0 : _b.APAC) ? 'APAC' : '']);
        arrow.className = this.tagName + '__arrow';
        title.className = this.tagName + '__title';
        content.className = this.tagName + '__content';
        if ((attrs === null || attrs === void 0 ? void 0 : attrs.title) && (attrs === null || attrs === void 0 ? void 0 : attrs.title.indexOf('<')) > -1 && (attrs === null || attrs === void 0 ? void 0 : attrs.title.indexOf('/>')) > -1) {
          title.innerHTML = attrs.title;
        } else {
          title.textContent = (attrs === null || attrs === void 0 ? void 0 : attrs.title) || '';
        }
        if (attrs.popupstyle) {
          try {
            core.style = attrs.popupstyle;
          } catch (error) {
            throw Error(error);
          }
        }
        if (attrs['effect'] == 'light') {
          setStyle(core, {
            backgroundColor: '#fff',
            color: '#000'
          });
          setStyle(arrow_child, {
            backgroundColor: '#fff'
          });
        }
        if (attrs.color) {
          setStyle(arrow_child, {
            backgroundColor: attrs.color
          });
          setStyle(core, {
            backgroundColor: attrs.color
          });
        }
        if (type == 'tooltip') {
          content = '';
        } else {
          content.innerHTML = (attrs === null || attrs === void 0 ? void 0 : attrs.content) || ((_c = this.contextTarget) === null || _c === void 0 ? void 0 : _c.content) || '';
        }
        callback === null || callback === void 0 ? void 0 : callback({
          core,
          title,
          arrow,
          content
        });
        arrow.append(arrow_child);
        core.append(title, content, arrow);
        this.fixedEl = core;
        this.fixedEl.contentEl = content;
        this.fixedEl.arrowEl = arrow;
        this.fixedEl.titleEl = title;
        this._reset();
        this._appendTarget(attrs).append(this.fixedEl);
        // 临时加的 可能会注视掉 // 漠视为默认的行为
        if (attrs['visible'] + '' == 'true') {
          sto(() => this.visible('true'), 200);
        }
      }
      _contextmenu(e) {
        var _a;
        !((_a = this.contextTarget.attrs) === null || _a === void 0 ? void 0 : _a['ispreventdefault']) && document.body.click();
        e.stopPropagation();
        e.preventDefault();
        this._changePosition(this.fixedEl);
      }
      _click(e) {
        var _a;
        !((_a = this.contextTarget.attrs) === null || _a === void 0 ? void 0 : _a['ispreventdefault']) && document.body.click();
        e.stopPropagation();
        e.preventDefault();
        this._changePosition(this.fixedEl);
      }
      _focus(e) {
        e.stopPropagation();
        e.preventDefault();
        this._changePosition(this.fixedEl);
      }
      _mouseenter(_) {
        this.fixedEl.inset = true;
        if (this.fixedEl.outset) return;
        this._changePosition(this.fixedEl);
      }
      _mouseleave(_) {
        this.fixedEl.inset = false;
        if (!this.fixedEl.outset) this._leave();
      }
      _fixedEl_mouseenter(e) {
        e.stopPropagation();
        e.preventDefault();
        this.fixedEl.outset = true;
      }
      _fixedEl_mouseleave() {
        this.fixedEl.outset = false;
        if (!this.fixedEl.inset) this._leave();
      }
      _reset() {
        setStyle(this.fixedEl, {
          zIndex: '-1',
          opacity: '0',
          left: '-100%',
          top: '-100%'
        });
      }
      _leave() {
        this._animation(this.fixedEl, 'leave').then(this._reset.bind(this));
      }
      _appendTarget(attrs) {
        var _a, _b, _c, _d;
        if (typeof attrs['get-popup-container'] == 'string') {
          let t = $el(attrs['get-popup-container']);
          return (_a = t === null || t === void 0 ? void 0 : t[0]) !== null && _a !== void 0 ? _a : document.body;
        }
        return (_d = (_c = (_b = this.contextTarget) === null || _b === void 0 ? void 0 : _b.getPopupContainer) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : document.body;
      }
      _weight(target) {
        setIndex();
        setStyle(target, {
          zIndex: '' + getIndex(),
          opacity: '1'
        });
      }
      _animation($target, mode = 'enter') {
        var _a, _b;
        (_b = (_a = this.contextTarget) === null || _a === void 0 ? void 0 : _a.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(_a, mode == 'enter' ? true : false);
        return new Promise(res => {
          $target.classList.add('zoom-big-fast-' + mode);
          sto(() => {
            $target.classList.remove('zoom-big-fast-' + mode);
            res();
          }, 200);
        });
      }
      _destory() {
        try {
          this.fixedEl.remove();
        } catch (_) {}
      }
      _changePosition($target, _placement, isshow) {
        var _a, _b;
        if (_placement === void 0) {
          _placement = (_a = this.contextTarget.attrs) === null || _a === void 0 ? void 0 : _a.placement;
        }
        if (isshow === void 0) {
          isshow = true;
        }
        // let rect: DOMRect = getTargetRect(this.contextTarget);
        let lixinH = this.contextTarget.attrs['offcenter'] || 4; // 离心点
        let oLeft = this.contextTarget.offsetLeft;
        let oTop = this.contextTarget.offsetTop;
        let fixH = $target.clientHeight;
        let fixW = $target.clientWidth;
        let ctxH = this.contextTarget.offsetHeight;
        let ctxW = this.contextTarget.offsetWidth;
        let APAC = (_b = this.contextTarget) === null || _b === void 0 ? void 0 : _b.APAC;
        const setArrow = dir => {
          // 有极端条件
          let fan = dir == 'left' ? 'right' : dir == 'right' ? 'left' : dir == 'top' ? 'bottom' : 'top';
          let value = dir == 'left' || dir == 'right' ? APAC ? ctxW / 2 > fixW ? fixW / 2 - 4.5 : ctxW / 2 - 4.5 : (ctxW > fixW ? fixW : ctxW) / 4 - 4.5 :
          // (ctxW / 4 + 8.5 > fixW ? fixW - 10 : ctxW / 4 - 4.5)
          APAC ? ctxH / 2 > fixH ? fixH / 2 - 5.5 : ctxH / 2 - 5.5 : (ctxH > fixH ? fixH : ctxH) / 4 - 4.5; // (ctxH / 4 + 8.5 > fixH ? fixH - 10 : ctxH / 4 - 5.5)
          setStyle(this.fixedEl.arrowEl, {
            [dir]: value + 'px',
            [fan]: 'initial',
            transform: 'initial'
          });
        };
        switch (_placement) {
          case 'bottom':
            setStyle($target, {
              top: oTop + ctxH + 5 + lixinH + 'px',
              left: oLeft + ctxW / 2 - fixW / 2 + 'px'
            });
            break;
          case 'bottom-left':
            setArrow('left');
            setStyle($target, {
              top: oTop + ctxH + 5 + lixinH + 'px',
              left: oLeft + 'px'
            });
            break;
          case 'bottom-right':
            setArrow('right');
            setStyle($target, {
              top: oTop + ctxH + 5 + lixinH + 'px',
              left: oLeft + ctxW - fixW + 'px'
            });
            break;
          case 'top':
            setStyle($target, {
              left: oLeft + ctxW / 2 - fixW / 2 + 'px',
              top: oTop - fixH - 5 - lixinH + 'px'
            });
            break;
          case 'top-left':
            setArrow('left');
            setStyle($target, {
              left: oLeft + 'px',
              top: oTop - fixH - 5 - lixinH + 'px'
            });
            break;
          case 'top-right':
            setArrow('right');
            setStyle($target, {
              left: oLeft + ctxW - fixW + 'px',
              top: oTop - fixH - 5 - lixinH + 'px'
            });
            break;
          case 'right':
            setStyle($target, {
              left: oLeft + ctxW + lixinH + 'px',
              top: oTop + ctxH / 2 - fixH / 2 + 'px'
            });
            break;
          case 'right-bottom':
            setArrow('bottom');
            setStyle($target, {
              left: oLeft + ctxW + lixinH + 'px',
              top: oTop - fixH + ctxH + 'px'
            });
            break;
          case 'right-top':
            setArrow('top');
            setStyle($target, {
              left: oLeft + ctxW + lixinH + 'px',
              top: oTop + 'px'
            });
            break;
          case 'left':
            setStyle($target, {
              left: oLeft - fixW - lixinH + 'px',
              top: oTop + ctxH / 2 - fixH / 2 + 'px'
            });
            break;
          case 'left-bottom':
            setArrow('bottom');
            setStyle($target, {
              left: oLeft - fixW - lixinH + 'px',
              top: oTop - fixH + ctxH + 'px'
            });
            break;
          case 'left-top':
            setArrow('top');
            setStyle($target, {
              left: oLeft - fixW - lixinH + 'px',
              top: oTop + 'px'
            });
            break;
        }
        if (!isshow) return;
        this._weight($target);
        this._animation($target);
      }
    }

    class Tooltip {
      constructor() {
        const context = this;
        defineEl({
          tag: 'sp-tooltip',
          observedAttributes: Object.keys(tooltipProps),
          connectedCallback() {
            const reset = () => {
              this.attrs = getProps(this);
              this.attrs = Object.assign(Object.assign({}, tooltipProps), this.attrs);
              this.super = new ToolTipCommon(this);
              this.setAttribute('hidefocus', true);
              this.setAttribute('tabindex', 0);
              setStyle(this, {
                outline: '0'
              });
            };
            reset();
            this.reset = reset;
          },
          attributeChangedCallback(..._args) {
            let [key, _, newval] = _args;
            context.obsevseAttrs.call(this, {
              [key]: newval
            });
          },
          disconnectedCallback() {
            this.super.destory();
          }
        });
      }
      obsevseAttrs(attrs) {
        let root = this.super;
        root && runIFELSE(new Set([['visible' in attrs, () => {
          root.visible(attrs.visible + '');
        }], ['placement' in attrs, () => {
          var _a;
          root.fixedEl.className = root.getRootClassName(root.contextTarget, [(_a = '__' + attrs['placement']) !== null && _a !== void 0 ? _a : '__top', this.APAC ? 'APAC' : '']);
        }], ['title' in attrs, () => {
          if ((attrs === null || attrs === void 0 ? void 0 : attrs.title) && (attrs === null || attrs === void 0 ? void 0 : attrs.title.indexOf('<')) > -1 && (attrs === null || attrs === void 0 ? void 0 : attrs.title.indexOf('/>')) > -1) {
            root.fixedEl.titleEl.innerHTML = attrs.title;
          } else {
            root.fixedEl.titleEl.textContent = (attrs === null || attrs === void 0 ? void 0 : attrs.title) || '';
          }
        }]]));
      }
    }
    new Tooltip();

    let popverProps = Object.freeze(Object.assign(Object.assign({}, tooltipProps), {
      content: '',
      effect: 'light'
    }));
    class Popover {
      constructor() {
        const context = this;
        defineEl({
          tag: 'sp-popover',
          observedAttributes: Object.keys(popverProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, popverProps), this.attrs);
            this.super = new ToolTipCommon(this);
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            setStyle(this, {
              outline: '0'
            });
          },
          attributeChangedCallback(..._args) {
            let [key, _, newval] = _args;
            context.obsevseAttrs.call(this, {
              [key]: newval
            });
          },
          disconnectedCallback() {
            this.super.destory();
          }
        });
      }
      obsevseAttrs(attrs) {
        let root = this.super;
        root && runIFELSE(new Set([['visible' in attrs, () => {
          root.visible(attrs.visible + '');
        }], ['placement' in attrs, () => {
          var _a;
          root.fixedEl.className = root.getRootClassName(root.contextTarget, [(_a = '__' + attrs['placement']) !== null && _a !== void 0 ? _a : '__top', this.APAC ? 'APAC' : '']);
        }], ['content' in attrs, () => {
          root.fixedEl.contentEl.innerHTML = attrs['content'];
        }]]));
      }
    }
    new Popover();

    const popconfirmProps = Object.freeze(Object.assign(Object.assign({}, tooltipProps), {
      icon: 'sp-icon-warning',
      'ok-type': 'primary',
      'ok-text': '确定',
      'cancel-text': '取消',
      effect: 'light',
      trigger: 'click',
      'hide-icon': false
    }));

    class PopConfirmEds extends ToolTipCommon {
      constructor(target) {
        super(target);
        this.initVisible = target.attrs.visible == undefined ? false : true;
      }
      confirmView() {
        let container = createEl('div');
        return container;
      }
      fixedView() {
        var _a, _b;
        let attrs = this.contextTarget.attrs;
        // 内部button的参数配置；
        let cancelButtonProps = (_a = this.contextTarget) === null || _a === void 0 ? void 0 : _a.cancelButtonProps;
        let okButtonProps = (_b = this.contextTarget) === null || _b === void 0 ? void 0 : _b.okButtonProps;
        const handler = (type, e) => {
          var _a, _b;
          let onCancel = ((_a = this.contextTarget) === null || _a === void 0 ? void 0 : _a.onCancel) || (() => {});
          let onConfirm = ((_b = this.contextTarget) === null || _b === void 0 ? void 0 : _b.onConfirm) || (() => {});
          if (this.initVisible) {
            type == 'ok' ? onConfirm(e) : onCancel(e);
            return;
          }
          let promise = type == 'ok' ? onConfirm(e) : onCancel(e);
          if (promise === null || promise === void 0 ? void 0 : promise.then) {
            promise.then(() => this._leave());
            return;
          }
          this._leave();
        };
        const view = ({
          title,
          content
        }) => {
          let icon = createEl('em'),
            cancelBut = createEl('sp-button'),
            okBut = createEl('sp-button');
          cancelBut['attr-size'] = 'mini';
          okBut['attr-size'] = 'mini';
          okBut['attr-type'] = attrs['ok-type'] || 'primary';
          cancelBut.innerText = attrs['cancel-text'];
          okBut.innerText = attrs['ok-text'];
          cancelBut['attr-type'] = 'link';
          icon.className = 'sp-icon ' + attrs.icon;
          !attrs['hide-icon'] && title.insertBefore(icon, title.firstChild);
          content.innerHTML = '';
          listener(cancelBut, 'click', e => handler('cancel', e));
          listener(okBut, 'click', e => handler('ok', e));
          if (cancelButtonProps) {
            if (!isObject(cancelButtonProps)) throw Error('Please pass in the "Object!"');
            for (let key in cancelButtonProps) {
              cancelBut['attr-' + key] = cancelButtonProps[key];
            }
          }
          if (okButtonProps) {
            if (!isObject(okButtonProps)) throw Error('Please pass in the "Object!"');
            for (let key in okButtonProps) {
              okBut['attr-' + key] = okButtonProps[key];
            }
          }
          content.append(cancelBut, okBut);
        };
        super.fixedView('confirm', attrs, view);
      }
    }
    const PopConfirm = function () {
      defineEl({
        tag: 'sp-popconfirm',
        observedAttributes: Object.keys(popconfirmProps),
        connectedCallback() {
          this.attrs = getProps(this);
          this.attrs = Object.assign(Object.assign({}, popconfirmProps), this.attrs);
          this.setAttribute('hidefocus', true);
          this.setAttribute('tabindex', 0);
          setStyle(this, {
            outline: '0'
          });
          sto(() => this.super = new PopConfirmEds(this));
        },
        attributeChangedCallback(..._args) {
          let [key, _, newval] = _args;
          let root = this.super;
          root && runIFELSE(new Set([[key == 'visible', () => {
            root.visible(newval + '');
          }], [key == 'placement', () => {
            var _a;
            root.fixedEl.className = root.getRootClassName(root.contextTarget, [(_a = '__' + newval) !== null && _a !== void 0 ? _a : '__top', this.APAC ? 'APAC' : '']);
          }]]));
        },
        disconnectedCallback() {
          this.super.destory();
        }
      });
    };
    new PopConfirm();

    const sliderProps = {
      default: 0,
      vertical: false,
      min: 0,
      max: 100,
      marks: undefined,
      step: 1,
      reverse: false,
      // range: undefined, // 去除双滑块模式 采用default 数组传两个参数自动变为双滑块模式
      disabled: undefined,
      tooltipvisible: undefined,
      draggabletrack: undefined,
      value: undefined,
      'tip-formatter': ''
    };

    function bindAll(fns, context) {
      fns.forEach(fn => {
        if (!context[fn]) {
          return;
        }
        context[fn] = context[fn].bind(context);
      });
    }
    function pauseEvent(e) {
      var _a, _b;
      (_a = e === null || e === void 0 ? void 0 : e.stopPropagation) === null || _a === void 0 ? void 0 : _a.call(e);
      (_b = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _b === void 0 ? void 0 : _b.call(e);
    }
    function getMousePosition(vertical, e) {
      return vertical ? e.clientY : e.pageX;
    }
    function getHandleCenterPosition(vertical, handle) {
      const coords = handle.getBoundingClientRect();
      return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
    }
    function getPrecision(step) {
      const stepString = step.toString();
      let precision = 0;
      if (stepString.indexOf('.') >= 0) {
        precision = stepString.length - stepString.indexOf('.') - 1;
      }
      return precision;
    }
    function getClosestPoint(val, {
      marks,
      step,
      min,
      max
    }) {
      const points = Object.keys(marks).map(parseFloat);
      if (step != null) {
        const baseNum = Math.pow(10, getPrecision(step));
        const maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
        const steps = Math.min((val - min) / step, maxSteps);
        const closestStep = Math.round(steps) * step + min;
        points.push(closestStep);
      }
      const diffs = points.map(point => Math.abs(val - point));
      return points[diffs.indexOf(Math.min(...diffs))];
    }
    function ensureValueInRange(val, {
      max,
      min
    }) {
      if (val <= min) {
        return min;
      }
      if (val >= max) {
        return max;
      }
      return val;
    }
    function ensureValuePrecision(val, props) {
      const {
        step
      } = props;
      const closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line
      return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
    }

    let clacMethds = {
      getSliderStart() {
        var _a;
        let rect = (_a = this.props.ctxTarget) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        let vertical = this.props.vertical;
        let reverse = this.props.reverse;
        if (vertical) {
          return reverse + '' == 'true' ? rect.bottom : rect.top;
        }
        return window.pageXOffset + (reverse + '' == 'true' ? rect.right : rect.left);
      },
      getSliderLength(ctxTarget, vertical) {
        const slider = ctxTarget;
        if (!slider) {
          return 0;
        }
        const coords = slider.getBoundingClientRect();
        return vertical ? coords.height : coords.width;
      },
      calcValue(offset, props = false) {
        const {
          vertical,
          min,
          max,
          ctxTarget
        } = props || this.props;
        let func = this.getSliderLength || clacMethds.getSliderLength;
        const ratio = Math.abs(Math.max(offset, 0) / func(ctxTarget, vertical));
        const value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      },
      trimAlignValue(v, nextProps = {}) {
        if (v === null) {
          return null;
        }
        const mergedProps = Object.assign(Object.assign({}, this.props), nextProps);
        const val = ensureValueInRange(v, mergedProps);
        return ensureValuePrecision(val, mergedProps);
      }
    };
    // const set_proto_ = Reflect.setPrototypeOf;
    // const get_proto_ = Reflect.getPrototypeOf;
    // set_proto_(calcValueByPos, Object.freeze({...get_proto_(calcValueByPos), ...clacMethds}))
    const CalcValueByPos = function (args) {
      let {
        reverse = false,
        position
      } = this.props = args;
      const sign = reverse + '' == 'true' ? -1 : +1;
      const pixelOffset = sign * (position - this.getSliderStart());
      const nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      this.props._change({
        value: nextValue
      });
    };
    for (let k in clacMethds) {
      CalcValueByPos.prototype[k] = clacMethds[k];
    }
    let deep = Object.assign({}, clacMethds);

    class ComponentEnhancer {
      constructor(props) {
        this.constrCalc = null;
        this.balance = 0;
        this._curValues = {
          curHandle: 0
        };
        this.onMouseMove = e => {
          this.constrCalc = null;
          const position = getMousePosition(this.props.vertical, e);
          // @ts-ignore
          this.constrCalc = new CalcValueByPos(Object.assign(Object.assign({
            position
          }, this.props), {
            _change: ({
              value
            }) => {
              let {
                o,
                t = undefined,
                curHandle
              } = this._curValues;
              let percent = 100 / this.balance * (value - this.props.min);
              if (curHandle === 0 && o != value) {
                this._curValues.o = value;
                this.PROPSCHANGE({
                  o_percent: ~~percent,
                  oValue: value,
                  curHandle
                });
                return;
              }
              if (curHandle === 1 && t != value) {
                this._curValues.t = value;
                this.PROPSCHANGE({
                  t_percent: ~~percent,
                  tValue: value,
                  curHandle
                });
                return;
              }
              // track 拖拽
              if (curHandle === 2) {
                this.PROPSCHANGE({
                  t_percent: ~~percent,
                  trackValue: value,
                  trackEvent: this.trackEvent,
                  curHandle
                });
              }
            }
          }));
        };
        let {
          ctxTarget: target,
          handlesRefs
        } = props;
        this.props = props;
        this.ctxTarget = target;
        this.document = target && target.ownerDocument;
        this.handlesRefs = handlesRefs;
        this.balance = this.props.max - this.props.min;
        bindAll(['onMouseDown', 'onMounted', 'onEnd', 'removeDocumentEvents', 'addDocumentMouseEvents'], this);
      }
      // 下面是重载函数 全部为大写 
      // props change
      PROPSCHANGE(_args) {}
      // props handle mouse down
      PROPSHANDLEMOUSEDOWN(_e, _curHandle) {}
      // props handle mouse up
      PROPSHANDLEMOUSEUP(_e, _curHandle) {}
      onMounted() {
        listener(this.handlesRefs[0], 'mousedown', e => this.onMouseDown(e, 0));
        this.handlesRefs[1] && listener(this.handlesRefs[1], 'mousedown', e => this.onMouseDown(e, 1));
        if (this.props.defaults.length >= 2 && this.props.draggabletrack) {
          listener(this.props.trackEl, 'mousedown', e => this.onMouseDown(e, 2));
        }
      }
      onMouseStart(e, sort = 0) {
        this.removeDocumentEvents();
        this.onMouseDown(e, sort);
        this.onMouseMove(e);
        this.addDocumentMouseEvents();
        this.focus();
      }
      clickFocus() {
        this.focus();
      }
      focus() {
        var _a;
        if (this.ctxTarget.disabled) {
          return;
        }
        (_a = this.handlesRefs[0]) === null || _a === void 0 ? void 0 : _a.focus();
      }
      onMouseDown(e, sort) {
        if (this.ctxTarget.disabled) return;
        this._curValues.curHandle = sort;
        e.target.focus();
        this.removeDocumentEvents();
        this.onDown(e);
        this.addDocumentMouseEvents();
        pauseEvent(e);
        if (sort !== 2 /* SortEnum.trackEl */) {
          this.PROPSHANDLEMOUSEDOWN(e, sort);
        } else {
          this.trackEvent = e;
        }
      }
      onDown(e) {
        const isVertical = this.props.vertical;
        const position = getMousePosition(isVertical, e);
        if (!isVertical) {
          const handlePosition = getHandleCenterPosition(isVertical, e.target);
          this.dragOffset = position - handlePosition;
        } else {
          this.dragOffset = 0;
        }
      }
      onEnd(e) {
        this.removeDocumentEvents();
        this.PROPSHANDLEMOUSEUP(e, this._curValues.curHandle);
      }
      blur() {
        if (this.ctxTarget.disabled) {
          return;
        }
        Object.keys(this.handlesRefs).forEach(key => {
          var _a, _b;
          (_b = (_a = this.handlesRefs[key]) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }
      addDocumentMouseEvents() {
        this.onMouseMoveListener = listener(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = listener(this.document, 'mouseup', this.onEnd);
      }
      removeDocumentEvents() {
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }

    class Silder extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-slider',
          observedAttributes: Object.keys(sliderProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, sliderProps), this.attrs);
            this.attrs.vertical = this.attrs.vertical + '' == 'true' ? true : false;
            this.attrs.disabled = this.attrs.disabled + '' == 'true' ? true : false;
            this.attrs.max = +this.attrs.max;
            this.attrs.min = +this.attrs.min;
            this.attrs.step = +this.attrs.step;
            this.disabled = this.attrs.disabled;
            //  还要做一层数据转换 ‘true’ 修改为 boolean
            this.attrs.marks = this.attrs.marks !== undefined && this.attrs.marks.indexOf('{') > -1 ? JSON.parse(this.attrs.marks) : (this === null || this === void 0 ? void 0 : this.marks) ? this === null || this === void 0 ? void 0 : this.marks : {};
            context.initView(this, this.attrs).then(({
              railEl,
              trackEl,
              handleEl,
              defaults,
              handleEl2
            }) => {
              this.core = new ComponentEnhancer(Object.assign({
                ctxTarget: this,
                handlesRefs: [handleEl, handleEl2 || false],
                trackEl,
                defaults
              }, this.attrs));
              let marks = createEl('div');
              let style_lp = [this.attrs.vertical ? 'bottom' : 'left'];
              let style_rt = [this.attrs.vertical ? 'top' : 'right'];
              marks.className = 'sp-slider-marks';
              Object.keys(this.attrs.marks).map(k => {
                let item = createEl('div');
                listener(item, 'mousedown', e => this.core.onMouseStart(e));
                let point = createEl('em');
                let text = createEl('span');
                text.textContent = this.attrs.marks[k];
                item.className = 'sp-slider-marks-item';
                let percent = 100 / (this.attrs.max - this.attrs.min) * (k - this.attrs.min);
                setStyle(item, {
                  [style_lp]: percent + '%'
                });
                item.append(point, text);
                marks.append(item);
              });
              this.railEl = railEl;
              this.trackEl = trackEl;
              this.handleEl = handleEl;
              this.handleEl2 = handleEl2;
              this.marks = marks;
              this.defaults = defaults;
              this.append(railEl, trackEl, handleEl, handleEl2, marks);
              this.core.PROPSCHANGE = ({
                o_percent,
                t_percent,
                oValue,
                tValue,
                trackEvent,
                curHandle
              }) => {
                var _a, _b, _c, _d, _e;
                if (curHandle == 2) {
                  let offset_xy = [this.attrs.vertical ? 'offsetY' : 'offsetX'];
                  let offset_wh = [this.attrs.vertical ? 'offsetHeight' : 'offsetWidth'];
                  let offset_lt = [this.attrs.vertical ? 'offsetTop' : 'offsetLeft'];
                  let reverse = this.attrs.reverse + '' == 'true' ? true : false;
                  let target_wh = this[offset_wh];
                  let min = target_wh * (t_percent / 100) - trackEvent[offset_xy];
                  let max = target_wh * (t_percent / 100) + trackEvent.target[offset_wh] - trackEvent[offset_xy];
                  setStyle(trackEl, {
                    [style_lp]: reverse ? 'auto' : min < 0 ? '0' : max >= target_wh ? target_wh - trackEvent.target[offset_wh] + 'px' : `calc(${t_percent + '%'} - ${trackEvent[offset_xy]}px)`,
                    [style_rt]: !reverse ? 'auto' : min < 0 ? '0' : max >= target_wh ? target_wh - trackEvent.target[offset_wh] + 'px' : `calc(${t_percent + '%'} - ${trackEvent[offset_xy]}px)`
                  });
                  setStyle(handleEl, {
                    [style_lp]: reverse ? 'auto' : min < 0 ? '0' : max >= target_wh ? target_wh - trackEvent.target[offset_wh] + 'px' : `calc(${t_percent}% - ${trackEvent[offset_xy] + 4}px)`,
                    [style_rt]: !reverse ? 'auto' : min < 0 ? '0' : max >= target_wh ? target_wh - trackEvent.target[offset_wh] + 'px' : `calc(${t_percent}% - ${trackEvent[offset_xy] + 4}px)`
                  });
                  setStyle(handleEl2, {
                    [style_lp]: reverse ? 'auto' : min < 0 ? trackEvent.target[offset_wh] + 'px' : max >= target_wh ? target_wh - 5 + 'px' : `calc(${t_percent}% + ${trackEvent.target[offset_wh] - trackEvent[offset_xy] - 5}px)`,
                    [style_rt]: !reverse ? 'auto' : min < 0 ? trackEvent.target[offset_wh] + 'px' : max >= target_wh ? target_wh - 5 + 'px' : `calc(${t_percent}% + ${trackEvent.target[offset_wh] - trackEvent[offset_xy] - 5}px)`
                  });
                  let h1v = deep.calcValue(handleEl[offset_lt] + 3, Object.assign({
                    ctxTarget: this
                  }, this.attrs));
                  let h2v = deep.calcValue(handleEl2[offset_lt] + 3, Object.assign({
                    ctxTarget: this
                  }, this.attrs));
                  handleEl['attr-title'] = context.adapterTips(this, parseFloat(h1v.toFixed(getPrecision(this.attrs.step))));
                  handleEl2['attr-title'] = context.adapterTips(this, parseFloat(h2v.toFixed(getPrecision(this.attrs.step))));
                  if (this.attrs.tooltipvisible && this.attrs.tooltipvisible + '' == 'true') {
                    (_a = handleEl === null || handleEl === void 0 ? void 0 : handleEl.super) === null || _a === void 0 ? void 0 : _a._changePosition(handleEl.super.fixedEl, this.attrs.vertical ? 'right' : 'top', false);
                    (_b = handleEl2 === null || handleEl2 === void 0 ? void 0 : handleEl2.super) === null || _b === void 0 ? void 0 : _b._changePosition(handleEl2.super.fixedEl, this.attrs.vertical ? 'right' : 'top', false);
                  }
                  return;
                }
                context.changeStyle({
                  trackEl,
                  target: this,
                  handleRefs: {
                    o: handleEl,
                    o_percent: o_percent !== null && o_percent !== void 0 ? o_percent : undefined,
                    t: handleEl2,
                    t_percent: t_percent !== null && t_percent !== void 0 ? t_percent : undefined,
                    defaults
                  },
                  reverse: this.attrs.reverse,
                  vertical: this.attrs.vertical + '' == 'true' ? true : false
                });
                if (this.attrs.tooltipvisible + '' !== 'false') {
                  if (oValue) {
                    handleEl['attr-title'] = context.adapterTips(this, oValue);
                    (_c = handleEl === null || handleEl === void 0 ? void 0 : handleEl.super) === null || _c === void 0 ? void 0 : _c._changePosition(handleEl.super.fixedEl, this.attrs.vertical ? 'right' : 'top', false);
                  }
                  if (tValue) {
                    handleEl2['attr-title'] = context.adapterTips(this, tValue);
                    (_d = handleEl2 === null || handleEl2 === void 0 ? void 0 : handleEl2.super) === null || _d === void 0 ? void 0 : _d._changePosition(handleEl2.super.fixedEl, this.attrs.vertical ? 'right' : 'top', false);
                  }
                }
                (_e = this === null || this === void 0 ? void 0 : this.onChange) === null || _e === void 0 ? void 0 : _e.call(this, [oValue || parseFloat(handleEl['attr-title'] || 0), tValue || parseFloat(handleEl2['attr-title'] || 0), curHandle]);
              };
              this.core.PROPSHANDLEMOUSEUP = (_, handleFlag = 0) => {
                var _a;
                context.tooltipShow(this.attrs.tooltipvisible, handleFlag ? handleEl2 : handleEl, 'false', false);
                (_a = this === null || this === void 0 ? void 0 : this.onAfterChange) === null || _a === void 0 ? void 0 : _a.call(this, [parseFloat(handleEl['attr-title'] || 0), parseFloat(handleEl2['attr-title'] || 0)]);
              };
              this.core.PROPSHANDLEMOUSEDOWN = (_, handleFlag = 0) => {
                context.tooltipShow(this.attrs.tooltipvisible, handleFlag ? handleEl2 : handleEl, 'true', false);
              };
              this.core.onMounted();
              // 需要处理
              if (this.attrs.draggabletrack + '' !== 'true' && defaults.length < 2) {
                listener(railEl, 'mousedown', e => {
                  if (this.disabled) return;
                  this.core.onMouseStart(e);
                });
                listener(trackEl, 'mousedown', e => {
                  if (this.disabled) return;
                  this.core.onMouseStart(e);
                });
              }
            });
          },
          attributeChangedCallback(..._args) {
            let [key, _, newval] = _args;
            context.obsevseAttrs({
              [key]: newval
            }, this);
          }
        });
      }
      // this call target
      obsevseAttrs(attrs, root) {
        runIFELSE(new Set([['disabled' in attrs, () => {
          root.disabled = attrs.disabled + '' == 'true' ? true : false;
          this._setClassName(root, [root['attr-vertical'] ? '--vertical' : '', root.disabled ? '--disabled' : '']);
        }], ['value' in attrs, () => {
          var _a, _b, _c, _d;
          if (!root.attrs) return;
          let [oValue, tValue] = this.adapterDefaults(attrs.value);
          if (oValue >= root.attrs.max) {
            oValue = root.attrs.max;
          }
          if (oValue <= root.attrs.min) {
            oValue = root.attrs.min;
          }
          if (tValue >= root.attrs.max) {
            tValue = root.attrs.max;
          }
          if (tValue <= root.attrs.min) {
            tValue = root.attrs.min;
          }
          let o_percent = 100 / (root.attrs.max - root.attrs.min) * (oValue - root.attrs.min);
          let t_percent = tValue !== undefined ? 100 / (root.attrs.max - root.attrs.min) * (tValue - root.attrs.min) : undefined;
          this.changeStyle({
            trackEl: root.trackEl,
            target: root,
            handleRefs: {
              o_percent,
              o: root.handleEl,
              t_percent: root.defaults[1] && t_percent,
              t: root.handleEl2,
              defaults: root.defaults
            },
            reverse: root.attrs.reverse + '' == 'true' ? true : false,
            vertical: root.attrs.vertical + '' == 'true' ? true : false
          });
          if (root.attrs['tooltipvisible'] + '' !== 'false') {
            if (oValue) {
              root.handleEl['attr-title'] = this.adapterTips(root, oValue);
              (_b = (_a = root.handleEl) === null || _a === void 0 ? void 0 : _a.super) === null || _b === void 0 ? void 0 : _b._changePosition(root.handleEl.super.fixedEl, root['attrs']['vertical'] ? 'right' : 'top', false);
            }
            if (tValue) {
              root.handleEl2['attr-title'] = this.adapterTips(root, tValue);
              (_d = (_c = root.handleEl2) === null || _c === void 0 ? void 0 : _c.super) === null || _d === void 0 ? void 0 : _d._changePosition(root.handleEl2.super.fixedEl, root.attrs['vertical'] ? 'right' : 'top', false);
            }
          }
        }]]));
      }
      setTrackStyle({
        o_percent,
        t_percent,
        handleEl2,
        handleEl,
        trackEl,
        offset
      }) {
        let unit = o_percent !== undefined && t_percent !== undefined ? '%' : 'px';
        let _offset = handleEl2[offset] > handleEl[offset] ? handleEl[offset] + 'px' : handleEl[offset] > handleEl2[offset] ? handleEl2[offset] + 'px' : 0;
        let distance = unit == 'px' ? Math.abs(handleEl2[offset] - handleEl[offset]) + 'px' : Math.abs(t_percent - o_percent) + '%';
        setStyle(trackEl, {
          height: offset.indexOf('Top') > -1 ? distance : undefined,
          width: offset.indexOf('Left') > -1 ? distance : undefined,
          top: offset.indexOf('Top') > -1 ? _offset : 'auto',
          left: offset.indexOf('Left') > -1 ? _offset : 'auto'
        });
      }
      changeStyle({
        trackEl,
        handleRefs,
        reverse,
        vertical,
        init = false
      }) {
        reverse = reverse + '' == 'true';
        let fixpx = vertical ? '4px' : '7px';
        let {
          o_percent,
          t_percent,
          t: handleEl2,
          o: handleEl,
          defaults
        } = handleRefs;
        if (vertical) {
          if (defaults.length >= 2) {
            o_percent !== undefined && setStyle(handleEl, {
              bottom: reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`,
              top: !reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`
            });
            t_percent !== undefined && setStyle(handleEl2, {
              bottom: reverse ? 'auto' : `calc(${t_percent}% - ${fixpx})`,
              top: !reverse ? 'auto' : `calc(${t_percent}% - ${fixpx})`
            });
            let params = {
              o_percent,
              t_percent,
              handleEl2,
              handleEl,
              trackEl,
              offset: 'offsetTop'
            };
            init ? sto(() => this.setTrackStyle(params)) : this.setTrackStyle(params);
            return;
          }
          setStyle(trackEl, {
            height: o_percent + '%',
            top: !reverse ? 'auto' : '0%',
            bottom: reverse ? 'auto' : '0%'
          });
          setStyle(handleEl, {
            top: !reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`,
            bottom: reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`
          });
          return;
        }
        if (defaults.length >= 2) {
          o_percent !== undefined && setStyle(handleEl, {
            left: reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`,
            right: !reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`
          });
          t_percent !== undefined && setStyle(handleEl2, {
            left: reverse ? 'auto' : `calc(${t_percent}% - ${fixpx})`,
            right: !reverse ? 'auto' : `calc(${t_percent}% - ${fixpx})`
          });
          // sto(() => {
          //     let unit = o_percent !== undefined && t_percent !== undefined ? '%' : 'px';
          //     let width = unit == 'px' ? Math.abs(handleEl2.offsetLeft - handleEl.offsetLeft) + 'px' : Math.abs(t_percent - o_percent) + '%'
          //     let left: any = handleEl2.offsetLeft > handleEl.offsetLeft ? handleEl.offsetLeft + 'px' : handleEl.offsetLeft > handleEl2.offsetLeft ? handleEl2.offsetLeft + 'px' : 0;
          //     // let percent = (!reverse ? o_percent - 1 : 100 - o_percent * 2) + '%'
          //     setStyle(trackEl, {
          //         width,
          //         left
          //     })
          // })
          let params = {
            o_percent,
            t_percent,
            handleEl2,
            handleEl,
            trackEl,
            offset: 'offsetLeft'
          };
          init ? sto(() => this.setTrackStyle(params)) : this.setTrackStyle(params);
          return;
        }
        setStyle(trackEl, {
          width: o_percent + '%',
          left: reverse ? 'auto' : '0%',
          right: !reverse ? 'auto' : '0%'
        });
        setStyle(handleEl, {
          left: reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`,
          right: !reverse ? 'auto' : `calc(${o_percent}% - ${fixpx})`
        });
      }
      tooltipShow(tooltipvisible, tooltip, show = 'true', isinit = true) {
        var _a, _b;
        if (tooltipvisible == undefined) {
          if (isinit) {
            listener(tooltip, 'mouseenter', () => {
              var _a;
              ((_a = tooltip === null || tooltip === void 0 ? void 0 : tooltip.super) === null || _a === void 0 ? void 0 : _a.visible('true')) || (tooltip['attr-visible'] = 'true');
            });
            listener(tooltip, 'mouseleave', () => {
              var _a;
              if (tooltip.show == 'true') return;
              ((_a = tooltip === null || tooltip === void 0 ? void 0 : tooltip.super) === null || _a === void 0 ? void 0 : _a.visible('false')) || (tooltip['attr-visible'] = 'false');
            });
            return;
          }
          tooltip.show = show;
          ((_a = tooltip === null || tooltip === void 0 ? void 0 : tooltip.super) === null || _a === void 0 ? void 0 : _a.visible(show)) || (tooltip['attr-visible'] = show);
          return;
        }
        if (tooltipvisible && tooltipvisible + '' == 'true' && isinit) {
          ((_b = tooltip === null || tooltip === void 0 ? void 0 : tooltip.super) === null || _b === void 0 ? void 0 : _b.visible('true')) || (tooltip['attr-visible'] = 'true');
          return;
        }
      }
      adapterTips(target, _v) {
        let tipFormatterFunc = (target === null || target === void 0 ? void 0 : target.tipFormatter) || (value => {
          var _a;
          return value + (((_a = target.attrs) === null || _a === void 0 ? void 0 : _a['tip-formatter']) || '');
        });
        return tipFormatterFunc(_v);
      }
      adapterDefaults(_default) {
        return _default.pop ? _default : _default.indexOf('[') > -1 ? JSON.parse(_default) : _default.indexOf(',') == -1 ? [_default] : _default.split(',');
      }
      initView(target, attrs) {
        let tagName = 'sp-slider';
        let railEl = createEl('div'),
          trackEl = createEl('div'),
          tempHandleEl = createEl('div'),
          tempHandleEl2 = '',
          tooltip = createEl('sp-tooltip'),
          defaults = this.adapterDefaults(attrs.default);
        tooltip['attr-title'] = this.adapterTips(target, defaults[0]);
        tooltip['attr-trigger'] = 'no';
        tooltip.getPopupContainer = () => target;
        tooltip.setAttribute('name', 'slider-handle');
        railEl.className = tagName + '-rail';
        trackEl.className = tagName + '-track';
        if (attrs.vertical) {
          tooltip['attr-placement'] = 'right';
        }
        if (defaults.length >= 2) {
          tempHandleEl2 = createEl('div');
        }
        if (attrs.tooltipvisible && attrs.tooltipvisible + '' == 'false') {
          tempHandleEl.className = tagName + '-handle';
          if (tempHandleEl2) {
            tempHandleEl2.className = tagName + '-handle-t';
            target.append(tempHandleEl2);
          }
        } else {
          let tmptool = tooltip;
          tmptool.append(tempHandleEl.cloneNode(true));
          tempHandleEl = tmptool;
          this.tooltipShow(attrs.tooltipvisible, tempHandleEl);
          // 第二个克隆
          if (defaults.length >= 2) {
            let tmpTool2 = tooltip.cloneNode(true);
            tmpTool2.getPopupContainer = () => target;
            tmpTool2['attr-title'] = this.adapterTips(target, defaults[1]);
            tmpTool2.append(tempHandleEl2.cloneNode(true));
            tempHandleEl2 = tmpTool2;
            this.tooltipShow(attrs.tooltipvisible, tempHandleEl2);
          }
        }
        let o_percent = 100 / (attrs.max - attrs.min) * (defaults[0] - attrs.min);
        let t_percent = 100 / (attrs.max - attrs.min) * (defaults[1] - attrs.min);
        tempHandleEl.setAttribute('hidefocus', true);
        tempHandleEl.setAttribute('tabindex', 0);
        tempHandleEl2 && tempHandleEl2.setAttribute('hidefocus', true);
        tempHandleEl2 && tempHandleEl2.setAttribute('tabindex', 0);
        this.changeStyle({
          trackEl,
          target,
          handleRefs: {
            o_percent,
            o: tempHandleEl,
            t_percent: defaults[1] && t_percent,
            t: tempHandleEl2,
            defaults
          },
          reverse: attrs.reverse,
          vertical: attrs.vertical + '' == 'true' ? true : false,
          init: true
        });
        this._setClassName(target, [attrs.vertical ? '--vertical' : '', attrs.disabled ? '--disabled' : '']);
        return Promise.resolve({
          railEl,
          trackEl,
          handleEl: tempHandleEl,
          tooltip,
          defaults,
          handleEl2: tempHandleEl2
        });
      }
    }
    new Silder();

    const avatarProps = {
      shape: 'square',
      size: 'default',
      src: undefined,
      icon: undefined
    };
    // click 回调事件

    class Avatar extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-avatar',
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, avatarProps), this.attrs);
            context.initView(this);
          }
        });
      }
      initView(root) {
        const attr = root.attrs;
        const size = attr.size == 'large' ? 40 : attr.size == 'small' ? 24 : attr.size == 'default' ? 32 : parseFloat(attr.size || 0);
        const shape = attr.shape == 'circle' ? '50%' : attr.shape == 'square' ? '3px' : '0';
        let iconEl = '',
          textEl = '',
          imgEl = '';
        this._setClassName(root, [attr.size || '', attr.shape || '']);
        runIFELSE(new Set([[attr.icon, () => {
          iconEl = createEl('i');
          iconEl.className = '--icon sp-icon ' + attr.icon;
          return true;
        }], [attr.src, () => {
          imgEl = createEl('img');
          imgEl.className = '--src';
          imgEl.src = attr.src;
          return true;
        }], [true, () => {
          textEl = createEl('span');
          textEl.className = '--string';
          textEl.textContent = root.textContent || '';
        }]]));
        root.textContent = '';
        setStyle(root, {
          width: (!root.style.width ? size : undefined) + 'px',
          height: (!root.style.height ? size : undefined) + 'px',
          borderRadius: !root.style.borderRadius ? shape : undefined
        });
        root.append(iconEl, imgEl, textEl);
        sto(() => {
          if (textEl) {
            let textwidth = textEl.getBoundingClientRect().width;
            if (textwidth > size) {
              setStyle(textEl, {
                transform: 'scale(' + size / (textwidth + 6) + ') translateX(-50%)'
              });
            }
          }
        });
      }
    }
    new Avatar();

    const badgeProps = {
      'max-count': 99,
      count: undefined,
      'show-zero': true,
      color: undefined,
      text: undefined
    };
    // click 回调事件

    class Badge extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-badge',
          observedAttributes: Object.keys(badgeProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, badgeProps), this.attrs);
            context.initView(this);
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            if (!this.badge) return;
            context.set([this.badge, key, newval, this]);
          }
        });
      }
      set([badge, key, newval, root]) {
        if (key == 'count' || key == 'text') {
          if (key == 'count' && badge.showZero && newval > 0) {
            root.showZero = false;
            badge.textContent = newval;
            setStyle(badge, {
              display: 'block'
            });
            return;
          }
          if (key == 'count' && root.attrs['show-zero'] + '' == 'true' && parseFloat(root['attr-count'] || newval) <= 0) {
            badge.showZero = true;
            setStyle(badge, {
              display: 'none'
            });
          }
          if (key == 'count' && newval >= root.attrs['max-count']) {
            badge.textContent = root.attrs['max-count'] + '+';
            return;
          }
          newval && (badge.textContent = newval);
        }
        if (root.attrs['dot'] + '' == 'true' && key == 'status') {
          if (newval == 'processing') ; else {
            setStyle(badge, {
              backgroundColor: newval == 'success' ? '#52c41a' : newval == 'default' ? '#e6ebf1' : newval == 'error' ? '#ff4d4f' : '#faad14'
            });
          }
        }
        if (key == 'dot') {
          if (newval + '' == 'true') {
            badge.textContent = '';
            badge.classList.add('sp-badge--point');
          } else {
            badge.classList.remove('sp-badge--point');
          }
        }
        if (key == 'type') {
          setStyle(badge, {
            backgroundColor: `var(--color-${newval})`
          });
        }
        if (key == 'color') {
          setStyle(badge, {
            backgroundColor: newval
          });
        }
      }
      initView(root) {
        this._setClassName(root);
        let {
          count,
          text
        } = root.attrs;
        let badge = createEl('span');
        badge.className = 'sp-badge' + (count || text ? '--count' : '--point');
        badge.textContent = count || text;
        for (let k in root.attrs) {
          this.set([badge, k, root.attrs[k], root]);
        }
        root.badge = badge;
        if (badge.className.indexOf('point') > -1) {
          root.insertBefore(badge, root.firstChild);
          return;
        }
        root.append(badge);
      }
    }
    new Badge();

    const cardProps = {
      'no-boder': undefined,
      'dis-hover': undefined,
      title: undefined,
      extra: undefined
    };

    class Card extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-card',
          observedAttributes: Object.keys(cardProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, cardProps), this.attrs);
            sto(() => context.initView(this));
          },
          attributeChangedCallback(...args) {
            let [key, _, newval] = args;
            if (key == 'title' && this.titleEl) {
              this.titleEl.textContent = newval;
            }
          }
        });
      }
      initView(root) {
        var _a;
        let attrs = root.attrs;
        this._setClassName(root, [attrs['dis-hover'] + '' == 'true' ? '' : 'hover']);
        let headerEl = createEl('header'),
          titleEl = '',
          extraEl = '';
        if (attrs['no-boder'] + '' == 'true') {
          setStyle(root, {
            border: 'none'
          });
        }
        if (attrs.title) {
          headerEl.className = 'sp-card-header';
          titleEl = createEl('span');
          titleEl.className = 'sp-card-title';
          titleEl.textContent = attrs.title;
          root.titleEl = titleEl;
        } else {
          headerEl = '';
        }
        if (attrs.extra) {
          extraEl = createEl('div');
          extraEl.className = 'sp-card-extra';
          extraEl.innerHTML = attrs.extra;
        }
        (_a = headerEl === null || headerEl === void 0 ? void 0 : headerEl.append) === null || _a === void 0 ? void 0 : _a.call(headerEl, titleEl, extraEl);
        root.insertBefore(headerEl || createEl('sup'), root.firstChild);
      }
    }
    new Card();

    const collapseProps = {
      'no-boder': undefined,
      'dis-hover': undefined,
      title: undefined,
      extra: undefined
    };

    class CollapseItem extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-collapse-panel',
          observedAttributes: Object.keys(collapseProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, collapseProps), this.attrs);
            sto(() => context.initView(this));
          }
          // attributeChangedCallback(...args: any) {
          //     let [key, _, newval] = args;
          //     key
          //     newval
          // }
        });
      }

      active(_iconEl, root, headerEl) {
        let f = headerEl.classList.toggle('active');
        setStyle(root, {
          height: f ? root.scrollHeight + 32 + 'px' : '38px'
        });
      }
      getIndex(root) {
        var _a;
        let idx;
        [].map.call(((_a = root.parentElement) === null || _a === void 0 ? void 0 : _a.children) || [], (item, index) => {
          item == root && (idx = index);
        });
        return idx;
      }
      adapterDefaults(_default) {
        return _default.pop ? _default : _default.indexOf('[') > -1 ? JSON.parse(_default) : _default.indexOf(',') == -1 ? [_default] : _default.split(',');
      }
      initIndex(pattrsIndex, root, rootIndex, headerEl, iconEl) {
        if (pattrsIndex && rootIndex && rootIndex == pattrsIndex) {
          root.parentElement.lastEl = headerEl;
          sto(() => this.active(iconEl, root, headerEl));
        }
        if (pattrsIndex && !rootIndex) {
          let idx = this.getIndex(root);
          if (idx != undefined && pattrsIndex == +idx + 1) {
            root.parentElement.lastEl = headerEl;
            sto(() => this.active(iconEl, root, headerEl));
          }
        }
      }
      initView(root) {
        var _a;
        let _ptagName = root.parentElement.tagName;
        let pattrs = (_a = root === null || root === void 0 ? void 0 : root.parentElement) === null || _a === void 0 ? void 0 : _a.attrs;
        let attrs = root === null || root === void 0 ? void 0 : root.attrs;
        this._setClassName(root);
        let headerEl = createEl('header');
        let titleEl = createEl('span');
        let iconEl = createEl('em');
        headerEl.className = 'sp-collapse-panel-header';
        let defaults = this.adapterDefaults(pattrs['active-index']);
        listener(headerEl, 'click', _ => {
          var _a, _b, _c, _d;
          if (pattrs['accordion'] == 'true') {
            if (root.parentElement.lastEl && root.parentElement.lastEl != headerEl) {
              (_b = (_a = root.parentElement) === null || _a === void 0 ? void 0 : _a.lastEl) === null || _b === void 0 ? void 0 : _b.classList.remove('active');
              setStyle((_d = (_c = root.parentElement) === null || _c === void 0 ? void 0 : _c.lastEl) === null || _d === void 0 ? void 0 : _d.parentElement, {
                height: '38px'
              });
            }
            root.parentElement.lastEl = headerEl;
            this.active(iconEl, root, headerEl);
            return;
          }
          this.active(iconEl, root, headerEl);
        });
        if (_ptagName !== 'SP-COLLAPSE') {
          throw Error('The parent element should be SP-COLLAPSE');
        }
        if (attrs['hide-arrow'] + '' == 'true') {
          iconEl = '';
        }
        if (!attrs['title']) {
          titleEl = '';
          throw Error('Please pass in the title');
        }
        if (pattrs['accordion'] !== 'true' && defaults.length > 1) {
          defaults.map(i => {
            this.initIndex(i, root, attrs['index'], headerEl, iconEl);
          });
        } else {
          this.initIndex(defaults[0], root, attrs['index'], headerEl, iconEl);
        }
        titleEl.textContent = attrs['title'];
        iconEl && (iconEl.className = 'sp-icon sp-icon-arrow-right');
        titleEl.className = '--title';
        headerEl.append(iconEl, titleEl);
        root.insertBefore(headerEl, root.firstChild);
      }
    }
    new CollapseItem();

    class Collapse extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-collapse',
          observedAttributes: Object.keys(collapseProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, collapseProps), this.attrs);
            sto(() => context.initView(this));
          }
          // attributeChangedCallback(...args: any) {
          //     let [key, _, newval] = args;
          //     key 
          //     newval
          // }
        });
      }

      initView(root) {
        let attrs = root.attrs;
        this._setClassName(root, [attrs['ghost'] + '' == 'true' ? '--ghost' : '', attrs['simple'] + '' == 'true' ? '--simple' : '']);
      }
    }
    new Collapse();

    const dividerProps = {
      'type': 'horizontal',
      'orientation': 'center',
      dashed: undefined,
      plain: undefined
    };

    class Divider extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-divider',
          observedAttributes: Object.keys(dividerProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, dividerProps), this.attrs);
            sto(() => context.initView(this));
          }
        });
      }
      initView(root) {
        let attrs = root.attrs;
        this._setClassName(root, [attrs['type'] == 'vertical' ? '--vertical' : '', '--' + attrs['orientation'], attrs['dashed'] + '' == 'true' ? '--dashed' : '', attrs['plain'] + '' == 'true' ? '--plain' : '']);
        if (root.innerHTML) {
          let html = createEl('div');
          html.className = 'sp-divider-text';
          html.innerHTML = root.innerHTML;
          root.classList.add('__text');
          root.innerHTML = '';
          root.append(html);
        }
      }
    }
    new Divider();

    //onPressEnter
    //onChange
    const InputProps = {
      size: 'default',
      type: 'input',
      placeholder: '',
      'max-length': undefined,
      value: undefined,
      prefix: undefined,
      suffix: undefined,
      disabled: undefined,
      bordered: undefined,
      'allow-clear': undefined,
      'show-count': undefined,
      'addon-before': undefined,
      'addon-after': undefined
      // prefix: 'sp-icon-rmb'
    };

    const get = Reflect.get;
    const set = Reflect.set;
    const svgup = `<svg viewBox="64 64 896 896" focusable="false" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg>`;
    const svgdown = `<svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>`;
    function triggerFocus(element, option) {
      if (!element) return;
      element.focus(option);
      // Selection content
      const {
        cursor
      } = option || {};
      if (cursor) {
        const len = element.value.length;
        switch (cursor) {
          case 'start':
            element.setSelectionRange(0, 0);
            break;
          case 'end':
            element.setSelectionRange(len, len);
            break;
          default:
            element.setSelectionRange(0, len);
        }
      }
    }
    class InputCommon {
      // [func in ['focus', 'blur', 'setSelectionRange', 'select']]: any
      constructor({
        root,
        callback
      }) {
        this.CommonClassname = [];
        this.IptCommonClassname = [];
        this.callback = _arg => {};
        this.supRoot = root;
        this.supRoot._allowClearEl = '';
        this.supRoot._addonBeforeEl = '';
        this.supRoot._addonAfterEl = '';
        this.supRoot._searchIconEl = '';
        this.supRoot.showCountEl = '';
        this.supRoot._suffixEl = '';
        this.supRoot._prefixEl = '';
        this.supRoot._numberEl = '';
        this.supRootAttrs = this.supRoot.attrs;
        this.maxLength = this.supRootAttrs['max-length'] || '';
        this.type = this.supRoot.attrs['type'];
        this.callback = callback || (() => {});
        this.CommonClassname = ['sp-' + this.type + '-core', this.supRootAttrs['addon-before'] || this.supRootAttrs['addon-after'] ? '--shows' : ''];
        this.IptCommonClassname = [this.type + '-core'];
        this.CommonClassname.remove = ArrayRemove;
        this.IptCommonClassname.remove = ArrayRemove;
        const self = this;
        this.supValues = new Proxy({
          inputValues: ''
        }, {
          get(target, p) {
            return get(target, p);
          },
          set(target, p, value) {
            // mac-length
            self.valueObevse(target, p, value);
            return get(target, p) || value + '' || true;
          }
        });
        this.init();
        this.mounted();
      }
      mounted() {
        ['focus', 'blur', 'setSelectionRange', 'select'].map(func => {
          this.supRoot[func] = this[func].bind(this);
        });
      }
      init() {
        let allowClear = this.allowClear();
        let prefix = this.prefix();
        let suffix = this.suffix();
        let addonBefore = this.addonBefore(this.supRoot.attrs['addon-before']);
        let addonAfter = this.addonAfter(this.supRoot.attrs['addon-after']);
        let ipt = this._core();
        let number = this.numberView();
        let showCountEl = this.showCount();
        this.disabled(this.supRootAttrs['disabled']);
        this.bordered(this.supRootAttrs['bordered']);
        let type = this.type;
        this.callback({
          ipt,
          type,
          prefix,
          suffix,
          allowClear,
          addonBefore,
          addonAfter,
          showCountEl,
          number
        });
      }
      isHtml(text) {
        return text.indexOf('<') > -1 && text.indexOf('</') > -1;
      }
      valueObevse(...args) {
        let [target, p, value] = args;
        if (this.supRootAttrs['allow-clear'] + '' == 'true') {
          setStyle(this.supRoot._allowClearEl, {
            opacity: value.length > 0 ? '1' : '0'
          });
        }
        if (this.supRootAttrs['show-count'] + '' == 'true') {
          this.changeCountOfSupRoot(value.length);
        }
        if (this.maxLength && this.maxLength <= value.length) {
          return true;
        }
        set(target, p, value);
      }
      prefix() {
        var _a, _b;
        let prefix = (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b['prefix'];
        if (prefix) {
          let El = this.supRoot._prefixEl = createEl('span'),
            baseName = 'icon-prefix';
          if (this.isHtml(prefix)) {
            El.innerHTML = prefix;
            El.className = baseName;
            return this.supRoot._prefixEl;
          }
          El.className = baseName + ' sp-icon ' + prefix;
          return this.supRoot._prefixEl;
        }
        return this.supRoot._prefixEl;
      }
      suffix() {
        var _a, _b;
        let suffix = (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b['suffix'];
        if (suffix) {
          let El = this.supRoot._suffixEl = createEl('span'),
            baseName = 'icon-suffix';
          if (this.isHtml(suffix)) {
            El.innerHTML = suffix;
            El.className = baseName;
            return this.supRoot._suffixEl;
          }
          El.className = baseName + ' sp-icon ' + suffix;
          return this.supRoot._suffixEl;
        }
        return this.supRoot._suffixEl;
      }
      allowClear() {
        var _a, _b;
        let allowClear = ((_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b['allow-clear']) + '' == 'true' ? true : false;
        if (allowClear) {
          let clearIcon = this.supRoot._allowClearEl = createEl('em');
          clearIcon.className = 'allow-clear sp-icon sp-icon-error';
          listener(this.supRoot._allowClearEl, 'click', _ => {
            this.supValues.inputValues = this[this.type].value = '';
          });
          return this.supRoot._allowClearEl;
        }
        return this.supRoot._allowClearEl;
      }
      disabled(is) {
        let $is = is + '' == 'true' ? 1 : 0;
        if ($is && this.CommonClassname.includes('--disabled')) return;
        this.CommonClassname[$is ? 'push' : 'remove']('--disabled');
        Base.setClassName(this.supRoot, this.CommonClassname);
      }
      bordered(is) {
        let $is = is + '' == 'true' ? 1 : 0;
        if ($is && this.CommonClassname.includes('--bordered')) return;
        this.CommonClassname[$is ? 'push' : 'remove']('--bordered');
        Base.setClassName(this.supRoot, this.CommonClassname);
      }
      showCount() {
        let is = this.supRootAttrs['show-count'] + '' == 'true' ? 1 : 0;
        if (is) {
          let el = this.supRoot.showCountEl = createEl('span');
          el.className = 'showCount';
          this.IptCommonClassname[is ? 'push' : 'remove']('showCount');
          Base.setClassName(this[this.type], this.IptCommonClassname);
          this.changeCountOfSupRoot();
        }
        return this.supRoot.showCountEl;
      }
      changeCountOfSupRoot(count = this.supValues.inputValues.length) {
        var _a;
        let _count = this.maxLength ? `${count} / ${this.maxLength}` : count;
        if (this.type == 'textarea') {
          this.supRoot.setAttribute('count', _count);
          return;
        }
        if ((_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.showCountEl) {
          this.supRoot.showCountEl.textContent = _count;
        }
      }
      onFocus(_) {
        this.supRoot.classList.add('focus');
      }
      onBlur(_) {
        this.supRoot.classList.remove('focus');
      }
      change(e, value) {
        var _a, _b;
        this.supValues.inputValues = value;
        (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e, value);
      }
      focus(option) {
        sto(() => triggerFocus(this[this.type], option));
      }
      blur() {
        this[this.type].blur();
      }
      setSelectionRange(start, end, direction) {
        this[this.type].setSelectionRange(start, end, direction);
      }
      select() {
        this[this.type].select();
      }
      numberView() {
        if (this.type == 'number') {
          let numberWrap = this.supRoot._numberEl = createEl('div'),
            up = createEl('span'),
            down = createEl('span');
          numberWrap.className = 'number-handle-wrap';
          up.className = 'number-handle-wrap-up';
          down.className = 'number-handle-wrap-down';
          up.innerHTML = svgup;
          down.innerHTML = svgdown;
          numberWrap.up = up;
          numberWrap.down = down;
          numberWrap.append(up, down);
        }
        return this.supRoot._numberEl;
      }
      onPressEnter(value) {
        var _a, _b;
        this.supValues.inputValues = value;
        (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.onPressEnter) === null || _b === void 0 ? void 0 : _b.call(_a, value);
      }
      _core() {
        var _a, _b;
        let type = this.type;
        let placeholder = (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b['placeholder'];
        runIFELSE(new Set([
        //type == 'input' || type == 'password' || type == 'search' || type == 'number'
        [type != 'textarea', () => {
          if (!this[type]) {
            this[type] = createEl('input');
            this[type].placeholder = placeholder || '';
            Base.setClassName(this[type], this.IptCommonClassname);
          }
        }], [type == 'textarea', () => {
          if (!this.textarea) {
            this.textarea = createEl('textarea');
            this.textarea.placeholder = placeholder || '';
            Base.setClassName(this.textarea, this.IptCommonClassname);
          }
        }]]));
        this[type].value = this.supValues.inputValues = this.supRootAttrs['value'] || '';
        if (this.maxLength) {
          this[type].setAttribute('maxlength', this.maxLength);
        }
        listener(this[type], 'input', e => {
          this.change(e, e.target.value);
        });
        listener(this[type], 'keydown', e => {
          var _a, _b;
          if (e.keyCode == "13") {
            this.onPressEnter(e.target.value);
            (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.onSearch) === null || _b === void 0 ? void 0 : _b.call(_a, e, e.target.value);
          }
        });
        listener(this[type], 'focus', e => {
          if (this.CommonClassname.includes('--disabled')) {
            e.stopPropagation();
            e.preventDefault();
            this.blur();
            return;
          }
          if (this.supRoot._addonBeforeEl || this.supRoot._addonAfterEl) {
            return;
          }
          this.onFocus(e);
        }, true);
        listener(this[type], 'blur', e => {
          this.onBlur(e);
        });
        return this[type];
      }
      get currentTarget() {
        return this[this.type];
      }
      size(size) {
        if (!this.input) this._core();
        this.supRoot['size'] = size;
      }
      // html好像不能🦐使用“innerHTML”
      addonBefore(any) {
        // 暂时支持字符串格式吧...
        if (!this.supRoot._addonBeforeEl && any) {
          let tmpb = createEl('span');
          tmpb.className = 'sp-' + this.type + '-before';
          tmpb.innerHTML = any;
          this.supRoot._addonBeforeEl = tmpb;
        }
        return this.supRoot._addonBeforeEl;
      }
      addonAfter(any) {
        if (!this.supRoot._addonAfterEl && any) {
          let tmpb = createEl('span');
          tmpb.className = 'sp-' + this.type + '-after';
          tmpb.innerHTML = any;
          this.supRoot._addonAfterEl = tmpb;
        }
        return this.supRoot._addonAfterEl;
      }
      _searchButton() {
        let icon = createEl('em'),
          button = createEl('sp-button');
        icon.className = 'sp-icon sp-icon-search';
        button.setAttribute('classname', 'sp-input-search');
        button.iconEl = icon;
        button.append(icon);
        this.supRoot._searchIconEl = button;
        listener(button, 'click', _ => {
          var _a, _b;
          (_b = (_a = this.supRoot) === null || _a === void 0 ? void 0 : _a.onSearch) === null || _b === void 0 ? void 0 : _b.call(_a, _, this.supValues.inputValues);
        });
        return this.supRoot._searchIconEl;
      }
      destory() {
        this.input = null;
      }
    }

    class MixinSet {
      // static instance: any
      constructor(Common, supRoot) {
        this.Common = Common;
        this.supRoot = supRoot;
      }
      value(v) {
        this.Common[this.supRoot['attrs']['type']].value = v;
        this.Common['supValues'].inputValues = v;
      }
      disabled(v) {
        this.Common.disabled(v);
      }
    }

    class Input extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-input',
          observedAttributes: Object.keys(InputProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, InputProps), this.attrs);
            const that = this;
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            this.core = new InputCommon({
              root: this,
              callback(args) {
                context.initView(that, args, this);
              }
            });
            this.observeAttr = new MixinSet(this.core, this);
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _o, v] = args;
            (_b = (_a = this.observeAttr) === null || _a === void 0 ? void 0 : _a[k]) === null || _b === void 0 ? void 0 : _b.call(_a, v);
          }
        });
      }
      initView(root, args, _Common) {
        let {
          ipt,
          prefix,
          suffix,
          allowClear,
          addonBefore,
          showCountEl,
          addonAfter
        } = args;
        prefix && root.insertBefore(prefix, root.firstChild);
        addonBefore && root.insertBefore(addonBefore, root.firstChild);
        root.append(ipt, allowClear, showCountEl, suffix, addonAfter);
      }
    }
    new Input();

    // onSearch
    // observe 就一个loading 写在直属文件里面了
    const SearchProps = Object.freeze(Object.assign(Object.assign({}, InputProps), {
      type: 'search',
      'loading': undefined,
      'enter-button': undefined
    }));

    class Search$1 extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-search',
          observedAttributes: Object.keys(SearchProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, SearchProps), this.attrs);
            const that = this;
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            this.core = new InputCommon({
              root: this,
              callback(args) {
                context.initView(that, args, this);
              }
            });
            this.observeAttr = new MixinSet(this.core, this);
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _, v] = args;
            if (k == 'loading' && (this === null || this === void 0 ? void 0 : this._searchIconEl)) {
              if (this['attrs']['enter-button']) {
                this._searchIconEl['attr-loading'] = v;
              } else {
                this._searchIconEl.iconEl.className = 'sp-icon ' + (v + '' == 'true' ? 'sp-icon-loading' : 'sp-icon-search');
              }
            }
            (_b = (_a = this.observeAttr) === null || _a === void 0 ? void 0 : _a[k]) === null || _b === void 0 ? void 0 : _b.call(_a, v);
          }
        });
      }
      initView(root, args, _Common) {
        let {
          ipt,
          prefix,
          suffix,
          allowClear,
          addonBefore,
          showCountEl,
          addonAfter
        } = args;
        prefix && root.insertBefore(prefix, root.firstChild);
        let el = _Common._searchButton();
        let buttonText = root['attrs']['enter-button'];
        if (buttonText) {
          // el.classList.add('sp-icon sp-icon-search')
          el.textContent = root['attrs']['enter-button'];
          el['attr-type'] = 'primary';
        }
        if (buttonText + '' == 'false') {
          el = '';
        }
        addonBefore && root.insertBefore(addonBefore, root.firstChild);
        root.append(ipt, allowClear, showCountEl, suffix, addonAfter, el);
      }
    }
    new Search$1();

    const PasswordProps = Object.freeze(Object.assign(Object.assign({}, InputProps), {
      type: 'password',
      'icon-show': 'sp-icon-eye',
      'icon-unshow': 'sp-icon-eyes',
      visible: true
    }));

    class Password extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-password',
          observedAttributes: Object.keys(PasswordProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, PasswordProps), this.attrs);
            const that = this;
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            this.core = new InputCommon({
              root: this,
              callback(args) {
                context.initView(that, args, this);
              }
            });
            this.observeAttr = new MixinSet(this.core, this);
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _o, v] = args;
            (_b = (_a = this.observeAttr) === null || _a === void 0 ? void 0 : _a[k]) === null || _b === void 0 ? void 0 : _b.call(_a, v);
          }
        });
      }
      initView(root, args, _Common) {
        let {
          ipt,
          prefix,
          suffix,
          allowClear,
          addonBefore,
          showCountEl,
          addonAfter
        } = args;
        prefix && root.insertBefore(prefix, root.firstChild);
        let iconShow = root['attrs']['icon-show'];
        let iconUnShow = root['attrs']['icon-unshow'];
        let visible = root['attrs']['visible'] + '' == 'true' ? 1 : 0;
        let el = createEl('em');
        el.className = 'password-el sp-icon ' + iconUnShow;
        listener(el, 'click', _ => {
          if (ipt.getAttribute('type') == 'password') {
            ipt.setAttribute('type', 'default');
            el.className = 'password-el sp-icon ' + iconShow;
            return;
          }
          el.className = 'password-el sp-icon ' + iconUnShow;
          ipt.setAttribute('type', 'password');
        });
        ipt.setAttribute('type', 'password');
        addonBefore && root.insertBefore(addonBefore, root.firstChild);
        root.append(ipt, allowClear, showCountEl, suffix, visible ? el : '', addonAfter);
      }
    }
    new Password();

    const TextareaProps = Object.freeze(Object.assign(Object.assign({}, InputProps), {
      type: 'textarea',
      'auto-size': undefined,
      'min-rows': undefined,
      'max-rows': undefined
    }));
    //onResize

    class Textarea extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-textarea',
          observedAttributes: Object.keys(TextareaProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, TextareaProps), this.attrs);
            const that = this;
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            this.core = new InputCommon({
              root: this,
              callback(args) {
                context.initView(that, args, this);
              }
            });
            this.observeAttr = new MixinSet(this.core, this);
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _o, v] = args;
            (_b = (_a = this.observeAttr) === null || _a === void 0 ? void 0 : _a[k]) === null || _b === void 0 ? void 0 : _b.call(_a, v);
          }
        });
      }
      initView(root, args, _Common) {
        let {
          ipt,
          prefix,
          suffix,
          allowClear,
          addonBefore,
          addonAfter
        } = args;
        prefix && root.insertBefore(prefix, root.firstChild);
        addonBefore && root.insertBefore(addonBefore, root.firstChild);
        listener(ipt, 'resize', _ => {
          var _a;
          (_a = root === null || root === void 0 ? void 0 : root.onResize) === null || _a === void 0 ? void 0 : _a.call(root, _);
        });
        sto(() => {
          if (root['attrs']['auto-size'] + '' == 'true' || root['attrs']['min-rows'] || root['attrs']['max-rows']) {
            listener(ipt, 'input', _ => {
              setStyle(ipt, {
                height: _.target.scrollHeight + 'px'
              });
            });
            let fontSize = window.getComputedStyle(ipt).getPropertyValue('line-height') || 14;
            let size = parseFloat(fontSize);
            if (root['attrs']['min-rows']) {
              let min = root['attrs']['min-rows'] * size;
              setStyle(ipt, {
                minHeight: min + 'px'
              });
            }
            if (root['attrs']['max-rows']) {
              let max = root['attrs']['max-rows'] * size;
              setStyle(ipt, {
                maxHeight: max + 'px'
              });
            }
            setStyle(ipt, {
              resize: 'none'
            });
          }
        });
        root.append(ipt, allowClear, suffix, addonAfter);
      }
    }
    new Textarea();

    const numberProps = Object.freeze(Object.assign(Object.assign({}, InputProps), {
      type: 'number',
      min: undefined,
      max: undefined,
      step: 1,
      parser: undefined
    }));

    class InputNumber extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-input-number',
          observedAttributes: Object.keys(numberProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, numberProps), this.attrs);
            const that = this;
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            this.core = new InputCommon({
              root: this,
              callback(args) {
                context.initView(that, args, this);
              }
            });
            this.observeAttr = new MixinSet(this.core, this);
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _o, v] = args;
            (_b = (_a = this.observeAttr) === null || _a === void 0 ? void 0 : _a[k]) === null || _b === void 0 ? void 0 : _b.call(_a, v);
          }
        });
      }
      initView(root, args, _Common) {
        let {
          ipt,
          prefix,
          suffix,
          allowClear,
          addonBefore,
          addonAfter,
          number
        } = args;
        prefix && root.insertBefore(prefix, root.firstChild);
        addonBefore && root.insertBefore(addonBefore, root.firstChild);
        let min = root['attrs']['min'];
        let max = root['attrs']['max'];
        let step = root['attrs']['step'];
        let parserStr = root['attrs']['parser'];
        let parser = (root === null || root === void 0 ? void 0 : root.parser) || (value => value + (parserStr || ''));
        ipt.value = _Common.supValues.inputValues = parser(ipt.value);
        root.onChange = (_, value) => {
          var _a;
          let num = ((_a = value === null || value === void 0 ? void 0 : value.match(/(\-)+\d/g)) === null || _a === void 0 ? void 0 : _a.join('')) || value;
          if (max + '' && num >= max) {
            ipt.value = _Common.supValues.inputValues = parser(max);
          }
          if (min + '' && num <= min) {
            ipt.value = _Common.supValues.inputValues = parser(min);
          }
        };
        listener(number.up, 'click', _ => {
          var _a;
          let value = parseFloat(ipt.value) || 0;
          if (value >= max) {
            setStyle(number.up, {
              cursor: 'not-allowed'
            });
            return;
          } else {
            setStyle(number.up, {
              cursor: 'pointer'
            });
          }
          setStyle(number.down, {
            cursor: 'pointer'
          });
          let nv = value + (step ? +step : 1);
          ipt.value = _Common.supValues.inputValues = parser(nv);
          (_a = root === null || root === void 0 ? void 0 : root.onStep) === null || _a === void 0 ? void 0 : _a.call(root, ipt.value, 'up');
        });
        listener(number.down, 'click', _ => {
          var _a;
          let value = parseFloat(ipt.value) || 0;
          if (value <= min) {
            setStyle(number.down, {
              cursor: 'not-allowed'
            });
            return;
          }
          setStyle(number.down, {
            cursor: 'pointer'
          });
          setStyle(number.up, {
            cursor: 'pointer'
          });
          let nv = value - (step ? +step : 1);
          ipt.value = _Common.supValues.inputValues = parser(nv);
          (_a = root === null || root === void 0 ? void 0 : root.onStep) === null || _a === void 0 ? void 0 : _a.call(root, ipt.value, 'down');
        });
        root.append(ipt, allowClear, suffix, number, addonAfter);
      }
    }
    new InputNumber();

    const checkboxProps = Object.freeze({
      checked: undefined,
      disabled: undefined,
      indeterminate: undefined
    });
    const checkboxGroupProps = Object.freeze({
      value: undefined,
      disabled: undefined
    });

    class CheckBoxGroup extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-checkbox-group',
          observedAttributes: Object.keys(checkboxGroupProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, checkboxGroupProps), this.attrs);
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            sto(() => context.initView(this));
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _o, v] = args;
            if (k == 'value') {
              this.sup = true;
              (_a = context === null || context === void 0 ? void 0 : context.onValue) === null || _a === void 0 ? void 0 : _a.call(context, this, v, false);
            }
            if (k == 'disabled') {
              (_b = context === null || context === void 0 ? void 0 : context.onDisabled) === null || _b === void 0 ? void 0 : _b.call(context, this, v);
            }
          }
        });
      }
      adapterDefaults(_default) {
        return _default.pop ? _default : _default.indexOf('[') > -1 ? JSON.parse(_default) : _default.indexOf(',') == -1 ? [_default] : _default.split(',');
      }
      reset(root, clear = true) {
        if (clear && root.checkedArr) return;
        root.checkedArr = [];
        root.checkedArr.remove = ArrayRemove;
      }
      onValue(root, value, init = true) {
        var _a;
        let formt = this.adapterDefaults(value);
        [...root.children].map((el, _index) => {
          var _a, _b;
          if (init) {
            let onChange = el === null || el === void 0 ? void 0 : el.onChange;
            el.onChange = value => {
              var _a, _b;
              if (!root.sup) {
                onChange === null || onChange === void 0 ? void 0 : onChange(value);
                (_a = root === null || root === void 0 ? void 0 : root.checkedArr) === null || _a === void 0 ? void 0 : _a[value + '' == 'true' ? 'push' : 'remove'](el === null || el === void 0 ? void 0 : el.label);
                (_b = root === null || root === void 0 ? void 0 : root.onChange) === null || _b === void 0 ? void 0 : _b.call(root, [...new Set(root.checkedArr)]);
              }
            };
          }
          if (formt.length > 0) {
            formt.map(item => {
              var _a, _b;
              if (item == (el === null || el === void 0 ? void 0 : el.label)) {
                el._checked = true;
                (_a = el === null || el === void 0 ? void 0 : el.checked) === null || _a === void 0 ? void 0 : _a.call(el, true);
                (_b = root === null || root === void 0 ? void 0 : root.checkedArr) === null || _b === void 0 ? void 0 : _b.push(el === null || el === void 0 ? void 0 : el.label);
              }
            });
          }
          if (!init && formt.length == 0) {
            el._checked = false;
            (_a = root === null || root === void 0 ? void 0 : root.checkedArr) === null || _a === void 0 ? void 0 : _a.remove(el === null || el === void 0 ? void 0 : el.label);
            (_b = el === null || el === void 0 ? void 0 : el.checked) === null || _b === void 0 ? void 0 : _b.call(el, false, true);
          }
        });
        (_a = root === null || root === void 0 ? void 0 : root.onChange) === null || _a === void 0 ? void 0 : _a.call(root, [...new Set(root.checkedArr)]);
        root.sup = false;
      }
      onDisabled(root, disabled) {
        let formt = disabled + '' == 'true' ? true : false;
        [...root.children].map(el => {
          el._disabled = formt ? true : false;
          el.classList[formt ? 'add' : 'remove']('--disabled');
        });
        return;
      }
      initView(root) {
        root.sup = true;
        this.reset(root);
        let attrs = root['attrs'];
        let {
          value,
          disabled
        } = attrs;
        this.onValue(root, value);
        this.onDisabled(root, disabled);
      }
    }
    new CheckBoxGroup();

    class CheckBox extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-checkbox',
          observedAttributes: Object.keys(checkboxProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, checkboxProps), this.attrs);
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            context.initView(this);
          },
          attributeChangedCallback(...args) {
            var _a;
            let [k, _o, v] = args;
            if (k == 'checked') {
              (_a = this === null || this === void 0 ? void 0 : this.checked) === null || _a === void 0 ? void 0 : _a.call(this, v);
            }
            if (k == 'indeterminate') {
              this._indeterminate = v;
              context.setClassName(this);
            }
            if (k == 'disabled') {
              this._disabled = v;
              context.setClassName(this);
            }
          }
        });
      }
      setClassName(root) {
        this._setClassName(root, [root._indeterminate + '' == 'true' ? '--indeterminate' : '', root._checked + '' == 'true' ? '--checked' : '', root._disabled + '' == 'true' ? '--disabled' : '']);
      }
      indeterminate(root) {
        if (root._indeterminate + '' == 'true') {
          root._checked = false;
          root._indeterminate = false;
        }
      }
      initView(root) {
        root.label = root.textContent.trim();
        let core = createEl('span'),
          checkbox = createEl('input'),
          inner = createEl('span');
        let attrs = root['attrs'];
        let defaultChecked = attrs['checked'];
        this.setClassName(root);
        const checked = (checked = true, isSup = false, inser = false) => {
          var _a;
          if (root._disabled + '' == 'true') {
            this.setClassName(root);
            return;
          }
          if (inser) {
            root._checked = root._checked ? false : true;
          } else {
            root._checked = checked + '' == 'true' ? true : false;
          }
          this.indeterminate(root);
          this.setClassName(root);
          !isSup && ((_a = root === null || root === void 0 ? void 0 : root.onChange) === null || _a === void 0 ? void 0 : _a.call(root, root._checked));
        };
        root.checked = checked;
        if (defaultChecked + '' == 'true') {
          root._checked = true;
          checked(true);
        }
        if (attrs['indeterminate'] + '' == 'true') {
          root._indeterminate = true;
        }
        if (attrs['disabled'] + '' == 'true') {
          root._disabled = true;
        }
        listener(root, 'click', _ => checked(true, false, true));
        checkbox.setAttribute('type', 'checkbox');
        core.className = 'sp-checkbox-core';
        checkbox.className = 'sp-checkbox-core-input';
        inner.className = 'sp-checkbox-core-inner';
        core.append(checkbox, inner);
        root.insertBefore(core, root.firstChild);
      }
    }
    new CheckBox();

    const radioProps = Object.freeze({
      checked: undefined,
      disabled: undefined
    });
    const radioGroupProps = {
      value: undefined,
      disabled: undefined,
      type: undefined,
      optiontype: undefined
    };

    class RadioGroup extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-radio-group',
          observedAttributes: Object.keys(radioGroupProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, radioGroupProps), this.attrs);
            sto(() => context.initView(this));
          },
          attributeChangedCallback(...args) {
            var _a, _b;
            let [k, _o, v] = args;
            if (k == 'value') {
              this.sup = true;
              (_a = context === null || context === void 0 ? void 0 : context.onValue) === null || _a === void 0 ? void 0 : _a.call(context, this, v, false);
            }
            if (k == 'disabled') {
              (_b = context === null || context === void 0 ? void 0 : context.onDisabled) === null || _b === void 0 ? void 0 : _b.call(context, this, v);
            }
          }
        });
      }
      onValue(root, value, init = true) {
        [...root.children].map(el => {
          if (init) {
            let onChange = el === null || el === void 0 ? void 0 : el.onChange;
            listener(el, 'click', _ => {
              if (root.lastRadio && root.lastRadio != el) {
                root.lastRadio.checked(false);
                root.lastRadio = el;
              } else {
                root.lastRadio = el;
              }
            });
            el.onChange = value => {
              var _a;
              if (!root.sup) {
                onChange === null || onChange === void 0 ? void 0 : onChange(el === null || el === void 0 ? void 0 : el.label);
                value + '' == 'true' && ((_a = root === null || root === void 0 ? void 0 : root.onChange) === null || _a === void 0 ? void 0 : _a.call(root, el === null || el === void 0 ? void 0 : el.label));
              }
            };
          }
          if (value == (el === null || el === void 0 ? void 0 : el.label)) {
            el._checked = true;
            el.checked();
            root.lastRadio = el;
          }
        });
        root.sup = false;
      }
      onDisabled(root, disabled) {
        let formt = disabled + '' == 'true' ? true : false;
        [...root.children].map(el => {
          el._disabled = formt ? true : false;
          el.classList[formt ? 'add' : 'remove']('--disabled');
        });
        return;
      }
      initView(root) {
        root.sup = true;
        let attrs = root['attrs'];
        let {
          value,
          disabled
        } = attrs;
        this.onValue(root, value);
        this.onDisabled(root, disabled);
        this._setClassName(root);
      }
    }
    new RadioGroup();

    class Radio extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-radio',
          observedAttributes: Object.keys(radioProps),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, radioProps), this.attrs);
            context.initView(this);
          },
          attributeChangedCallback(...args) {
            var _a;
            let [k, _o, v] = args;
            if (k == 'checked') {
              (_a = this === null || this === void 0 ? void 0 : this.checked) === null || _a === void 0 ? void 0 : _a.call(this, v);
            }
            if (k == 'disabled') {
              this._disabled = v;
              context.setClassName(this);
            }
          }
        });
      }
      setClassName(root) {
        this._setClassName(root, [root._indeterminate + '' == 'true' ? '--indeterminate' : '', root._checked + '' == 'true' ? '--checked' : '', root._disabled + '' == 'true' ? '--disabled' : '']);
      }
      initView(root) {
        root.label = root.textContent.trim();
        let core = createEl('span'),
          radio = createEl('input'),
          inner = createEl('span');
        let attrs = root['attrs'];
        let defaultChecked = attrs['checked'];
        const checked = (checked = true) => {
          var _a;
          if (root._disabled + '' == 'true') {
            this.setClassName(root);
            return;
          }
          root._checked = checked + '' == 'true' ? true : false;
          this.setClassName(root);
          (_a = root === null || root === void 0 ? void 0 : root.onChange) === null || _a === void 0 ? void 0 : _a.call(root, root._checked);
        };
        root.checked = checked;
        if (defaultChecked + '' == 'true') {
          root._checked = true;
          checked(true);
        }
        if (attrs['disabled'] + '' == 'true') {
          root._disabled = true;
        }
        this.setClassName(root);
        listener(root, 'click', _ => checked(true));
        radio.setAttribute('type', 'radio');
        core.className = 'sp-radio-core';
        radio.className = 'sp-radio-core-input';
        inner.className = 'sp-radio-core-inner';
        core.append(radio, inner);
        root.insertBefore(core, root.firstChild);
      }
    }
    new Radio();

    const Props$1 = {
      column: 6,
      row: 6,
      iscustom: false,
      cellheight: 60,
      cellwidth: 60,
      cellstyle: null
    };

    const uiStyle = style => `
.sp-layout_cell {
  background: rgba(0,0,0,.2);
  width: fit-content;
  transition: 0.5s;
  padding: 5px
}
.sp-layout_cell_core {
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background: #ff4d37
}
.sp-layout_cell.checked .sp-layout_cell_core  {
  background: #0eb661
}
${style}
`;
    const initUi = (modalNumber, cfg) => {
      // if (initUi._container) initUi._container.remove();
      let container = createEl("div");
      const styleEl = createEl('style');
      let table = initUi.table = initUi.initTable(modalNumber, cfg || {});
      container.className = 'sp-layout_container';
      container.style.position = 'relative';
      styleEl.innerHTML = cfg.cellstyle || uiStyle(`.sp-layout_cell {
    width: ${cfg.cellwidth - 5 * 2}px;
    height: ${cfg.cellheight - 5 * 2}px;
  }`);
      container.table = table;
      container.cfg = cfg;
      // container.append(styleEl);
      table.appendEls.map(el => container.append(el));
      // document.body.append(container);
      return [container, styleEl];
    };
    initUi.cell = (width, height) => {
      let el = document.createElement("div");
      el.className = 'sp-layout_cell';
      // el.style.width = width - 5 * 2 + 'px';
      // el.style.height = height - 5 * 2 + 'px';
      el.innerHTML = `<div class='sp-layout_cell_core'></div>`;
      return el;
    };
    initUi.initTable = (modalNumber, cfg) => {
      let rowNumber = modalNumber[0];
      let cellNumber = modalNumber[1];
      const width = +cfg.cellwidth;
      const height = +cfg.cellheight;
      const array = length => new Array(length).fill(1);
      return array(cellNumber).reduce((table, _, index) => {
        let cells = document.createElement("div");
        // cells.className = 'sp-layout_cell';
        cells.style.display = 'flex';
        table.tableNx.push(array(rowNumber).map((__, idx) => {
          let _cellEl = initUi.cell();
          _cellEl.position = (index + 1) * width + "," + (idx + 1) * height;
          _cellEl.realPosition = `${index + 1},${idx + 1}`;
          _cellEl.onclick = e => {
            e.position = (index + 1) * width + "," + (idx + 1) * height;
            e.realPosition = `${index + 1},${idx + 1}`;
          };
          _cellEl.onmousemove = e => {
            e.position = (index + 1) * width + "," + (idx + 1) * height;
            e.realPosition = `${index + 1},${idx + 1}`;
          };
          cells.append(_cellEl);
          return _cellEl;
        }));
        table.appendEls.push(cells);
        return table;
      }, {
        tableNx: [],
        appendEls: []
      });
    };

    // const model = [
    function control(target, cfg, table) {
      const iscustom = cfg.iscustom;
      // utils.init()
      /** in case checkbox */
      let lastPoint = null;
      const checked = [];
      control.move(target, (e, cx, cy) => {
        let lastY, lastX, x, y;
        if (lastPoint) {
          [lastY, lastX] = lastPoint.split(',').map(i => i - 1);
          [y, x] = e.realPosition.split(",").map(i => +i - 1);
        }
        table.tableNx.map((els, indexY) => els.map((item, indexX) => {
          if (iscustom && lastPoint) {
            /** r=right b=bottom l=left t=top */
            let rb = indexY >= lastY && indexY <= y && indexX >= lastX && indexX <= x;
            let lb = indexY >= lastY && indexY <= y && indexX <= lastX && indexX >= x;
            let rt = indexY <= lastY && indexY >= y && indexX >= lastX && indexX <= x;
            let lt = indexY <= lastY && indexY >= y && indexX <= lastX && indexX >= x;
            if ((lb || rb || rt || lt) && !item.isChecked) {
              item.classList.add('checked');
            } else if (!item.isChecked) {
              item.classList.remove('checked');
            }
          }
          if (!iscustom && !item.isChecked) {
            if (cx > item.offsetLeft && cy > item.offsetTop) {
              item.classList.add('checked');
            } else {
              item.classList.remove('checked');
            }
          }
        }));
      });
      control.click(target, e => {
        var _a, _b;
        const y_childrens = target.childNodes;
        /** non custom */
        if (!iscustom) {
          lastPoint = '1,1';
        }
        /** custom ⬇️ */
        if (!lastPoint) {
          lastPoint = e.realPosition;
          const [lastY, lastX] = lastPoint.split(',').map(i => i - 1);
          const [y, x] = e.realPosition.split(',').map(i => i - 1);
          y_childrens[y].childNodes[x].classList.add('checked');
          const pos = [lastY, lastX, y, x];
          checked.push(pos);
          (_a = cfg === null || cfg === void 0 ? void 0 : cfg.checkCallback) === null || _a === void 0 ? void 0 : _a.call(cfg, checked, pos);
          return;
        }
        const [lastY, lastX] = lastPoint.split(',').map(i => i - 1);
        const [y, x] = e.realPosition.split(',').map(i => i - 1);
        let minY = Math.min(lastY, y);
        let minX = Math.min(lastX, x);
        let maxY = Math.max(lastY, y);
        let maxX = Math.max(lastX, x);
        for (let i = 0; i <= maxY; i++) {
          if (i >= minY) {
            for (let j = 0; j <= maxX; j++) {
              const element = y_childrens[i].childNodes[j];
              // if(element.isChecked) {
              //   console.log('已有被选中')
              //   return;
              // }
              if (j >= minX) {
                element.isChecked = true;
                element.classList.add('checked');
              }
            }
          }
        }
        const pos = [lastY, lastX, y, x];
        checked.push(pos);
        const style = transfrom([maxY, maxX, minY, minX]);
        (_b = cfg === null || cfg === void 0 ? void 0 : cfg.checkCallback) === null || _b === void 0 ? void 0 : _b.call(cfg, checked, pos, style);
        lastPoint = null;
        // utils.postotabpos(gcx, gcy, cfg.cellwidth, cfg.cellheight)
      });

      function transfrom([maxY, maxX, minY, minX]) {
        let height = ((maxY - minY + 1) / cfg.row).toFixed(2);
        let width = ((maxX - minX + 1) / cfg.column).toFixed(2);
        let left = (minX / cfg.column).toFixed(2);
        let top = (minY / cfg.row).toFixed(2);
        return {
          left,
          top,
          height,
          width
        };
      }
    }
    control.move = (target, callback) => {
      target.addEventListener("mousemove", e => {
        let originalRect = target.getClientRects()[0];
        let curx = ~~(e.x - originalRect.x);
        let cury = ~~(e.y - originalRect.y);
        callback(e, curx, cury);
      });
    };
    control.click = (target, callback) => {
      target.addEventListener("click", function (e) {
        callback(e);
      });
    };

    class Layout extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-layout',
          observedAttributes: Object.keys(Props$1),
          connectedCallback() {
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, Props$1), this.attrs);
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            context.initView(this);
            context.bindTargetFunc(this, ['reset', 'initView']);
          },
          attributeChangedCallback(...args) {
            if (!this.attrs) return;
            let [k, _o, v] = args;
            if (k == 'iscustom') {
              this.attrs['iscustom'] = v === 'false' || v === false ? false : v === 'true' || v === true ? true : null;
            }
          }
        });
      }
      bindTargetFunc(target, bindl) {
        bindl.map(k => {
          target[k] = (...args) => this[k](target, ...args);
        });
      }
      /** reset */
      reset(target) {
        target.innerHTML = '';
        this.initView(target);
      }
      /** init */
      initView(self) {
        const controlCfg = Object.create(self.attrs);
        const [UI, StyleElement] = initUi([controlCfg.column, controlCfg.row], controlCfg);
        controlCfg.checkCallback = (...args) => {
          var _a;
          (_a = self === null || self === void 0 ? void 0 : self.checkCallback) === null || _a === void 0 ? void 0 : _a.call(self, ...args);
        };
        /** props */
        control(UI, controlCfg, UI.table);
        self.append(UI, StyleElement);
      }
    }
    new Layout();

    const SelectProps = Object.freeze({
      value: ''
    });

    function scrollIntoView(container, selected) {
      if (!selected) {
        container.scrollTop = 0;
        return;
      }
      const offsetParents = [];
      let pointer = selected.offsetParent;
      while (pointer && container !== pointer && container.contains(pointer)) {
        offsetParents.push(pointer);
        pointer = pointer.offsetParent;
      }
      const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
      const bottom = top + selected.offsetHeight;
      const viewRectTop = container.scrollTop;
      const viewRectBottom = viewRectTop + container.clientHeight;
      let scrollTop = null;
      if (top < viewRectTop) {
        scrollTop = top;
      } else if (bottom > viewRectBottom) {
        scrollTop = bottom - container.clientHeight;
      }
      return scrollTop;
    }
    function getScrollTop(target) {
      const scrollParents = [target];
      let pointer = target.parentNode;
      console.time('a');
      while (pointer) {
        scrollParents.push(pointer);
        pointer = pointer.parentNode;
      }
      console.log(scrollParents, 'scrollParents');
      let scroll = scrollParents.reduce((prev, curr) => prev + (curr.scrollTop || 0), 0);
      console.timeEnd('a');
      console.log(scroll);
    }
    globalThis.getScrollTop = getScrollTop;
    globalThis.scrollIntoView = scrollIntoView;
    class Search extends Base {
      constructor() {
        super();
        const context = this;
        defineEl({
          tag: 'sp-select',
          observedAttributes: Object.keys(SelectProps),
          connectedCallback() {
            this.inited = false;
            this.attrs = getProps(this);
            this.attrs = Object.assign(Object.assign({}, SelectProps), this.attrs);
            const that = this;
            this.setAttribute('hidefocus', true);
            this.setAttribute('tabindex', 0);
            this.attrs['prefix'] = 'sp-icon-arrow-up';
            this.attrs['type'] = 'search';
            this.core = new InputCommon({
              root: this,
              callback(args) {
                context.initView(that, args, this);
              }
            });
          },
          attributeChangedCallback(...args) {
            var _a;
            if (!this.inited) return;
            const [k, ov, nv] = args;
            if (k === 'value') {
              let idx = this.downOptions.findIndex(i => i.value == nv);
              if (idx !== -1) {
                let item = (_a = this.drop_down_container_warp_view) === null || _a === void 0 ? void 0 : _a.childNodes[idx - 1];
                this.itemClick(item, item, this.downOptions, idx - 1);
              }
            }
          },
          disconnectedCallback() {
            try {
              this.drop_down_container.remove();
            } catch (_) {}
          }
        });
      }
      initView(root, args, _Common) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
          let {
            ipt,
            prefix,
            suffix,
            allowClear,
            addonBefore,
            showCountEl,
            addonAfter
          } = args;
          /************ drop-down-container ************/
          let downOptions = [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }];
          if (root.downOptions) {
            downOptions = root.downOptions;
          }
          let drop_down_container = createEl('div');
          let drop_down_container_warp = createEl('div');
          let drop_down_container_warp_view = createEl('ul');
          drop_down_container.className = 'sp-drop_down_container';
          drop_down_container_warp.className = 'sp-drop_down_container_warp';
          drop_down_container_warp_view.className = 'sp-drop_down_container_warp_view';
          drop_down_container_warp.append(drop_down_container_warp_view);
          drop_down_container.append(drop_down_container_warp);
          root.drop_down_container_warp_view = drop_down_container_warp_view;
          const itemClick = root.itemClick = (view_item, e, options, index) => {
            var _a;
            drop_down_container_warp_view.childNodes.forEach(item => item.classList.remove('active'));
            view_item.classList.add('active');
            (_a = root === null || root === void 0 ? void 0 : root.change) === null || _a === void 0 ? void 0 : _a.call(root, view_item, e, options[index]);
          };
          // Symbol.asyncIterator
          function* iteratorCreateEvery(_options) {
            const options = _options;
            /** default label */
            const createDefaultItemContent = optionItemData => {
              // drop_down_container_warp_view_item_content
              const view_item_content = createEl('span');
              view_item_content.textContent = optionItemData.label;
              return view_item_content;
            };
            for (let index = 0, length = options.length; index < length;) {
              // drop_down_container_warp_view_item
              const view_item = createEl('li');
              listener(view_item, 'click', e => {
                itemClick(view_item, e, options, index - 1);
              });
              view_item.className = 'sp-drop_down_container_warp_view_item';
              {
                view_item.append(createDefaultItemContent(options[index]));
              }
              yield Promise.resolve(view_item);
              index++;
            }
          }
          try {
            for (var _b = __asyncValues(iteratorCreateEvery(downOptions)), _c; _c = yield _b.next(), !_c.done;) {
              const item = _c.value;
              drop_down_container_warp_view.append(item);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          root.isActive = false;
          // add target class active
          function addActive() {
            prefix.classList.add('active');
            drop_down_container.classList.add('active');
            root.isActive = true;
            let zIndex = setIndex();
            setStyle(drop_down_container, {
              zIndex
            });
            raf();
          }
          function removeActive() {
            prefix.classList.remove('active');
            drop_down_container.classList.remove('active');
            root.isActive = false;
            setIndex(-1);
          }
          // remove target active class
          function removeClick() {
            let p = listener(document.body, 'click', e => {
              removeActive();
              p.remove();
            });
          }
          listener(prefix, 'click', e => {
            e.preventDefault();
            e.stopPropagation();
            root.isActive ? removeActive() : addActive();
            removeClick();
          });
          listener(root, 'click', e => {
            e.preventDefault();
            e.stopPropagation();
            addActive();
            removeClick();
          });
          const setDrop_down_containerPosition = (left = 0, top = 0) => {
            let t = root.getBoundingClientRect();
            setStyle(drop_down_container, {
              left: t.left + left + 'px',
              top: t.top + t.height + top + 'px'
            });
          };
          setDrop_down_containerPosition();
          root.change = (target, e, v) => {
            // e.stopPropagation();
            ipt.value = v.label;
            console.log(v);
          };
          var raf = () => {};
          // document.body.addEventListener('wheel', () => {
          //     setDrop_down_containerPosition();
          // })
          // listener(document.body, 'scroll', (e) => {
          //     setDrop_down_containerPosition
          // })
          // is append document.body
          {
            document.body.append(drop_down_container);
            raf = () => {
              if (root.isActive) {
                setDrop_down_containerPosition();
                window.requestAnimationFrame(raf);
              }
            };
          }
          if (root.attrs.value !== '') {
            let idx = downOptions.findIndex(i => i.value == root.attrs.value);
            if (idx !== -1) {
              let item = drop_down_container_warp_view === null || drop_down_container_warp_view === void 0 ? void 0 : drop_down_container_warp_view.childNodes[idx - 1];
              itemClick(item, item, downOptions, idx - 1);
            }
          }
          root.drop_down_container = drop_down_container;
          //  drop_down_container 默认注入select里， 可以选择注入到body里面去
          root.append(ipt, prefix);
          root.inited = true;
        });
      }
    }
    new Search();

    // import InputCommon from '../input/Common';
    // import { setIndex } from '../common';
    const Tag = 'sp-rate';
    const Props = {
      count: -1,
      character: false,
      half: false,
      total: 5
    };
    // abstract rate
    class AbstractRate extends Base {
      constructor() {
        super();
        this.context = this;
        const context = this;
        defineEl({
          tag: Tag,
          observedAttributes: Object.keys(Props),
          connectedCallback() {
            const that = this;
            that.listeners = Array(0);
            that.className = Tag;
            that.attrs = getProps(that);
            that.attrs = Object.assign(Object.assign({}, Props), that.attrs);
            that.setAttribute('hidefocus', true);
            that.setAttribute('tabindex', 0);
            context.initView(this, that.attrs);
          },
          attributeChangedCallback(...args) {
            // console.log(args);
          },
          disconnectedCallback() {
            this.listeners.forEach(element => {
              var _a;
              return (_a = element.remove) === null || _a === void 0 ? void 0 : _a.call(element);
            });
            this.listeners = Array();
          }
        });
      }
      // fn: define custom "rate"
      getCustomRate(node, idx) {
        const el = createEl('div');
        if (typeof node === 'function') {
          el.innerHTML = node(idx);
          return el;
        }
        if (node.indexOf('sp-icon') > -1) el.className = node;else el.innerHTML = node;
        return el;
      }
      // fn: define default "rate"
      getDefaultRate() {
        var SVG_NS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(SVG_NS, 'svg');
        const path = `
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"> </path>
        `;
        svg.setAttribute('viewBox', "64 64 896 896");
        svg.setAttribute('width', "1em");
        svg.setAttribute('height', "1em");
        svg.setAttribute('fill', "currentColor");
        svg.setAttribute('focusable', "false");
        svg.setAttribute('aria-hidden', "true");
        svg.innerHTML = path;
        return svg;
      }
      createRateItemCore(el) {
        // throw new Error('Method not implemented.');
        let first = el.cloneNode(true);
        let second = el.cloneNode(true);
        first.classList.add('sp-rate-star-first');
        second.classList.add('sp-rate-star-second');
        return [first, second];
      }
      createRateItem(attrs, idx) {
        const li = createEl('li');
        const container = createEl('div');
        li.className = 'sp-rate-star';
        let core_el = attrs.character ? this.getCustomRate(attrs.character, idx) : this.getDefaultRate();
        const childs = li.childs = this.createRateItemCore(core_el);
        container.append(...childs);
        li.append(container);
        return li;
      }
    }
    // entry implementation for "Rate UI design"
    class Rate extends AbstractRate {
      leave(target, activeIndex) {
        for (let i = activeIndex, item = target.children[i]; item !== void 0; i++, item = target.children[i]) {
          // item.children[0].classList.remove('half', 'full');
          item.children[0].className = '';
        }
      }
      setActive(target, classes, length) {
        for (let i = 0; i <= length; i++) {
          if (i === length && classes.indexOf('half') > -1) {
            target.children[i].children[0].className = 'half';
          } else {
            target.children[i].children[0].className = 'full';
          }
        }
      }
      defineMouseMove(isHalf, target, els, idx) {
        // wrapperRaf(() => {
        //     offsetWidth = el.offsetWidth;
        // })
        els.forEach((item, elIdx) => {
          target.listeners.push(listener(item, 'mouseenter', _ => {
            var _a, _b;
            const fullOrHalf = !elIdx ? 'half' : 'full';
            if ((_b = (_a = target).onItemMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, item, fullOrHalf, idx)) return void 0;
            this.leave(target, idx);
            isHalf ? this.setActive(target, fullOrHalf, idx) : this.setActive(target, '', idx);
          }));
          target.listeners.push(listener(item, 'click', _ => {
            var _a, _b;
            if ((_b = (_a = target).onItemClick) === null || _b === void 0 ? void 0 : _b.call(_a, item, elIdx ? 'half' : 'full', idx)) return void 0;
            target.activeIndex = idx;
            target.leaveIsHalf = elIdx;
          }));
        });
      }
      // target.customCount(3.5 || 3); 
      customCount(target, isHalf) {
        const self = this;
        function isInteger(obj) {
          return typeof obj === 'number' && obj % 1 === 0;
        }
        return function (count) {
          // count - 0.5
          const isinteger = isInteger(count);
          const activeIndex = target.activeIndex = ~~(isinteger && !isHalf ? count - 1 : count);
          const leaveIsHalf = target.leaveIsHalf = !isinteger;
          self.leave(target, activeIndex < 0 ? 0 : activeIndex);
          isHalf ? self.setActive(target, leaveIsHalf ? 'half' : '', activeIndex) : self.setActive(target, '', activeIndex);
        };
      }
      initView(target, attrs) {
        const isHalf = attrs.half === 'true' ? true : false;
        const count = +attrs.count;
        const total = +attrs.total;
        target.listeners.push(listener(target, 'mouseleave', () => {
          var _a, _b, _c;
          let activeIndex = (_a = target.activeIndex) !== null && _a !== void 0 ? _a : -1;
          this.leave(target, activeIndex < 0 ? 0 : activeIndex);
          const fullOrHalf = !target.leaveIsHalf ? 'half' : 'full';
          isHalf ? this.setActive(target, fullOrHalf, activeIndex) : this.setActive(target, '', activeIndex);
          (_c = (_b = target).onMouseLeave) === null || _c === void 0 ? void 0 : _c.call(_b, fullOrHalf, activeIndex);
        }));
        target.customCount = this.customCount.call(this, target, isHalf);
        let appendRateContainer = Array(total).fill(0).map((_, idx) => {
          let el = this.createRateItem(attrs, idx);
          this.defineMouseMove(isHalf, target, el.childs, idx);
          return el;
        });
        wrapperRaf(() => target.customCount(count));
        target.append(...appendRateContainer);
      }
    }
    /**
     * @emaple
          <SpRate count={count} character="⬇" half={true}></SpRate>
     *
     */
    new Rate();
    // function wrapperRaf(arg0: () => void) {
    //     throw new Error('Function not implemented.');
    // }
    // function getSize() {
    // }
    // type GetsizeProps = {callback(k: string): any}// & ThisType<Getsize>;
    // class Getsize {
    //     size = 10
    //     constructor(public props: GetsizeProps) {
    //         // props.callback.bind(this)
    //         // props.callback('')
    //     }
    // }
    // new Getsize({
    //     callback(p: string) {
    //         // this.size
    //     //   return this
    //         // console.log(this)
    //         // this
    //     }
    // })
    // type ThisParameterType<T> = T extends (this: unknown, ...args: any[]) => any
    //   T extends (this: infer U, ...args: any[]) => any
    //   ? U
    //   : unknow

    /// 这里引用 和 抛出组件
    // 打包ui时候关闭下面这些代码，打包site时候打开这个定制代码。
    // import './custom-tc-brands';
    const Spui = {
      Modal,
      Message,
      Loading,
      Notify
    };
    getGlobalThis().Spui = Spui;

    exports.Loading = Loading;
    exports.Message = Message;
    exports.Modal = Modal;
    exports.Notify = Notify;
    exports["default"] = Spui;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=spui-umd.js.map
