import "@sparrowend/ui";
import "@sparrowend/ui/dist/spui.css";
import "../public/font/iconfont.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AppStoreContext, appStore } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppStoreContext.Provider value={appStore}>
      <App />
    </AppStoreContext.Provider>
  </React.StrictMode>
);
