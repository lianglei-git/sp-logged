const EPSILON = 0.00001

// 二维向量
export class vec2 {
    // 使用float32Array强类型数组，不需要进行引用类型到值类型，以及值类型到引用类
    //型的转换，效率比较高
    public values: Float32Array;
    // 构造函数
    public constructor(x: number = 0, y: number = 0) {
        this.values = new Float32Array([x, y]);
    }

    // 静态的create方法
    public static create(x: number = 0, y: number = 0): vec2 {
        return new vec2(x, y);
    }
    // 复制当前的向量到result
    public static copy(src: vec2, result: vec2 | null = null): vec2 {
        if (result === null) result = new vec2();
        result.values[0] = src.values[0];
        result.values[1] = src.values[1];
        return result;
    }
    // 为了debug输出，override toString方法
    // 当调用例如console . log方法时，会自动调用如下定义的toString方法
    public toString(): string {
        return " [ " + this.values[0] + " , " + this.values[1] +
            " ] ";
    }
    // 方便地x和y读写操作
    public get x(): number { return this.values[0]; }
    public set x(x: number) { this.values[0] = x; }
    public get y(): number { return this.values[1]; }
    public set y(y: number) { this.values[1] = y; }
    // 为了重用向量，有时需要重置向量的x , y值
    public reset(x: number = 0, y: number = 0): vec2 {
        this.values[0] = x;
        this.values[1] = y;
        return this;
    }
    public isEmpty() {
        return this.x == undefined || this.y == undefined;
    }
    // 为了避免浮点数误差，使用EPSILON进行容差处理，默认情况下为0.00001
    public equals(vector: vec2): boolean {
        if (Math.abs(this.values[0] - vector.values[0]) > EPSILON)
            return false;
        if (Math.abs(this.values[1] - vector.values[1]) > EPSILON)
            return false;
        return true;
    }

    // 返回没有开根号的向量大小
    public get squaredLength(): number {
        let x = this.values[0];
        let y = this.values[1];
        return (x * x + y * y);
    }
    // 返回真正的向量大小
    public get length(): number {
        return Math.sqrt(this.squaredLength);
    }
    // 调用本方法后会在内部修改当前向量的x和y值，修改后的向量大小为1.0（单位向量或叫
    // 方向向量），并返回未修改前向量的大小
    public normalize(): number {
        // 计算出向量的大小
        let len: number = this.length;
        // 对0向量的判断与处理
        if (Math2D.isEquals(len, 0)) {
            // alert( "长度为0，并非方向向量！! ! " ) ;
            console.log(" the length = 0 ");
            this.values[0] = 0;
            this.values[1] = 0;
            return 0;
        }
        // 如果已经是单位向量，直接返回1.0
        if (Math2D.isEquals(len, 1)) {
            console.log(" the length = 1 ");
            return 1.0;
        }

        // 否则计算出单位向量（也就是方向）
        this.values[0] /= len;
        this.values[1] /= len;

        // 同时返回向量的大小
        return len;
    }

    public static xAxis = new vec2(1, 0);
    public static yAxis = new vec2(0, 1);
    public static nXAxis = new vec2(-1, 0);
    public static nYAxis = new vec2(0, -1);


    // 公开静态方法
    public static sum(left: vec2, right: vec2, result: vec2 | null = null): vec2 {
        // 如果输出参数result为null，则分配内存给result变量
        if (result === null) result = new vec2();
        // x和y分量分别相加，结果仍旧是一个向量
        result.values[0] = left.values[0] + right.values[0];
        result.values[1] = left.values[1] + right.values[1];
        // 返回相加后的向量result
        return result;
    }
    // vec2类的公开实例方法：加
    public add(right: vec2): vec2 {
        // this + right = this
        // 会修改this的x和y分量
        // 不需要重新分配内存空间，效率相对较高
        vec2.sum(this, right, this);
        return this;
    }

    // 公开静态方法：差
    public static difference(end: vec2, start: vec2, result: vec2 | null
        = null): vec2 {
        // 如果输出参数result为null，则分配内存给result变量
        if (result === null) result = new vec2();
        // x和y分量分别相减，结果仍旧是一个向量
        result.values[0] = end.values[0] - start.values[0];
        result.values[1] = end.values[1] - start.values[1];
        return result;
    }
    // vec2类的实例方法：减
    public substract(another: vec2): vec2 {
        // this - right = this
        // 会修改this的x和y分量
        // 不需要重新分配内存空间，效率相对较高
        vec2.difference(this, another, this);
        return this;
    }

    // 会修改this向量的两个分量，返回的是修改后的向量：this指针
    public negative(): vec2 {
        this.values[0] = - this.values[0];
        this.values[1] = - this.values[1];
        return this;
    }

    // 向量与标量相乘
    // 向量与标量相乘的本质是缩放向量，因此实现的静态方法名为scale
    public static scale(direction: vec2, scalar: number, result: vec2 |
        null = null): vec2 {
        if (result === null) result = new vec2();
        result.values[0] = direction.values[0] * scalar;
        result.values[1] = direction.values[1] * scalar;
        return result;
    }

    // result = start + direction ×scalar，作用是将一个点（start），沿着direction给定的方向，移动scalar个单位。
    public static scaleAdd(start: vec2, direction: vec2, scalar: number, result: vec2 | null = null): vec2 {
        if (result === null) result = new vec2();
        vec2.scale(direction, scalar, result);
        // result中存储的是缩放后的向量
        return vec2.sum(start, result, result);
        // start + result = result，然后将result返回给调用者
    }

    // 公开的静态函数：点积
    public static dotProduct(left: vec2, right: vec2): number {
        return left.values[0] * right.values[0] + left.values[1]
            * right.values[1];
    }
    // 公开的实例函数：内积
    public innerProduct(right: vec2): number {
        // 调用静态方法
        return vec2.dotProduct(this, right);
    }

    // cosθ = a·b / ( || a || || b || )
    public static getAngle(a: vec2, b: vec2, isRadian: boolean = false):
        number {
        let dot: number = vec2.dotProduct(a, b);
        let radian: number = Math.acos(dot / (a.length * b.length));
        if (isRadian === false) {
            radian = Math2D.toDegree(radian);
        }
        return radian;
    }
    public static getOrientation(from: vec2, to: vec2, isRadian: boolean =
        false): number {
        let diff: vec2 = vec2.difference(to, from);
        let radian = Math.atan2(diff.y, diff.x);
        if (isRadian === false) {
            radian = Math2D.toDegree(radian);
        }
        return radian;
    }
}
// 2D尺寸
export class Size {
    public values: Float32Array; // 使用float32Array
    public constructor(w: number = 1, h: number = 1) {
        this.values = new Float32Array([w, h]);
    }
    public set width(value: number) { this.values[0] = value; }
    public get width(): number { return this.values[0]; }
    public set height(value: number) { this.values[1] = value; }
    public get height(): number { return this.values[1]; }

    public isEmpty() {
        return (this.width == undefined) || (this.height == undefined)
    }
    // 静态create方法
    public static create(w: number = 1, h: number = 1): Size {
        return new Size(w, h);
    }
}
// 矩形包围框
export class Rectangle {
    public origin: vec2;
    public size: Size;
    public constructor(orign: vec2 = new vec2(), size: Size = new Size(1, 1)) {
        this.origin = orign;
        this.size = size;
    }
    public isEmpty() {
        return this.size.isEmpty() || this.origin.isEmpty();
    }
    // 静态create方法
    public static create(x: number = 0, y: number = 0, w: number = 1, h: number = 1): Rectangle {
        let origin: vec2 = new vec2(x, y);
        let size: Size = new Size(w, h);
        return new Rectangle(origin, size);
    }
}

// 使用const关键字定义常数
const PiBy180: number = 0.017453292519943295; // Math . PI / 180.0
export class Math2D {

    // 将以角度表示的参数转换为弧度表示
    public static toRadian(degree: number): number {
        return degree * PiBy180;
    }

    // 将以弧度表示的参数转换为角度表示
    public static toDegree(radian: number): number {
        return radian / PiBy180;
    }

    public static isEquals(k: number, v: number) {
        return k == v;
    }
}