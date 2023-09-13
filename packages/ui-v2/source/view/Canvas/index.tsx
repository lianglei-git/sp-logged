import { memo } from "react";
import "./index.less";
const CanvasView = memo(() => {
  return (
    <div className="CanvasView">
      <iframe src={"./source/map/src/index.html"}></iframe>
    </div>
  );
});

export default CanvasView;
