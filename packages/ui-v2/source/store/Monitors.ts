import { ReactNode } from "react";
import { AppStore } from ".";
import Panel from '../view/Monitors'
import abstractStore from "./abstract";
class MonitorsStore extends abstractStore {
  constructor(public app: AppStore) {
    super();
  }

  /** get Dashboard Panel */
  get PanelDom(): ReactNode {
    return Panel();
  }
}

export default MonitorsStore