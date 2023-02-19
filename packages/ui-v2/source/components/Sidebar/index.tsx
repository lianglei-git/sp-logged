import React, { memo, useEffect, useRef, useState } from "react";
import { useAppStore } from "../../hooks";
import "./index.less";
import logo from "../../../public/logo.png";
import { IPanelType } from "@store/index";
/** theme Change */
const ThemeClass = () => {
  const switchRef: any = useRef(null);
  /** light or dark */
  const theme = useRef("light");
  useEffect(() => {
    rewriteClassName(theme.current);
    switchRef.current.onChange = () => {
      const _theme = theme.current == "light" ? "dark" : "light";
      theme.current = _theme;
      rewriteClassName(_theme);
    };
  }, []);
  const rewriteClassName = (_theme: string) => {
    document.body.className = "theme-" + _theme;
  };
  return (
    <sp-switch
      ref={switchRef}
      active-icon="sp-icon-hot"
      inactive-icon="sp-icon-favorites-fill"
      active-color="rgb(122 122 125)"
      inactive-color="rgb(235 235 255)"
      width={38}
    >
      <img src={logo} alt="" />
    </sp-switch>
  );
};

export default () => {
  const app = useAppStore();
  const changeTab = (k: IPanelType) => {
    app.panelType = k;
  };
  return (
    <div className="Sidebar">
      <div>
        <ThemeClass />
      </div>
      <div className="list">
        {app.LayoutEnum.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() => changeTab(item.key)}
              className={item.key === app.panelType ? "active" : ""}
            >
              <span>{item.key}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
