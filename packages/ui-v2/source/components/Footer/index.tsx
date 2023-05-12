import { useAppStore } from "@/hooks";
import "./index.less";
import { observer } from "mobx-react-lite";
const CommonFooter = () => {
  const app = useAppStore();

  return (
    <footer className="CommonFooter">
      <div className="l"></div>
      <div className="r">
        {app.dailySentenceLive?.content}{" "}
        <span style={{ color: "#0319ad" }}>
          {app.dailySentenceLive?.origin}
        </span>
      </div>
    </footer>
  );
};

export default observer(CommonFooter);
