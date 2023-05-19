class GlobalOrAction {

  _zIndex = 1;
  _openGlobalMarkCount = 3;

  get zIndex() {
    this._zIndex++;
    return this._zIndex;
  }

  get GlobalMarkEl(): HTMLElement | null {
    return document.getElementById('global-mark')
  }

  getCurrentMarkOpactiy() {
    if (this._openGlobalMarkCount >= 9) return '0.9';
    return this._openGlobalMarkCount / 10 + '';
  }

  openGlobalMark() {
    if (!this.GlobalMarkEl) throw Error('没有找到元素')
    this._openGlobalMarkCount++;
    this.GlobalMarkEl.style.display = 'block';
    this.GlobalMarkEl.style.zIndex = this._zIndex - 1 + '';
    this.GlobalMarkEl.style.opacity = this.getCurrentMarkOpactiy();
  }

  closeGlobalMark() {
    if (!this.GlobalMarkEl) throw Error('没有找到元素')
    this.GlobalMarkEl.style.display = 'none';
    this.GlobalMarkEl.style.zIndex = this._zIndex - 1 + '';
    this._openGlobalMarkCount--
  }

}

export default GlobalOrAction;