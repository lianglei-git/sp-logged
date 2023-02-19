import React, { memo, useEffect, useRef, useState } from "react";
import "./index.less";
const Header = memo(() => {
  return (
    <header>
      <span className="title">Hello Sparrow</span>
      <div className="other">
        <span className="plan">
          <em className={"sp-icon sp-icon-yishoucang shoucang"}></em>
          Upgrade your plan
        </span>{" "}
        <span className="sp-icon sp-icon-jingshi tips"></span>
        <sp-avatar shape="circle" style={{ background: "#f56a00" }}>
          R
        </sp-avatar>
      </div>
    </header>
  );
});

export default () => {
  return (
    <div className="dashboard">
      <Header />
    </div>
  );
};
