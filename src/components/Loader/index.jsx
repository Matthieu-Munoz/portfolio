import loaderSVG from "./loader.svg";
// styles
import "./loader.scss";

export function Loader() {
  return (
    <div className="loader">
      <img src={loaderSVG} alt="" />
    </div>
  );
}
