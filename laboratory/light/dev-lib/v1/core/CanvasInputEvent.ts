
// CanvasKeyboardEvent和CanvasMouseEvent都继承自本类
// 基类定义了共同的属性，keyboard或mouse事件都能使用组合键
// 例如可以按住Ctrl键的同时单击鼠标左键做某些事情
// 当然也可以按住Alt + A键做另外一些事情
export class CanvasInputEvent {
    // 3个boolean变量，用来指示Alt、Ctrl、Shift键是否被按下
    public altKey: boolean;
    public ctrlKey: boolean;
    public shiftKey: boolean;
    // type是一个枚举对象，用来表示当前的事件类型，枚举类型定义在下面的代码中
    public type: EInputEventType;
    // 构造函数，使用了default参数，初始化时3个组合键都是false状态
    public constructor(
        altKey: boolean = false,
        ctrlKey: boolean = false,
        shiftKey: boolean = false,
        type: EInputEventType = EInputEventType.MOUSEEVENT) {

        this.altKey = altKey;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.type = type;
    }
}

export enum EInputEventType {
    MOUSEEVENT,                                  //总类，表示鼠标事件
    MOUSEDOWN,                                   //鼠标按下事件
    MOUSEUP,                                     //鼠标弹起事件
    MOUSEMOVE,                                   //鼠标移动事件
    MOUSEDRAG,                                   //鼠标拖动事件
    KEYBOARDEVENT,                               //总类，表示键盘事件
    KEYUP,                                       //键按下事件
    KEYDOWN,                                     //键弹起事件
    KEYPRESS                                      //按键事件
};

// export type vec2 = {
//     x: number
//     y: number
// }
// export const vec2 = {
//     create(x:number = 0,y: number = 0) {
//         return {x,y}
//     }
// }