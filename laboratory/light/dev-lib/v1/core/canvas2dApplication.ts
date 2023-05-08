import { Application, Rectangle, Size, vec2 } from './index';

// Canvas2D中TextAlign用于设置文字左右如何对齐，默认情况下是start
type TextAlign = 'start' | 'left' | 'center' | 'right' | 'end';
// Canvas2D中TextBaseline用于设置当前绘制文本的基线，默认情况下是alphabetic
// 可以认为用来设置文字是如何对齐的
type TextBaseline = 'alphabetic' | 'hanging' | 'top' | 'middle' | 'bottom';

// CSS规范，应该支持如下3个选项
// normal是默认值，其他两个值表示斜体
type FontStyle = "normal" | "italic" | "oblique";
// CSS规范，目前只有如下两个选项
type FontVariant = "normal" | "small-caps";
// CSS规范，应该支持normal | bold | bolder | lighter | 100 | 200 | 300 | 400| 500 | 600 | 700 | 800 | 900
type FontWeight = "normal" | "bold" | "bolder" | "lighter" | "100" | "200"
    | "300" | "400" | "500" | "600" | "700" | "800" | "900";
// 前面4个px预先设定，后面使用名字方式表达字体大小，也可以设置其他的px值
// CSS规范，可以设置像素值 | 百分比值 | 名字值
type FontSize = "10px" | "12px" | "16px" | "18px" | "24px" | "50%" | "75%"
    | "100%" | "125%" | "150%" | "xx-small" | "x-small" | "small" | "medium"
    | "large" | "x-large" | "xx-large";
// CSS规定了如下5种通用字体系列
type FontFamily = "sans-serif" | "serif" | "courier" | "fantasy" |
    "monospace";
// 字体大小和字体类型，默认情况下是10px sans-serif
// 设置15px和20px及25px大小的字体，后续代码会使用
// 利用VS Code智能感知功能，减少输入和拼写错误
type FontType = "10px sans-serif" | "15px sans-serif" | "20px sans-serif"
    | "25px sans-serif";

export enum ELayout {
    LEFT_TOP,
    RIGHT_TOP,
    RIGHT_BOTTOM,
    LEFT_BOTTOM,
    CENTER_MIDDLE,
    CENTER_TOP,
    RIGHT_MIDDLE,
    CENTER_BOTTOM,
    LEFT_MIDDLE
}

export enum EImageFillType {
    STRETCH,        // 拉伸模式
    REPEAT,         // xy重复填充模式
    REPEAT_X,       // x方向重复填充模式
    REPEAT_Y         // y方向重复填充模式
}
export class Canvas2DApplication extends Application {

    public context2D: CanvasRenderingContext2D | null;
    public constructor(canvas: HTMLCanvasElement, contextAttributes?:
        CanvasRenderingContext2DSettings) {
        super(canvas);
        this.context2D = this.canvas.getContext("2d", contextAttributes);
    }

    public clearRect() {
        this.context2D?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    // public render(): void {
    //     if (this.context2D !== null) {
    //         this.context2D.clearRect(0, 0, this.context2D.canvas.width, this.context2D.canvas.height)
    //     }
    // }


    // 和以前的绘制方法相比，strokeLine比较特别
    // 没有进行状态的save / restore操作
    // 也没有任何的修改渲染属性
    // 纯粹stroke操作
    // 这是因为这个方法被其他方法多次调用，由调用方进行状态管理和状态设置
    //（参考strokeCoord和strokeGrid方法）
    // 要记住本方法并没有进行状态管理和状态修改
    public strokeLine(x0: number, y0: number, x1: number, y1: number): void {
        if (this.context2D !== null) {
            // 一定要调用beginPath方法
            this.context2D.beginPath();
            this.context2D.moveTo(x0, y0);
            this.context2D.lineTo(x1, y1);
            this.context2D.stroke();
        }
    }
    /** 坐标轴 */
    public strokeCoord(orginX: number, orginY: number, width: number, height: number): void {
        if (this.context2D !== null) {
            this.context2D.save();
            // 红色为x轴
            this.context2D.strokeStyle = 'red';
            this.strokeLine(orginX, orginY, orginX + width, orginY);
            // 蓝色为y轴
            this.context2D.strokeStyle = 'blue';
            this.strokeLine(orginX, orginY, orginX, orginY + height);
            this.context2D.restore();
        }
    }
    /** 矩形边框 */
    public strokeRect(x: number, y: number, w: number, h: number, style: string | CanvasGradient | CanvasPattern = 'red'): void {
        if (this.context2D !== null) {
            this.context2D.save();
            this.context2D.strokeStyle = style;
            this.context2D.strokeRect(x, y, w, h);
            this.context2D.restore();
        }
    }

    /** 铺满矩形 */
    public fillRect(x: number, y: number, w: number, h: number, style: string | CanvasGradient | CanvasPattern = 'red'): void {
        if (this.context2D !== null) {
            this.context2D.save();
            this.context2D.fillStyle = style;
            this.context2D.fillRect(x, y, w, h);
            this.context2D.restore();
        }
    }

    // grid绘制的区域为整个canvas的大小
    // 其中参数interval控制每个网格横向和纵向的间隔大小
    public strokeGrid(color: string = 'grey', interval: number = 10): void {
        if (this.context2D !== null) {
            this.context2D.save();
            this.context2D.strokeStyle = color;
            this.context2D.lineWidth = 0.5;
            // 从左到右每隔interval个像素画一条垂直线
            for (let i: number = interval + 0.5; i < this.canvas.width; i += interval) {
                this.strokeLine(i, 0, i, this.canvas.height);
            }

            // 从上到下每隔interval个像素画一条水平线
            for (let i: number = interval + 0.5; i < this.canvas.height;
                i += interval) {
                this.strokeLine(0, i, this.canvas.width, i);
            }
            this.context2D.restore();

            // 绘制网格背景全局坐标系的原点
            this.fillCircle(5, 5, 5, 'green');
            // 为网格背景绘制全局坐标系
            // Canvas中全局坐标系的原点在左上角，并且x轴总是指向右侧，y轴指向下方
            // 全局坐标系永远不会变换，总是固定的
            this.strokeCoord(5, 5, this.canvas.width, this.canvas.height);
        }
    }

    //在坐标[ x , y ]处绘制半径为radius的圆，可以使用指定的style来填充（颜色、渐变色或图案）
    public fillCircle(x: number, y: number, radius: number, fillStyle: string | CanvasGradient | CanvasPattern = 'red'): void {
        if (this.context2D !== null) {
            //流程
            this.context2D.save();
            this.context2D.fillStyle = fillStyle;
            this.context2D.beginPath();
            // 圆是圆弧的特殊表现形式[startAngle = 0 , endAngle = 2 * Math . PI ]
            this.context2D.arc(x, y, radius, 0, Math.PI * 2);
            //只是使用fill，如要用stroke，请设置strokeStyle属性和调用stroke方法
            this.context2D.fill();
            //流程
            this.context2D.restore();
        }
    }

    /** 绘制圆形 轮廓 */
    public strokeCircle(x: number, y: number, radius: number, fillStyle: string | CanvasGradient | CanvasPattern = 'red'): void {
        if (this.context2D !== null) {
            //流程
            this.context2D.save();
            this.context2D.fillStyle = fillStyle;
            this.context2D.beginPath();
            // 圆是圆弧的特殊表现形式[startAngle = 0 , endAngle = 2 * Math . PI ]
            this.context2D.arc(x, y, radius, 0, Math.PI * 2);
            //只是使用fill，如要用stroke，请设置strokeStyle属性和调用stroke方法
            this.context2D.stroke();
            //流程
            this.context2D.restore();
        }
    }


    // 填充文字
    public fillText(text: string, x: number, y: number, color: string =
        'white', align: TextAlign = 'left', baseline: TextBaseline = 'top',
        font: FontType = '10px sans-serif'): void {
        if (this.context2D !== null) {
            this.context2D.save();                  //管理渲染属性经典模式
            this.context2D.textAlign = align;
            //文字左右对齐方式，类型为TextAlign
            this.context2D.textBaseline = baseline;
            //文字上下对齐方式，类型为TextBaseline
            this.context2D.font = font;          //使用哪种字体，多少大小绘制
            this.context2D.fillStyle = color;   //文字填充的颜色
            this.context2D.fillText(text, x, y);
            //调用fillText()函数，指定文字要绘制的坐标
            this.context2D.restore();              //状态恢复
        }
    }


    // 1．本方法并没有使用本类中的任何成员变量或成员方法，因此可以声明为static方法，当然也可以定义为实例方法
    // 2.css font属性字符串中每个属性都是有先后顺序之分的，因此编写此方法，内部会使用正确的属性字符串合成顺序，减少错误
    // 3．按照笔者认为最常用的频度来声明参数的顺序，但是内部生成字符串时会按照正确的属性顺序来合成
    public makeFontString(
        size: FontSize = '10px',
        weight: FontWeight = 'normal',
        style: FontStyle = 'normal',
        variant: FontVariant = 'normal',
        family: FontFamily = 'sans-serif',
    ): string {
        let strs: string[] = [];
        // 第一个是fontStyle
        strs.push(style);
        // 第二个是fontVariant
        strs.push(variant);
        // 第三个是fontWeight
        strs.push(weight);
        // 第四个是fontSize
        strs.push(size);
        // 第五个是fontFamily
        strs.push(family);
        // 最后需要将数组中的每个属性字符串以空格键合成
        // 使用Array对象的join方法，其参数是空格字符串：" "
        let ret: string = strs.join(" ");
        console.log(ret);
        return ret;
    }

    public drawImage(img: HTMLImageElement | HTMLCanvasElement, destRect?: Rectangle, srcRect: Rectangle = Rectangle.create(0, 0, img.width, img.height), fillType:
        EImageFillType = EImageFillType.STRETCH): boolean {
        // 绘制image要满足一些条件
        if (this.context2D === null) {
            return false;
        }
        // 默认绘制
        if (!destRect) {
            this.context2D.drawImage(img, 0, 0)
            return true;
        }
        if (srcRect.isEmpty()) {
            return false;
        }
        if (destRect.isEmpty()) {
            return false;
        }
        // 分为stretch和repeat两种方式
        if (fillType === EImageFillType.STRETCH) {
            this.context2D.drawImage(img,
                srcRect.origin.x,
                srcRect.origin.y,
                srcRect.size.width,
                srcRect.size.height,
                destRect.origin.x,
                destRect.origin.y,
                destRect.size.width,
                destRect.size.height
            );
        } else { // 使用repeat模式
            // 测试使用，绘制出目标区域的大小
            // this.fillRectangleWithColor(destRect, 'grey');
            // 调用Math . ceil方法，ceil是天花板的意思，向上升级，例如1.3会变成整数
            // 然而Math . floor方法，floor是地板的意思，向下降级，例如1.3会变成整数
            // 2, 2.1会变成整数3
            // 1, 2.1会变成整数2
            // 还有Math . round方法，该方法则是四舍五入，例如1.3变成1，而1.8会变成2
            // 计算x轴方向（左右）需要填充的图像的数量，使用ceil向上升级
            let rows: number = Math.ceil(destRect.size.width / srcRect.
                size.width);
            // 计算y轴方向（上下）需要填充的图像的数量，使用ceil向上升级
            let colums: number = Math.ceil(destRect.size.height / srcRect.
                size.height);
            // 下面6个变量在行列双重循环中每次都会更新
            // 表示的是当前要绘制的区域的位置与尺寸
            let left: number = 0;
            let top: number = 0;
            let right: number = 0;
            let bottom: number = 0;
            let width: number = 0;
            let height: number = 0;
            // 计算出目标Rectangle的right和bottom坐标
            let destRight: number = destRect.origin.x + destRect.size.
                width;
            let destBottom: number = destRect.origin.y + destRect.size.
                height;
            // REPEAT_X和REPEAT_Y是REPEAT的一种特殊形式
            if (fillType === EImageFillType.REPEAT_X) {
                colums = 1;  // 如果是重复填充x轴，则让y轴列数设置为1
            } else if (fillType === EImageFillType.REPEAT_Y) {
                rows = 1; // 如果是重复填充y轴，则让x轴行数设置为1
            }
            for (let i: number = 0; i < rows; i++) {
                for (let j: number = 0; j < colums; j++) {
                    // 如何计算第i行第j列的坐标
                    left = destRect.origin.x + i * srcRect.size.width;
                    top = destRect.origin.y + j * srcRect.size.height;
                    width = srcRect.size.width;
                    height = srcRect.size.height;

                    // 计算出当前要绘制的区域的右下坐标
                    right = left + width;
                    bottom = top + height;
                    // 参见图4.19
                    // 计算x轴方向（左右）剩余灰色部分的尺寸的算法
                    if (right > destRight) {
                        width = srcRect.size.width - (right - destRight);
                    }
                    // 参见图4.19
                    // 计算y轴方向（上下）剩余灰色部分的尺寸的算法
                    if (bottom > destBottom) {
                        height = srcRect.size.height - (bottom - destBottom);
                    }
                    // 调用Canvas2D的drawImage方法

                    this.context2D.drawImage(img,
                        srcRect.origin.x,
                        srcRect.origin.y,
                        width,
                        height,
                        left, top, width, height
                    );
                }
            }
        }
        return true;
    }

    public setShadowState(shadowBlur: number = 5, shadowColor: string =
        "rgba( 127 , 127 , 127 , 0.5 )", shadowOffsetX: number = 10, shadowOffsetY:
            number = 10): void {
        if (this.context2D !== null) {
            this.context2D.shadowBlur = shadowBlur;
            this.context2D.shadowColor = shadowColor;
            this.context2D.shadowOffsetX = shadowOffsetX;
            this.context2D.shadowOffsetY = shadowOffsetY;
        }
    }

    /** 绘制矩形 title中心显示 */
    public fillRectWithTitle(
        x: number, y: number,
        width: number, height: number,
        title: string = '', layout: ELayout = ELayout.CENTER_MIDDLE,
        color: string = 'grey', showCoord: boolean = true): void {
        if (this.context2D !== null) {

            this.context2D.save();
            // 1. 绘制矩形
            this.context2D.fillStyle = color;
            this.context2D.beginPath();
            this.context2D.rect(x, y, width, height);
            this.context2D.fill();
            // 如果有文字的话，先根据枚举值计算x、y坐标
            if (title.length !== 0) {
                // 2. 绘制文字信息
                // 在矩形的左上角绘制出相关文字信息，使用的是10px大小的文字
                // 调用calcLocalTextRectangle方法
                let rect: Rectangle = this.calcLocalTextRectangle(layout, title, width, height);
                // 修改样式
                // const font: string = this.makeFontString('18px', 'bold', 'italic', 'small-caps', 'sans-serif')
                // 绘制文本
                this.fillText(title, x + rect.origin.x, y + rect.origin.y, 'white', 'left', 'top', '10px sans-serif');
                // 绘制文本框
                this.strokeRect(x + rect.origin.x, y + rect.origin.y, rect.size.width, rect.size.height, 'rgba( 0 , 0 ,0, 0.5) ');
                // 绘制文本框左上角坐标（相对父矩形表示）
                this.fillCircle(x + rect.origin.x, y + rect.origin.y, 2);
            }
            // 3. 绘制变换的局部坐标系
            // 附加一个坐标，x轴和y轴比矩形的width和height多20个像素
            // 并且绘制3个像素的原点
            if (showCoord) {
                this.strokeCoord(x, y, width + 20, height + 20);
                this.fillCircle(x, y, 3);
            }
            this.context2D.restore();
        }
    }

    // parentWidth / parentHeight是父矩形的尺寸
    // 函数返回类型是Rectangle，表示9个文本子矩形之一
    // 这些子矩形是相对父矩形坐标系的表示
    // 这意味着父矩形原点为[0 , 0]，所以参数是父矩形的width和height，而没有x和y坐标
    public calcLocalTextRectangle(layout: ELayout, text: string, parentWidth: number, parentHeight: number): Rectangle {
        // 首先计算出要绘制的文本的尺寸（width / hegiht）
        let s: Size = this.calcTextSize(text);
        // 创建一个二维向量
        let o: vec2 = vec2.create();
        // 计算出当前文本子矩形左上角相对父矩形空间中的3个关键点（左上、中心、右下）坐标
        // 1．当前文本子矩形左上角相对父矩形左上角坐标，由于局部表示，所以为[ 0 , 0 ]
        let left: number = 0;
        let top: number = 0;
        // 2．当前文本子矩形左上角相对父矩形右下角坐标
        let right: number = parentWidth - s.width;
        let bottom: number = parentHeight - s.height;
        // 3．当前文本子矩形左上角相对父矩形中心点坐标
        let center: number = right * 0.5;
        let middle: number = bottom * 0.5;
        // 计算子矩形相对父矩形原点[ 0 , 0 ]偏移量
        switch (layout) {
            case ELayout.LEFT_TOP:
                o.x = left;
                o.y = top;
                break;
            case ELayout.RIGHT_TOP:
                o.x = right;
                o.y = top;
                break;
            case ELayout.RIGHT_BOTTOM:
                o.x = right;
                o.y = bottom;
                break;
            case ELayout.LEFT_BOTTOM:
                o.x = left;
                o.y = bottom;
                break;
            case ELayout.CENTER_MIDDLE:
                o.x = center;
                o.y = middle;
                break;
            case ELayout.CENTER_TOP:
                o.x = center;
                o.y = 0;
                break;
            case ELayout.RIGHT_MIDDLE:
                o.x = right;
                o.y = middle;
                break;
            case ELayout.CENTER_BOTTOM:
                o.x = center;
                o.y = bottom;
                break;
            case ELayout.LEFT_MIDDLE:
                o.x = left;
                o.y = middle;
                break;
        }
        // 返回子矩形
        return new Rectangle(o, s);
    }

    // 笔者测试大小写26个英文字母后（10px sans-serif默认字体）
    // 决定使用大写W的宽度加上scale为0.5作为行高计算的要点（默认参数）
    // 其他字体或字体尺寸请自行做实验
    public calcTextSize(text: string, char: string = 'W', scale: number = 0.5): Size {
        if (this.context2D !== null) {
            let size: Size = new Size();
            size.width = this.context2D.measureText(text).width;
            let w: number = this.context2D.measureText(char).width;
            size.height = w + w * scale; // 宽度上加scale比例
            return size;
        }
        // 直接报错
        alert(" context2D渲染上下文为null ");
        throw new Error(" context2D渲染上下文为null ");
    }


    /** fillRectWithTitle加强版本 */
    public fillLocalRectWithTitle(
        width: number,                              //要绘制的矩形宽度
        height: number,                             //要绘制的矩形高度
        title: string = '',                         //矩形中显示的字符串
        referencePt: ELayout = ELayout.CENTER_MIDDLE,
        //坐标系原点位置，默认居中
        layout: ELayout = ELayout.CENTER_MIDDLE,
        //文字框位置，默认居中绘制文本
        color: string = 'grey',                   //要绘制矩形的填充颜色
        showCoord: boolean = true
        //是否显示局部坐标系，默认为显示局部坐标系
    ): void {
        if (this.context2D !== null) {
            let x: number = 0;
            let y: number = 0;
            // 首先根据referencePt的值计算原点相对左上角的偏移量
            // Canvas2D中，左上角是默认的坐标系原点，所有原点变换都是相对左上角的偏移
            switch (referencePt) {
                case ELayout.LEFT_TOP:      //Canvas2D中，默认是左上角为坐标系原点
                    x = 0;
                    y = 0;
                    break;
                case ELayout.LEFT_MIDDLE:                //左中为原点
                    x = 0;
                    y = -height * 0.5;
                    break;
                case ELayout.LEFT_BOTTOM:               //左下为原点
                    x = 0;
                    y = -height;
                    break;
                case ELayout.RIGHT_TOP:                  //右上为原点
                    x = -width;
                    y = 0;
                    break;
                case ELayout.RIGHT_MIDDLE:               //右中为原点
                    x = -width;
                    y = -height * 0.5;
                    break;
                case ELayout.RIGHT_BOTTOM:               //右下为原点
                    x = -width;
                    y = -height;
                    break;
                case ELayout.CENTER_TOP:                //中上为原点
                    x = -width * 0.5;
                    y = 0;
                    break;
                case ELayout.CENTER_MIDDLE:              //中中为原点
                    x = -width * 0.5;
                    y = -height * 0.5;
                    break;
                case ELayout.CENTER_BOTTOM:             //中下为原点
                    x = -width * 0.5;
                    y = -height;
                    break;
            }
            // 下面的代码和上一章实现的fillRectWithTitle一样
            this.context2D.save();
            // 1. 绘制矩形
            this.context2D.fillStyle = color;
            this.context2D.beginPath();
            this.context2D.rect(x, y, width, height);
            this.context2D.fill();
            // 如果有文字，先根据枚举值计算x, y坐标
            if (title.length !== 0) {
                // 2. 绘制文字信息
                // 在矩形的左上角绘制出相关文字信息，使用的是10px大小的文字
                let rect: Rectangle = this.calcLocalTextRectangle(layout, title, width, height);
                // 绘制文本
                this.fillText(title, x + rect.origin.x, y + rect.origin.
                    y, 'white', 'left', 'top' /*, '10px sans-serif'*/);
                // 绘制文本框
                this.strokeRect(x + rect.origin.x, y + rect.origin.
                    y, rect.size.width, rect.size.height, 'rgba( 0 , 0 ,0, 0.5) ');
                // 绘制文本框左上角坐标（相对父矩形表示）
                this.fillCircle(x + rect.origin.x, y + rect.origin.
                    y, 2);
            }
            // 3. 绘制变换的局部坐标系，局部坐标原点总是为[ 0 , 0 ]
            // 附加一个坐标，x轴和y轴比矩形的width和height多20像素
            // 并且绘制3像素的原点
            if (showCoord) {
                this.strokeCoord(0, 0, width + 20, height + 20);
                this.fillCircle(0, 0, 3);
            }
            this.context2D.restore();
        }
    }


    // fillLocalRectWithTitle 加强版
    public fillLocalRectWithTitleUV(
        width: number, height: number,                     //矩形尺寸
        title: string = '',                                     //矩形显示的文字内容
        u: number = 0, v: number = 0,
        //这里使用u和v参数代替原来的ELayout枚举
        layout: ELayout = ELayout.CENTER_MIDDLE,         //文字框的对齐方式
        color: string = 'grey',                                //矩形填充颜色
        showCoord: boolean = true       // 是否显示局部坐标系，默认显示
    ): void {
        if (this.context2D !== null) {
            // 将原来的fillLocalRectWithTitle方法中的ELayout 9种处理方式的代码替换
            // 成如下代码：
            let x: number = -width * u;
            let y: number = -height * v;
            // 和fillLocalRectWithTitle中的绘制代码一样
            // 下面的代码和上一章实现的fillRectWithTitle一样
            this.context2D.save();
            // 1. 绘制矩形
            this.context2D.fillStyle = color;
            this.context2D.beginPath();
            this.context2D.rect(x, y, width, height);
            this.context2D.fill();
            // 如果有文字，先根据枚举值计算x, y坐标
            if (title.length !== 0) {
                // 2. 绘制文字信息
                // 在矩形的左上角绘制出相关文字信息，使用的是10px大小的文字
                let rect: Rectangle = this.calcLocalTextRectangle(layout, title, width, height);
                // 绘制文本
                this.fillText(title, x + rect.origin.x, y + rect.origin.
                    y, 'white', 'left', 'top' /*, '10px sans-serif'*/);
                // 绘制文本框
                this.strokeRect(x + rect.origin.x, y + rect.origin.
                    y, rect.size.width, rect.size.height, 'rgba( 0 , 0 ,0, 0.5) ');
                // 绘制文本框左上角坐标（相对父矩形表示）
                this.fillCircle(x + rect.origin.x, y + rect.origin.
                    y, 2);
            }
            // 3. 绘制变换的局部坐标系，局部坐标原点总是为[ 0 , 0 ]
            // 附加一个坐标，x轴和y轴比矩形的width和height多20像素
            // 并且绘制3像素的原点
            if (showCoord) {
                this.strokeCoord(0, 0, width + 20, height + 20);
                this.fillCircle(0, 0, 3);
            }
            this.context2D.restore();
        }
    }
}
