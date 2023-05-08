import { AppStore } from ".";
import Panel from '../view/Dashboard'
import abstractStore from "./abstract";

class DashboardStore extends abstractStore {
  constructor(public app: AppStore) {
    super();
  }

  /** get Dashboard Panel */
  get PanelDom() {
    return Panel();
  }
}

export default DashboardStore;