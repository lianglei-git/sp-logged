import { ReactNode } from "react";
import { AppStore } from ".";

abstract class abstractStore {
  private _PanelDom: ReactNode;
  public get PanelDom(): ReactNode {
    return this._PanelDom;
  }
  public set PanelDom(value: ReactNode) {
    this._PanelDom = value;
  }
  app: AppStore
}

export default abstractStore