// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineGlobal, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import classNames from "classnames";
// React-Redux
import { toggleLanguage, toggleMenu, toggleSection } from "Actions/app";
import ThemeToggle from "../ThemeToggle";
import { data } from "Data/data";
import { useCursorContext } from "../Cursor";
// Styles
import "./menu.scss";

function Menu() {
  const dispatch = useDispatch();
  const { currentSection, language, menuOpened } = useSelector(
    (state) => state.app
  );
  const menuCssClass = classNames("menu", { open: menuOpened });
  const homeCssClass = classNames("menu__links__link", {
    "menu__links__link--active": currentSection.home,
  });
  const skillsCssClass = classNames("menu__links__link", {
    "menu__links__link--active": currentSection.skills,
  });
  const projectCssClass = classNames("menu__links__link", {
    "menu__links__link--active": currentSection.projects,
  });
  const contactCssClass = classNames("menu__links__link", {
    "menu__links__link--active": currentSection.contact,
  });
  const burgerCssClass = classNames("burger burger-squeeze", {
    open: menuOpened,
  });

  const handleSectionSwitch = (section) => {
    dispatch(toggleSection(section, true));
    dispatch(toggleMenu(false));
    window.fullpage_api.moveTo(section);
  };

  const cursor = useCursorContext();
  const displayedData = data[0][language].menu;

  return (
    <>
      <div className="menu_toggle">
        <div
          className={burgerCssClass}
          onClick={() => dispatch(toggleMenu(!menuOpened))}
        >
          <div className="burger-lines"></div>
        </div>
      </div>
      <div className={menuCssClass}>
        <a
          href="/"
          rel="noopener noreferrer"
          onMouseOver={cursor.mouseOverEvent}
          onMouseOut={cursor.mouseOutEvent}
        >
          <div className="menu__logo">Matthieu Munoz</div>
        </a>
        <nav className="menu__links">
          <div
            className={homeCssClass}
            data-section="home"
            onClick={() => handleSectionSwitch("home")}
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            {displayedData.home}
          </div>
          <div
            className={skillsCssClass}
            data-section="skills"
            onClick={() => handleSectionSwitch("skills")}
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            {displayedData.skills}
          </div>
          <div
            className={projectCssClass}
            data-section="projects"
            onClick={() => handleSectionSwitch("projects")}
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            {displayedData.projects}
          </div>
          <div
            className={contactCssClass}
            data-section="contact"
            onClick={() => handleSectionSwitch("contact")}
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            {displayedData.contact}
          </div>
          <a
            href="https://docs.matthieu-munoz.fr/resume-mmunoz.pdf"
            target="blank"
            className="menu__links__link"
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            <div className="menu__links__link" data-section="resume">
              {displayedData.resume}
            </div>
          </a>
          <div className="menu__socials">
            <a
              href="https://github.com/Matthieu-Munoz"
              title="lien vers mon Github"
              target="blank"
              className="menu__socials__link"
              aria-label="Github"
              data-cooltipz-dir="bottom"
              onMouseOver={cursor.mouseOverEvent}
              onMouseOut={cursor.mouseOutEvent}
            >
              <AiFillGithub className="menu__socials__link--icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/matthieu-munoz-798b33184/"
              title="lien vers mon Linkedin"
              target="blank"
              className="menu__socials__link"
              aria-label="Linkedin"
              data-cooltipz-dir="bottom"
              onMouseOver={cursor.mouseOverEvent}
              onMouseOut={cursor.mouseOutEvent}
            >
              <AiFillLinkedin className="menu__socials__link--icon" />
            </a>
          </div>
        </nav>
        <div className="menu__toggles">
          <div
            className="menu__toggles__ctn"
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            <ThemeToggle className="menu__theme_toggle" />
            <div className="menu__toggles__ctn__info">Theme</div>
          </div>
          <div
            className="menu__toggles__ctn"
            role="button"
            aria-label={displayedData.languageBtn}
            data-cooltipz-dir="top"
            onClick={() => {
              dispatch(
                toggleLanguage(language === "french" ? "english" : "french")
              );
            }}
            onMouseOver={cursor.mouseOverEvent}
            onMouseOut={cursor.mouseOutEvent}
          >
            <AiOutlineGlobal className="menu__language_toggle" />
            <div className="menu__toggles__ctn__info">
              {displayedData.language}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
