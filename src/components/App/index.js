// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { InView } from "react-intersection-observer";
import LazyLoad from "react-lazyload";
import classNames from "classnames";
import Aos from "aos";
// Local | React-Redux
import {
  toggleTheme,
  toggleAnimation,
  toggleIntroAnimation,
  toggleIntroSection,
  toggleMenu,
  toggleMenuDisplay,
  toggleScroll,
  toggleSectionInView,
  toggleSection,
} from "Actions/app.js";
import AnimatedLogo from "../AnimatedLogo";
import Header from "../Header";
import Loader from "../Loader";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Socials from "../Socials";
import Modal from "../Modal";
import Cursor from "../Cursor";
import { data } from "Data/data";
// Styles
import "cooltipz-css";
import "./app.scss";
import "aos/dist/aos.css";

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();
  const {
    menuOpen,
    appSectionInView,
    loadAnimation,
    introSection,
    introAnimation,
    theme,
    disableScroll,
    menuDisplay,
    language,
  } = useSelector((state) => state.app);

  // -- CSS Class
  // Applying theme
  const themeClass = classNames(
    "theme",
    { "theme--dark": theme === "dark" },
    { "theme--light": theme === "light" }
  );
  // Disabeling scroll while the intro is playing
  const appClass = classNames("app", { "disable-scroll": disableScroll });
  // Starts the intro moving up when applied
  const introClass = classNames("section section--intro", {
    "section--intro--up": introAnimation,
  });

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

  // Section switch in menu
  const handleSwitchSection = (section) => {
    switch (section) {
      case "homeInView":
        dispatch(toggleSectionInView("home", true));
        dispatch(toggleSection("home", true));
        break;
      case "homeOutView":
        if (appSectionInView.home && appSectionInView.skills) {
          dispatch(toggleSectionInView("home", false));
          dispatch(toggleSection("skills", true));
        }
        break;
      case "skillsInView":
        dispatch(toggleSectionInView("skills", true));
        if (!appSectionInView.home) {
          dispatch(toggleSection("skills", true));
        }
        break;
      case "skillsOutView":
        if (appSectionInView.skills && appSectionInView.projects) {
          dispatch(toggleSectionInView("skills", false));
          dispatch(toggleSection("projects", true));
        }
        break;
      case "projectsInView":
        dispatch(toggleSectionInView("projects", true));
        if (!appSectionInView.skills) {
          dispatch(toggleSection("projects", true));
        }
        break;
      case "projectsOutView":
        if (appSectionInView.projects && appSectionInView.contact) {
          dispatch(toggleSectionInView("projects", false));
          dispatch(toggleSection("contact", true));
        } else if (appSectionInView.projects && appSectionInView.skills) {
          dispatch(toggleSectionInView("projects", false));
        }
        break;
      case "contactInView":
        dispatch(toggleSectionInView("contact", true));
        break;
      case "contactOutView":
        if (appSectionInView.contact && appSectionInView.projects) {
          dispatch(toggleSectionInView("contact", false));
          dispatch(toggleSection("projects", true));
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    loadTheme();
    window.addEventListener("resize", debouncedHandleResize);
    document.addEventListener("visibilitychange", handlePageIntroListener);
    Aos.init({
      duration: 350,
      easing: "ease-in-sine",
    });
    if (!document.hidden) {
      handlePageIntro();
    }
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
      document.removeEventListener("visibilitychange", handlePageIntroListener);
    };
    // eslint-disable-next-line
  }, []);

  const displayedData = data[0][language];

  return (
    <div className={themeClass}>
      <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)}>
        <Cursor>
          {menuDisplay && (
            <>
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
          <InView
            as="section"
            name="home"
            className="section section--home"
            onChange={(inView) => {
              inView
                ? handleSwitchSection("homeInView")
                : handleSwitchSection("homeOutView");
            }}
          >
            <LazyLoad offset={50}>
              <Home data={displayedData.home} />
            </LazyLoad>
          </InView>
          <InView
            as="section"
            name="skills"
            className="section section--skills"
            onChange={(inView) => {
              inView
                ? handleSwitchSection("skillsInView")
                : handleSwitchSection("skillsOutView");
            }}
          >
            <LazyLoad offset={50} placeholder={<Loader />}>
              <Skills data={displayedData.skills} />
            </LazyLoad>
          </InView>
          <InView
            as="section"
            name="projects"
            className="section section--projects"
            onChange={(inView) => {
              inView
                ? handleSwitchSection("projectsInView")
                : handleSwitchSection("projectsOutView");
            }}
          >
            <LazyLoad offset={50} placeholder={<Loader />}>
              <Projects data={displayedData.projects} />
            </LazyLoad>
          </InView>
          <InView
            as="section"
            name="contact"
            className="section section--contact"
            onChange={(inView) => {
              inView
                ? handleSwitchSection("contactInView")
                : handleSwitchSection("contactOutView");
            }}
          >
            <LazyLoad offset={50} placeholder={<Loader />}>
              <Contact data={displayedData.contact} />
            </LazyLoad>
          </InView>
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
        </Cursor>
      </div>
    </div>
  );
}

export default App;
