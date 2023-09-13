import React, { memo, useEffect, useRef, useState } from "react";
import { Notify } from "@sparrowend/ui";
import "./index.less";
import CommonHeader from "@/components/CommonHeader";
/** @eslint/no-check */
let time = null;
const Content = () => {
  // useEffect(() => {
  //   setInterval(() => {
  //     if (time) {
  //       clearInterval(time);
  //       return (time = 0);
  //     }
  //     time = Notify({
  //       type: "warning",
  //       title: "Tips",
  //       message: "All Errors!",
  //       position: "bottom-left",
  //     });
  //   }, 5000);
  // }, []);
};

export default () => {
  return (
    <div className="dashboard">
      <CommonHeader>
        <span className="title">Hello Sparrow</span>
        <div>
          <span className="plan">
            <em className={"sp-icon sp-icon-yishoucang shoucang"}></em>
            Upgrade your plan
          </span>
          <span className="sp-icon sp-icon-jingshi tips"></span>
        </div>
      </CommonHeader>
      {/* <Content /> */}
    </div>
  );
};
