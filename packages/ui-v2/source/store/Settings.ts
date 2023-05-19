import { AppStore } from ".";
import Panel from '../view/Settings'
import abstractStore from "./abstract";

class SettingsStore extends abstractStore {
  constructor(public app: AppStore) {
    super();
  }

  /** get Dashboard Panel */
  get PanelDom() {
    return Panel();
  }

}

export default SettingsStore;