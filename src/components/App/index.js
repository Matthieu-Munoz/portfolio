// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import ReactFullpage from "@fullpage/react-fullpage";
// Local | React-Redux
import { toggleTheme, toggleMenu, toggleSection } from "Actions/app.js";
import Header from "../Header";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Socials from "../Socials";
import Modal from "../Modal";
import Intro from "../Intro";
import { data } from "Data/data";
// Styles
import "cooltipz-css";
import "./app.scss";

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();
  const { menuOpen, theme, disableScroll, menuDisplay, language } = useSelector(
    (state) => state.app
  );

  // -- CSS Class
  // Applying theme
  const themeClass = classNames(
    "theme",
    { "theme--dark": theme === "dark" },
    { "theme--light": theme === "light" }
  );
  // Disabeling scroll while the intro is playing
  const appClass = classNames("app", {
    "disable-scroll": disableScroll,
  });

  // Theme loading from user pref
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

  useEffect(() => {
    loadTheme();
    // eslint-disable-next-line
  }, []);

  const { ref: contactRef, inView: contactInView } = useInView();
  const { ref: projectRef, inView: projectInView } = useInView();

  const displayedData = data[0][language];
  const anchors = ["home", "skills", "projects", "contact", "footer"];

  return (
    <div className={themeClass}>
      <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)}>
        {menuDisplay && (
          <>
            <Header />
            <Socials />
          </>
        )}
        <Intro />
        <Modal />
        <ReactFullpage
          licenseKey={"KNXF6-QO9NI-YH0AI-7I377-OOOYM"}
          anchors={anchors}
          lockAnchors={true}
          scrollOverflow={true}
          onLeave={(origin, destination, direction) => {
            dispatch(toggleSection(destination.anchor, true));
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <section className="section section--home">
                  <Home data={displayedData.home} />
                </section>
                <section className="section section--skills">
                  <Suspense>
                    <Skills data={displayedData.skills} />
                  </Suspense>
                </section>
                <section className="section section--projects" ref={projectRef}>
                  <Suspense>
                    {projectInView && (
                      <Projects data={displayedData.projects} />
                    )}
                  </Suspense>
                </section>
                <section className="section section--contact" ref={contactRef}>
                  <Suspense>
                    {contactInView && <Contact data={displayedData.contact} />}
                  </Suspense>
                </section>
                <section className="section fp-auto-height footer">
                  {displayedData.footer.text}
                  <a
                    href="https://github.com/Matthieu-Munoz/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayedData.footer.link}
                  </a>
                  .
                </section>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </div>
  );
}

export default App;
