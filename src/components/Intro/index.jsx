// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";
// Local | React-Redux
import {
  toggleAnimation,
  toggleIntroAnimation,
  toggleIntroSection,
  toggleMenu,
  toggleMenuDisplay,
  toggleScroll,
} from "Actions/app.js";
import AnimatedLogo from "../AnimatedLogo";
// Styles
import "./intro.scss";

function Intro() {
  const dispatch = useDispatch();
  const { loadAnimation, introSection, introAnimation } = useSelector(
    (state) => state.app
  );
  // Starts the intro moving up when applied
  const introClass = classNames("intro", {
    "intro--up": introAnimation,
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  const debouncedHandleResize = debounce(() => {
    dispatch(toggleMenu(false));
  }, 500);

  const handlePageIntroListener = (evt) => {
    if (evt.target.visibilityState === "visible") {
      handlePageIntro();
    }
  };

  let checkIntro = false;

  const handlePageIntro = () => {
    if (!checkIntro) {
      checkIntro = true;
      dispatch(toggleAnimation(true));
      setTimeout(() => {
        dispatch(toggleIntroAnimation(true));
        setTimeout(() => {
          dispatch(toggleScroll(false));
          dispatch(toggleIntroSection(false));
          dispatch(toggleMenuDisplay(true));
        }, 700);
      }, 3000);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);
    document.addEventListener("visibilitychange", handlePageIntroListener);
    if (!document.hidden) {
      handlePageIntro();
    }
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
      document.removeEventListener("visibilitychange", handlePageIntroListener);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {introSection && (
        <div className={introClass}>
          <div className="intro__corners">
            <span className="intro__corners__corner intro__corners__corner__TL"></span>
            <span className="intro__corners__corner intro__corners__corner__TR"></span>
            <span className="intro__corners__corner intro__corners__corner__BR"></span>
            <span className="intro__corners__corner intro__corners__corner__BL"></span>
          </div>
          {loadAnimation && <AnimatedLogo />}
        </div>
      )}
    </>
  );
}

export default Intro;
