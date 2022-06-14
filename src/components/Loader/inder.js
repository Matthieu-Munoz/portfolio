import loaderSVG from "./loader.svg";
// styles
import "./loader.scss";

function Loader() {
  return (
    <div className="loader">
      <img src={loaderSVG} alt="" />
    </div>
  );
}

export default Loader;
