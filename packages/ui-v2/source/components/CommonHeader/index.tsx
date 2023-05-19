import { memo } from "react";
import "./index.less";
import { useMessage } from "@/hooks";
const CommonHeader = memo((props) => {
  // const [p, Cp] = useState(false);
  // const pRef = useRef(null);
  // useEffect(() => {
  //   console.log(pRef.current, "pRef.current");
  //   pRef.current.onChange = () => {
  //     console.log("aaaaa");
  //     Cp(!p);
  //     console.log(p);
  //   };
  // }, [p]);
  const bus = useMessage();
  const muluClick = () => {
    console.log("88888");
    bus.trigger("toggleSidebar980");
  };
  return (
    <header>
      {/* <sp-switch ref={pRef}>{p + ""}</sp-switch> */}
      <div className="float">
        <em
          className="float-mulu sp-icon sp-icon-mulu"
          onMouseDown={muluClick}
        />
      </div>
      <main>{props.children}</main>
      <div className="other">
        <sp-avatar shape="circle" style={{ background: "#f56a00" }}>
          R
        </sp-avatar>
      </div>
    </header>
  );
});

export default CommonHeader;
