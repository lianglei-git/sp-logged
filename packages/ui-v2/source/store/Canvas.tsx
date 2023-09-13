import { AppStore } from ".";
import Panel from '../view/Canvas'
import abstractStore from "./abstract";

class CanvasStore extends abstractStore {
  constructor(public app: AppStore) {
    super();
  }

  /** get Dashboard Panel */
  get PanelDom() {
    return <Panel />
  }
}

export default CanvasStore;