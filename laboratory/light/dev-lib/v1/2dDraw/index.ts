import { Canvas2DApplication, ELayout, Math2D } from "../core";
import State from "../store";

class DisposeCanvas extends Canvas2DApplication {
  _backgroundTransform_renderCount = 1;
  isAdd = false;


  constructor(canvas: HTMLCanvasElement, public store: State) {
    super(canvas);
  }

  static instance: DisposeCanvas | null = null;
  static create(canvas: HTMLCanvasElement, store: State) {
    if (!this.instance) this.instance = new DisposeCanvas(canvas, store);
    return this.instance;
  }

  resetOrAdd_backgroundTransform_renderCount() {
    if (this.isAdd) {
      this._backgroundTransform_renderCount++;
    } else {
      this._backgroundTransform_renderCount--;
    }
    if (this._backgroundTransform_renderCount >= 255) {
      this.isAdd = false;
    } else if (this._backgroundTransform_renderCount <= 1) {
      this.isAdd = true;
    }
  }

  changeCanvasSize(p: { width: number, height: number }) {
    this.canvas.width = p.width;
    this.canvas.height = p.height;
  }
  // public update(): void {
  //   if (this.context2D == null) return "";
  // }

  /** basic -- background -- light gradient */
  backgroundTransform() {
    if (this.context2D == null) return "";
    this.changeCanvasSize(this.store.canvasConfig)
    let c = this._backgroundTransform_renderCount;
    this.resetOrAdd_backgroundTransform_renderCount();
    this.clearRect();

    this.fillRect(
      0,
      0,
      this.store.canvasConfig.width,
      this.store.canvasConfig.height,
      '#000'
      // `rgb(${c},${c},${c})`
    );

    this.draw_sun();

  }

  draw_sun() {
    const radius = 180;
    this.setShadowState(this._backgroundTransform_renderCount / 10, '#fff', 0, 0);
    this.fillCircle(
      this.store.canvasConfig.width / 2,
      this.store.canvasConfig.height / 2,
      radius,
      "red"
    );
    for (let i = 0; i < 360; i += 10) {
      this.rotateTranslate(-i + this._backgroundTransform_renderCount, radius);
    }
  }

  // 将doTransform中先旋转后平移的代码独立出来，形成rotateTranslate方法
  public rotateTranslate(degree: number, radius: number, layout: ELayout = ELayout.LEFT_TOP, width: number = 40, height: number = 20): void {
    if (this.context2D === null) {
      return;
    }
    // 将角度转换为弧度，由此可见，本方法的参数degree是以角度而不是弧度表示
    let radians: number = Math2D.toRadian(degree);
    // 顺时针旋转
    this.context2D.save();

    // 然后再平移到画布中心
    this.context2D.translate(this.store.canvasConfig.width / 2, this.store.canvasConfig.height / 2);

    // 先顺时针旋转20°
    this.context2D.rotate(radians);
    this.setShadowState(4, 'red', 0, 0);

    this.fillCircle(
      radius,
      radius,
      10,
      "yellow"
    );
    this.context2D.restore();
  }
}


export default DisposeCanvas;