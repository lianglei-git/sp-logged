import "@sparrowend/ui";
import "@sparrowend/ui/dist/spui.css";
import "@sparrowend/ui/es/icon/remixicon.css";
import "../public/font/iconfont.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AppStoreContext, appStore } from "./store";
import GlobalMark from "./components/GlobalMark";
import Light from "@sp-laboratory/light/dev-lib/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppStoreContext.Provider value={appStore}>
      {/* <Light version="v1"> */}
      <App />
      <GlobalMark />
      {/* </Light> */}
    </AppStoreContext.Provider>
  </React.StrictMode>
);
