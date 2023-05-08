// canvas
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./layout.less";
import DisposeCanvas from "./2dDraw";
import State from "./store";
const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

const state = new State();
const Context = createContext(state);
const useStore = () => useContext(Context);
window.app = state;

const LightV1 = ({ children }) => {
  const canvasRef = useRef(null);
  const [store, ChangeStore] = useState(state);
  useEffect(() => {
    if (store.canvasApp) return () => void 0;
    const canvasApp = DisposeCanvas.create(
      canvasRef.current as unknown as HTMLCanvasElement,
      store
    );
    canvasApp.addTimer(
      canvasApp.backgroundTransform.bind(canvasApp),
      0.1,
      false,
      "v1-basic"
    );
    store.canvasApp = canvasApp;
    canvasApp.start();
  }, []);

  const resizeEvent = useCallback(() => {
    console.log(9919991919);
    const canvasConfig = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    state.canvasConfig = canvasConfig;
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
    <Context.Provider value={store}>
      <>
        <canvas ref={canvasRef} {...store.canvasConfig}></canvas>
        <Layout>{children}</Layout>
      </>
    </Context.Provider>
  );
};

export default LightV1;
