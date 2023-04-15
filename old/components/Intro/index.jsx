// Dependencies
import { useEffect } from "react";
import classNames from "classnames";
// Local | React-Redux

import { AnimatedLogo } from "../AnimatedLogo";
import { useAppContext } from "../../context/state";
// Styles
import styles from "./intro.module.scss";

export function Intro() {
  const { app } = useAppContext();
  // Starts the intro moving up when applied
  const introClass = classNames(styles.intro, {
    [styles['intro--up']]: app.introAnimation,
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
    app.setMenuOpened(false);
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
      app.setLoadAnimation(true);
      setTimeout(() => {
        app.setIntroAnimation(true);
        setTimeout(() => {
          app.setDisableScroll(false);
          app.setIntroSection(false);
          app.setMenuDisplay(true);
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
      {app.introSection && (
        <div className={introClass}>
          <div className={styles.intro__corners}>
            <span className={`${styles.intro__corners__corner} ${styles.intro__corners__corner__TL}`}></span>
            <span className={`${styles.intro__corners__corner} ${styles.intro__corners__corner__TR}`}></span>
            <span className={`${styles.intro__corners__corner} ${styles.intro__corners__corner__BR}`}></span>
            <span className={`${styles.intro__corners__corner} ${styles.intro__corners__corner__BL}`}></span>
          </div>
          {app.loadAnimation && <AnimatedLogo />}
        </div>
      )}
    </>
  );
}
