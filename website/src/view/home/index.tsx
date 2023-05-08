// import a from "../../../../laboratory/art/dragon/index.html";
// import n from "../../../";
import "./index.less";
import logo from "../../assets/logo.png";
const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <div className="l">
          <div className="logo">
            <img src={logo} alt="" />
            Sparrow Logger
          </div>
        </div>
      </header>
      <div className="content">
        <div className="l"></div>
        <div className="c">
          <iframe src={"../../../art/loopBox/index.html"}></iframe>
        </div>
        <div className="r"></div>
      </div>
      <footer></footer>
    </div>
  );
};

export default HomePage;
