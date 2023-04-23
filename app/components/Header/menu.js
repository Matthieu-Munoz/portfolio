"use client"
// Dependencies
import Image from "next/image";
import Link from "next/link";
// Local
import { useAppContext } from "@/app/context/state";
import { ThemeToggle } from "../ThemeToggle";
import { useEffect } from "react";

const MenuItem = ({ app, href, section = null, iconLight, iconDark, label, target = "_self" }) => {
  const isActive = app.currentSection === section;
  const handleClick = () => {
    if (section) app.setCurrentSection(section)
  };

  const isDark = app.lightTheme;
  const iconSrc = isActive ? (isDark ? iconLight : iconDark) : (isDark ? iconDark : iconLight);
  return (
    <li className="transition-all">
      <a
        href={href}
        className={`${isActive && "menu-active-link"
          } flex h-[48px] w-[48px] cursor-pointer items-center overflow-hidden whitespace-nowrap p-1 transition-all md:group-hover:w-[192px]`}
        onClick={handleClick}
        target={target}
      >
        <Image
          priority
          src={iconSrc}
          alt={`${label} icon`}
          width={40}
          height={40}
        />

        <span className="w-full text-lg text-center uppercase transition-all text-secondary-500 menu-active-link:text-primary-100 dark:text-primary-100 dark:menu-active-link:text-secondary-500 md:opacity-0 md:group-hover:opacity-100">
          {label}
        </span>
      </a>
    </li>
  );
};

function Menu() {
  const { app } = useAppContext();
  const isDark = app.lightTheme;
  const handleThemeSwitch = () => {
    const newTheme = !app.lightTheme ? "dark" : "light";
    localStorage.setItem("theme", JSON.stringify(newTheme));
    app.setLightTheme(!app.lightTheme);
  };

  return (
    <div
      id="menu"
      className="fixed top-0 right-0 flex-col items-center justify-center hidden w-full h-full p-4 transition-all shadow-lg group bg-primary-100 dark:bg-secondary-100 md:left-0 md:flex md:w-20 md:translate-y-0 md:justify-between hover:md:w-56"
    >
      <Link
        href="/"
        className="flex h-[48px] w-full items-center overflow-hidden transition-all"
      >
        <Image
          priority
          src={isDark ? "/static/images/logo-flower_light.svg" : "/static/images/logo-flower_dark.svg"}
          alt="Poppie logo representing a Matthieu Munoz brand"
          width={48}
          height={48}
        />
        <span className="pr-1 text-lg leading-5 text-center uppercase transition-all text-secondary-500 dark:text-primary-100 md:opacity-0 md:group-hover:opacity-100">
          Matthieu Munoz
        </span>
      </Link>
      <nav>
        <ul className="flex h-[350px] flex-col items-center justify-between md:group-hover:w-full">
          <MenuItem
            app={app}
            href="#accueil"
            section={1}
            iconLight="/static/icons/home-light.svg"
            iconDark="/static/icons/home-dark.svg"
            label="Accueil"
          />
          <MenuItem
            app={app}
            href="#competences"
            section={2}
            iconLight="/static/icons/skill-light.svg"
            iconDark="/static/icons/skill-dark.svg"
            label="Compétences"
          />
          <MenuItem
            app={app}
            href="#projets"
            section={3}
            iconLight="/static/icons/project-light.svg"
            iconDark="/static/icons/project-dark.svg"
            label="Projets"
          />
          <MenuItem
            app={app}
            href="#contact"
            section={4}
            iconLight="/static/icons/contact-light.svg"
            iconDark="/static/icons/contact-dark.svg"
            label="Contact"
          />
          <MenuItem
            app={app}
            href="https://docs.matthieu-munoz.fr/resume-mmunoz.pdf"
            iconLight="/static/icons/resume-light.svg"
            iconDark="/static/icons/resume-dark.svg"
            label="Mon CV"
            target="_blank"
          />
        </ul>
      </nav>
      <div className="flex items-center justify-center h-20 text-secondary-500 dark:text-primary-100 md:h-24 md:flex-col md:justify-between">
        <div
          className="tooltip flex h-[48px] w-[51px] cursor-pointer items-center  whitespace-nowrap transition-all md:group-hover:w-[192px]"
          data-tip="Changer le theme du portfolio"
          onClick={handleThemeSwitch}
        >
          <ThemeToggle handler={handleThemeSwitch} />
          <span className="flex-1 w-0 text-lg text-center transition-all md:opacity-0 md:group-hover:opacity-100">
            Theme
          </span>
        </div>
        <div
          className="tooltip flex h-[48px] w-[51px] cursor-pointer items-center whitespace-nowrap transition-all md:group-hover:w-[192px] "
          data-tip="Changer le theme du portfolio"
          onClick={handleThemeSwitch}
        >
          <Image
            className="hidden rounded-lg shadow-sm menu-active-link:block dark:block dark:menu-active-link:hidden bg-secondary-100 dark:bg-primary-100"
            priority
            src="/static/icons/langue-dark.svg"
            alt="Small doc icon indicating the resumes"
            width={40}
            height={40}
          />
          <Image
            className="block rounded-lg shadow-sm menu-active-link:hidden dark:hidden dark:menu-active-link:block bg-secondary-100 dark:bg-primary-100"
            priority
            src="/static/icons/langue-light.svg"
            alt="Small doc icon indicating the resumes"
            width={40}
            height={40}
          />
          <span className="flex-1 w-0 text-lg text-center transition-all md:opacity-0 md:group-hover:opacity-100">
            Langue
          </span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
