import React, { memo, useEffect, useRef, useState } from "react";
import { useAppStore } from "../../hooks";
import "./index.less";
import logo from "../../../public/logo.png";
import { IPanelType } from "@store/index";
import Title from "./title";
/** theme Change */
const ThemeClass = () => {
  const switchRef: any = useRef(null);
  /** light or dark */
  const theme = useRef("light");
  // @ts-expect-error: Transition API
  const isAppearanceTransition =
    document.startViewTransition &&
    !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches &&
    /** site.value.appearanceTransition */ false;

  const changeTheme = () => {
    const _theme = theme.current == "light" ? "dark" : "light";
    theme.current = _theme;
    rewriteClassName(_theme);
  };

  const toggle = (event) => {
    if (!isAppearanceTransition) {
      return changeTheme();
    }
    const css = document.createElement("style");
    css.type = "text/css";
    css.appendChild(
      document.createTextNode(
        `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
          }
          ::view-transition-old(root),
          ::view-transition-new(root) {
              animation: none;
              mix-blend-mode: normal;
            }
`
      )
    );
    document.head.appendChild(css);

    const isDark = theme.current == "dark";

    const transition = document.startViewTransition(() => {
      changeTheme();
    });
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      console.log(isDark, clipPath, "isDarkisDark");
      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: isDark
            ? "::view-transition-new(root)"
            : "::view-transition-old(root)",
        }
      );

      setTimeout(() => {
        css.remove();
      }, 610);
    });
  };

  useEffect(() => {
    rewriteClassName(theme.current);
  }, []);

  const rewriteClassName = (_theme: string) => {
    document.documentElement.className = "theme-" + _theme;
  };
  return (
    <sp-switch
      ref={switchRef}
      className="VPSwitchAppearance"
      onClick={toggle}
      active-icon="sp-icon-shouhuiyueliang"
      inactive-icon=" sp-icon-taiyang"
      active-color="rgb(122 122 125)"
      inactive-color="rgb(235 235 255)"
      width={38}
    >
      <img src={logo} alt="" />
      <Title />
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
      <em className="mark sp-icon sp-icon-mulu"> </em>
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
              {item.iconName && (
                <span className={"sp-icon " + item.iconName}></span>
              )}

              <span>{item.key}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
