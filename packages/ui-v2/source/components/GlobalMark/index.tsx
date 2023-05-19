import { useEffect, useRef, useState } from "react";
import "./index.less";

const GlobalMark = () => {
  const globaMarkRef = useRef(false);
  // useEffect(() => {
  //   window.showGlobalMark = () => {
  //     const el = globaMarkRef.current;
  //     el.style.display = "block";
  //   };
  // }, []);
  return (
    <div className="global-mark" id="global-mark" ref={globaMarkRef}></div>
  );
};

export default GlobalMark;
