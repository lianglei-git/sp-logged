import DisposeCanvas from "./2dDraw";

class State {
  canvasApp: DisposeCanvas | null = null;
  canvasConfig = {
    width: (window.innerWidth || 1300) - 17,
    height: (window.innerHeight || 600) - 17,
  };
}


export default State;