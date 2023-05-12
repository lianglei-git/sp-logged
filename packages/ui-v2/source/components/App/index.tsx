import React from "react";
import Sidebar from "../Sidebar";
import { useAppStore } from "../../hooks";
import { observer } from "mobx-react";
import "./index.less";
import CommonFooter from "../Footer";

export default observer(() => {
  const app = useAppStore();
  return (
    <div className="app">
      <div className="spa">
        <Sidebar />
        <div className="content">{app.getCurrentPanelStore().PanelDom}</div>
      </div>
      <CommonFooter />
    </div>
  );
});
