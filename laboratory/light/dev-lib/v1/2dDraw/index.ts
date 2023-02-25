import { Canvas2DApplication } from "../core";
import State from "../store";

class DisposeCanvas extends Canvas2DApplication {
  _backgroundTransform_renderCount = 0;
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
    } else if (this._backgroundTransform_renderCount <= 0) {
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
      `rgb(${c},${c},${c})`
    );
  }

  draw_sun() {
    const radius = 180;
    this.fillCircle(
      this.store.canvasConfig.width / 2 - radius / 2,
      this.store.canvasConfig.height,
      radius,
      "red"
    );

    this.strokeCircle(
      this.store.canvasConfig.width / 2 - radius / 2,
      this.store.canvasConfig.height,
      radius + 100,
      "yellow"
    );
    // this.fillCircle(300, this.store.canvasConfig.height - 100, 10, "yellow");
    // this.fillCircle(400, this.store.canvasConfig.height - 200, 10, "yellow");
    // this.fillCircle(500, this.store.canvasConfig.height - 250, 10, "yellow");
    // this.fillCircle(600, this.store.canvasConfig.height - 250, 10, "yellow");
  }
}


export default DisposeCanvas;