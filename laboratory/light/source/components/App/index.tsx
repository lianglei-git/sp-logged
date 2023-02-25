import React from "react";
import Iframe from "../iframe";
import LightCore from "../../../dev-lib/index";
export default () => {
  return (
    <div className="app">
      <LightCore version="v1">
        {/* <Iframe /> */}
        <div
          style={{ filter: "invert(100%)", width: "50%", textAlign: "center" }}
        >
          <p>别董大 </p>
          <p>&nbsp; &nbsp; &nbsp;高适 〔唐代〕 </p>
          <p>千里黄云白日曛，北风吹雁雪纷纷。</p>
          <p>莫愁前路无知己，天下谁人不识君。</p>
        </div>
      </LightCore>
    </div>
  );
};
