import { AppStore } from ".";
import Panel from '../view/Logs'
import abstractStore from "./abstract";

class LogsStore extends abstractStore {
  constructor(public app: AppStore) {
    super();
  }

  /** get Dashboard Panel */
  get PanelDom() {
    return Panel()
  }
}

export default LogsStore;