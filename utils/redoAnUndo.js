class RedoAnUndo {
    stack = [];
    index = -1;
    maxStep = 20;

    get size() {
      return this.stack.length;
    }

    push(d) {
      this.stack.push(d);
    }

    pop() {
      this.stack.pop();
    }

    unshift() {
      this.stack.unshift();
    }

    shift() {
      this.stack.shift();
    }

    /**
     * 边界限制
     */
    boundary() {
      if (this.size >= this.maxStep) {
        this.shift();
        this.index -= 1;
      }
    }

    /**
     * 添加任务
     * @returns item
     */
    takeTask(d) {
      this.stack.splice(this.index + 1, this.size);
      this.index++;
      this.boundary();
      this.push(d);
    }

    /**
     * 撤回
     * @returns item
     */
    undo() {
      if (this.index <= 0) return;
      this.index--;
      const c = this.stack[this.index];
      return c;
    }

    /**
     * 回退
     * @returns item
     */
    redo() {
      if (this.index >= this.size - 1) return;
      this.index++;
      const c = this.stack[this.index];
      return c;
    }
}

module.exports = RedoAnUndo;
