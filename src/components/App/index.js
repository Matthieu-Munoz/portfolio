// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import Aos from "aos";
// Local | React-Redux
import { toggleTheme, toggleMenu } from "Actions/app.js";
import { sectionsScroll } from "Actions/sections";
import Header from "../Header";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Socials from "../Socials";
import Modal from "../Modal";
import Cursor from "../Cursor";
import Intro from "../Intro";
import { data } from "Data/data";
// Styles
import "cooltipz-css";
import "./app.scss";
import "aos/dist/aos.css";

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

  // Section snaping
  const body = document.querySelector("body");
  const sectionHome = useRef(null);
  const sectionSkills = useRef(null);
  const sectionProjects = useRef(null);
  const sectionContact = useRef(null);

  const handleSectionScroll = (window.onscroll = () => {
    const sections = {
      body: body,
      s1: sectionHome,
      s2: sectionSkills,
      s3: sectionProjects,
      s4: sectionContact,
    };
    if (menuDisplay) {
      dispatch(sectionsScroll(sections));
    }
  });

  useEffect(() => {
    loadTheme();
    Aos.init({
      duration: 350,
      easing: "ease",
      once: true,
    });

    // eslint-disable-next-line
  }, []);

  const displayedData = data[0][language];

  return (
    <div className={themeClass}>
      <Cursor>
        <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)}>
          {menuDisplay && (
            <>
              <Header />
              <Socials />
            </>
          )}
          <Intro />
          <Modal />
          <section
            ref={sectionHome}
            name="home"
            className="section section--home s1"
          >
            <Home data={displayedData.home} />
          </section>
          <section
            ref={sectionSkills}
            name="skills"
            className="section section--skills s2"
          >
            <Skills data={displayedData.skills} />
          </section>
          <section
            ref={sectionProjects}
            name="projects"
            className="section section--projects s3"
          >
            <Projects data={displayedData.projects} />
          </section>
          <section
            ref={sectionContact}
            name="contact"
            className="section section--contact s4"
          >
            <Contact data={displayedData.contact} />
          </section>
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
      </Cursor>
    </div>
  );
}

export default App;
