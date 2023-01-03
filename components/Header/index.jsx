// Dependencies
import { AiOutlineGlobal, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import classNames from "classnames";
// React-Redux
import { useAppContext } from "../../context/state";
import { ThemeToggle } from "../ThemeToggle";
import { data } from "../../data/data";
// Styles

export function Header() {
  const { app } = useAppContext();
  const menuCssClass = classNames("menu", { open: app.menuOpened });
  const homeCssClass = classNames("menu__links__link", {
    "menu__links__link--active": app.currentSection.home,
  });
  const skillsCssClass = classNames("menu__links__link", {
    "menu__links__link--active": app.currentSection.skills,
  });
  const projectCssClass = classNames("menu__links__link", {
    "menu__links__link--active": app.currentSection.projects,
  });
  const contactCssClass = classNames("menu__links__link", {
    "menu__links__link--active": app.currentSection.contact,
  });
  const burgerCssClass = classNames("burger burger-squeeze", {
    open: app.menuOpened,
  });

  const handleSectionSwitch = (section) => {
    app.toggleSection(section, true);
    app.setMenuOpened(false);
    window.fullpage_api.moveTo(section);
  };

  const displayedData = data[0][app.language].menu;
  return (
    <header className="header">
      <div className="menu_toggle">
        <div
          className={burgerCssClass}
          onClick={() => app.setMenuOpened(!app.menuOpened)}
        >
          <div className="burger-lines"></div>
        </div>
      </div>
      <div className={menuCssClass}>
        <a href="/" rel="noopener noreferrer">
          <div className="menu__logo">Matthieu Munoz</div>
        </a>
        <nav className="menu__links">
          <div
            className={homeCssClass}
            data-section="home"
            onClick={() => handleSectionSwitch("home")}
          >
            {displayedData.home}
          </div>
          <div
            className={skillsCssClass}
            data-section="skills"
            onClick={() => handleSectionSwitch("skills")}
          >
            {displayedData.skills}
          </div>
          <div
            className={projectCssClass}
            data-section="projects"
            onClick={() => handleSectionSwitch("projects")}
          >
            {displayedData.projects}
          </div>
          <div
            className={contactCssClass}
            data-section="contact"
            onClick={() => handleSectionSwitch("contact")}
          >
            {displayedData.contact}
          </div>
          <a
            href="https://docs.matthieu-munoz.fr/resume-mmunoz.pdf"
            target="blank"
            className="menu__links__link"
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
            >
              <AiFillLinkedin className="menu__socials__link--icon" />
            </a>
          </div>
        </nav>
        <div className="menu__toggles">
          <div className="menu__toggles__ctn">
            <ThemeToggle className="menu__theme_toggle" />
            <div className="menu__toggles__ctn__info">Theme</div>
          </div>
          <div
            className="menu__toggles__ctn"
            role="button"
            aria-label={displayedData.languageBtn}
            data-cooltipz-dir="top"
            onClick={() => { app.setLanguage(app.language === "french" ? "english" : "french")            }}
          >
            <AiOutlineGlobal className="menu__language_toggle" />
            <div className="menu__toggles__ctn__info">
              {displayedData.language}
            </div>
          </div>
        </div>
      </div>
      <div className="header__logo" />
    </header>
  );
}
