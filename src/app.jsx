// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import ReactFullpage from "@fullpage/react-fullpage";
// Local | React-Redux
import { toggleTheme, toggleMenu, toggleSection } from "Actions/app.js";
import { Header } from "Components/Header";
import { Home } from "Components/Home";
import { Skills } from "Components/Skills";
import { Projects } from "Components/Projects";
import { Contact } from "Components/Contact";
import { Socials } from "Components/Socials";
import { Modal } from "Components/Modal";
import { Intro } from "Components/Intro";
import { Footer } from "./components/Footer";
import { data } from "Data/data";
// Styles
import "cooltipz-css";
import "./styles/app.scss";

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

  const loadTheme = () => {
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme !== null) {
      dispatch(toggleTheme(JSON.parse(storageTheme)));
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
          responsiveWidth={800}
          onLeave={(origin, destination, direction) => {
            dispatch(toggleSection(destination.anchor, true));
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <section className="section section--home fp-auto-height-responsive">
                  <Home data={displayedData.home} />
                </section>
                <section className="section section--skills fp-auto-height-responsive">
                  <Skills data={displayedData.skills} />
                </section>
                <section
                  className="section section--projects fp-auto-height-responsive"
                  ref={projectRef}
                >
                  {projectInView && <Projects data={displayedData.projects} />}
                </section>
                <section
                  className="section section--contact fp-auto-height-responsive"
                  ref={contactRef}
                >
                  {contactInView && <Contact data={displayedData.contact} />}
                </section>
                <section className="section fp-auto-height footer">
                  <Footer data={displayedData.footer} />
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
