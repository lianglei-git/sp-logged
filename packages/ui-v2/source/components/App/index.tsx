import React from "react";
import Sidebar from "../Sidebar";
import { useAppStore } from "../../hooks";
import { observer } from "mobx-react";
import "./index.less";

export default observer(() => {
  const app = useAppStore();
  return (
    <div className="app">
      <div className="spa">
        <Sidebar />
        <div className="content">{app.getCurrentPanelStore().PanelDom}</div>
      </div>
      <footer>
        <div className="l"></div>
        <div className="r">When it was nealy 6:00, The sun will set.</div>
      </footer>
    </div>
  );
});
