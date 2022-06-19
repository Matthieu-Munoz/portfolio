// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import classNames from "classnames";
// Local | React-Redux
import {
  toggleAnimation,
  toggleIntroAnimation,
  toggleIntroSection,
  toggleMenu,
  toggleMenuDisplay,
  toggleScroll,
  toggleSection,
  toggleTheme,
} from "@/actions/app";
import AnimatedLogo from "../AnimatedLogo";
import Header from "../Header";
import Loader from "../Loader";
import { data } from "@/data/data";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Socials from "../Socials";
import Modal from "../Modal";
// Styles
import "cooltipz-css";
import "./app.scss";

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();
  const {
    loadAnimation,
    introSection,
    introAnimation,
    theme,
    disableScroll,
    menuDisplay,
    language,
  } = useSelector((state) => state.app);
  const themeClass = classNames(
    "theme",
    { "theme--dark": theme === "dark" },
    { "theme--light": theme === "light" }
  );
  const appClass = classNames("app", { "disable-scroll": disableScroll });
  const introClass = classNames("section section--intro", {
    "section--intro--up": introAnimation,
  });
  const menuOpen = useSelector((state) => state.app.menuOpened);
  let checkIntro = false;

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
  /**
   * Close the menu when anything BUT the menu/burgerIcon is clicked
   * @param {*} evt
   */
  const handleMenu = (evt, menuOpen) => {
    const str = JSON.stringify(evt.target.className);
    const res = str.includes("menu") || str.includes("burger");
    if (!res && menuOpen) {
      dispatch(toggleMenu(false));
    }
  };
  const handleSwitchSection = (section) => {
    dispatch(toggleSection(section, true));
  };

  const loadTheme = () => {
    let theme;
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    } else {
      theme = "dark";
    }
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme !== null) {
      theme = JSON.parse(storageTheme);
    }
    dispatch(toggleTheme(theme));
  };

  const displayedData = data[0][language];

  useEffect(() => {
    loadTheme();
    window.addEventListener("resize", debouncedHandleResize);
    document.addEventListener("visibilitychange", handlePageIntroListener);
    if (!document.hidden) {
      handlePageIntro();
    }
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
      document.removeEventListener("visibilitychange", handlePageIntroListener);
    };
  }, []);

  return (
    <div className={themeClass}>
      <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)}>
        {menuDisplay && (
          <>
            {" "}
            <Header />
            <Socials />
          </>
        )}
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
        <Modal />
        <Waypoint onEnter={() => handleSwitchSection("home")}>
          <section name="home" className="section section--home">
            <Home data={displayedData.home} />
          </section>
        </Waypoint>
        <Waypoint onEnter={() => handleSwitchSection("skills")}>
          <section name="skills" className="section section--skills">
            <Skills data={displayedData.skills} />
          </section>
        </Waypoint>
        <Waypoint onEnter={() => handleSwitchSection("projects")}>
          <section name="projects" className="section section--projects">
            <LazyLoadComponent placeholder={<Loader />}>
              <Projects data={displayedData.projects} />
            </LazyLoadComponent>
          </section>
        </Waypoint>
        <Waypoint onEnter={() => handleSwitchSection("contact")}>
          <section name="contact" className="section section--contact">
            <Contact data={displayedData.contact} />
          </section>
        </Waypoint>
        <div className="footer">
          {displayedData.footer.text}
          <a
            href="https://github.com/Matthieu-Munoz/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {displayedData.footer.link}
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
