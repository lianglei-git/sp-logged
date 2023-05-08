class RenderState {
    public lineWidth: number = 1;                //默认情况下，lineWidth为1
    public strokeStyle: string = 'red';         //默认情况下，描边状态为红色
    public fillStyle: string = 'green';         //默认情况下，填充状态为绿色
    // 克隆当前的RenderState并返回
    public clone(): RenderState {
        let state: RenderState = new RenderState();
        state.lineWidth = this.lineWidth;
        state.strokeStyle = this.strokeStyle;
        state.fillStyle = this.fillStyle;
        return state;
    }
    // 调用JOSN的静态方法stringify，将this对象序列化成JSON字符串
    // 实现toString方法，用来debug打印相关信息
    public toString(): string {
        return JSON.stringify(this, null, ' ');
    }
}

class RenderStateStack {
    // 初始化情况下，堆栈中有一个渲染状态对象，并且所有状态值都是默认值
    private _stack: RenderState[] = [new RenderState()];
    // 关键的私有get辅助属性，获取堆栈栈顶的渲染状态
    private get _currentState(): RenderState {
        // 栈顶就是数组的最后一个元素
        return this._stack[this._stack.length - 1];
    }
    // save其实就是克隆栈顶的元素，然后将克隆返回的元素进栈操作
    public save(): void {
        this._stack.push(this._currentState.clone());
    }
    // restore就是将栈顶元素丢弃，此时状态会恢复到上一个状态
    public restore(): void {
        this._stack.pop();
    }
    // 下面几个读写属性，都是操作的栈顶元素
    public get lineWidth(): number {
        return this._currentState.lineWidth;
    }
    public set lineWidth(value: number) {
        this._currentState.lineWidth = value;
    }
    public get strokeStyle(): string {
        return this._currentState.strokeStyle;
    }
    public set strokeStyle(value: string) {
        this._currentState.strokeStyle = value;
    }
    public get fillStyle(): string {
        return this._currentState.strokeStyle;
    }
    public set fillStyle(value: string) {
        this._currentState.strokeStyle = value;
    }
    // 辅助方法，用来打印栈顶元素的状态值
    public printCurrentStateInfo(): void {
        console.log(this._currentState.toString());
    }
}

export {
    RenderStateStack,
    RenderState
}