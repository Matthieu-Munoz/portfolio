"use client"
// Dependencies
import Image from "next/image";
import Link from "next/link";
// Local
import { useAppContext } from "@/app/context/state";
import { ThemeToggle } from "../ThemeToggle";

function Menu() {
  const { app } = useAppContext();
  const handleSectionChange = (section) => {
    app.setCurrentSection(section);
  };
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
          className="dark:hidden"
          priority
          src="/static/images/logo-flower_light.svg"
          alt="Poppie logo representing a Matthieu Munoz brand"
          width={48}
          height={48}
        />
        <Image
          className="hidden dark:block"
          priority
          src="/static/images/logo-flower_dark.svg"
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
          <li className="transition-all">
            <a
              href="#accueil"
              className={`${
                app.currentSection === 1 && "menu-active-link"
              } flex h-[48px] w-[48px] cursor-pointer items-center overflow-hidden whitespace-nowrap  p-1 transition-all  md:group-hover:w-[192px]`}
              onClick={() => handleSectionChange(1)}
            >
              <Image
                className="hidden menu-active-link:block dark:block dark:menu-active-link:hidden"
                priority
                src="/static/icons/home-light.svg"
                alt="House icon indicationg the home section"
                width={40}
                height={40}
              />
              <Image
                className="block menu-active-link:hidden dark:hidden dark:menu-active-link:block"
                priority
                src="/static/icons/home-dark.svg"
                alt="House icon indicationg the home section"
                width={40}
                height={40}
              />
              <span className="w-full text-lg text-center uppercase transition-all text-secondary-500 menu-active-link:text-primary-100 dark:text-primary-100 dark:menu-active-link:text-secondary-500 md:opacity-0 md:group-hover:opacity-100">
                Accueil
              </span>
            </a>
          </li>
          <li className="transition-all">
            <a
              href="#competences"
              className={`${
                app.currentSection === 2 && "menu-active-link"
              } flex h-[48px] w-[48px] cursor-pointer items-center overflow-hidden whitespace-nowrap  p-1 transition-all  md:group-hover:w-[192px]`}
              onClick={() => handleSectionChange(2)}
            >
              <Image
                className="hidden menu-active-link:block dark:block dark:menu-active-link:hidden"
                priority
                src="/static/icons/skill-light.svg"
                alt="Bulb icon indicationg the skills section"
                width={40}
                height={40}
              />
              <Image
                className="block menu-active-link:hidden dark:hidden dark:menu-active-link:block"
                priority
                src="/static/icons/skill-dark.svg"
                alt="Bulb icon indicationg the skills section"
                width={40}
                height={40}
              />
              <span className="w-full text-lg text-center uppercase transition-all text-secondary-500 menu-active-link:text-primary-100 dark:text-primary-100 dark:menu-active-link:text-secondary-500 md:opacity-0 md:group-hover:opacity-100">
                Compétences
              </span>
            </a>
          </li>
          <li className="transition-all">
            <a
              href="#projets"
              className={`${
                app.currentSection === 3 && "menu-active-link"
              } flex h-[48px] w-[48px] cursor-pointer items-center overflow-hidden whitespace-nowrap  p-1 transition-all  md:group-hover:w-[192px]`}
              onClick={() => handleSectionChange(3)}
            >
              <Image
                className="hidden menu-active-link:block dark:block dark:menu-active-link:hidden"
                priority
                src="/static/icons/project-light.svg"
                alt="Small square icon indicationg the projects section"
                width={40}
                height={40}
              />
              <Image
                className="block menu-active-link:hidden dark:hidden dark:menu-active-link:block"
                priority
                src="/static/icons/project-dark.svg"
                alt="Small square icon indicationg the projects section"
                width={40}
                height={40}
              />
              <span className="w-full text-lg text-center uppercase transition-all text-secondary-500 menu-active-link:text-primary-100 dark:text-primary-100 dark:menu-active-link:text-secondary-500 md:opacity-0 md:group-hover:opacity-100">
                Projets
              </span>
            </a>
          </li>
          <li className="transition-all">
            <a
              href="#contact"
              className={`${
                app.currentSection === 4 && "menu-active-link"
              } flex h-[48px] w-[48px] cursor-pointer items-center overflow-hidden whitespace-nowrap  p-1 transition-all  md:group-hover:w-[192px]`}
              onClick={() => handleSectionChange(4)}
            >
              <Image
                className="hidden menu-active-link:block dark:block dark:menu-active-link:hidden"
                priority
                src="/static/icons/contact-light.svg"
                alt="Envelope icon indicationg the contacts section"
                width={40}
                height={40}
              />
              <Image
                className="block menu-active-link:hidden dark:hidden dark:menu-active-link:block"
                priority
                src="/static/icons/contact-dark.svg"
                alt="Envelope icon indicationg the contacts section"
                width={40}
                height={40}
              />
              <span className="w-full text-lg text-center uppercase transition-all text-secondary-500 menu-active-link:text-primary-100 dark:text-primary-100 dark:menu-active-link:text-secondary-500 md:opacity-0 md:group-hover:opacity-100">
                Contact
              </span>
            </a>
          </li>
          <li className="transition-all">
            <a
              href="https://docs.matthieu-munoz.fr/resume-mmunoz.pdf"
              className="flex h-[48px] w-[48px] cursor-pointer items-center overflow-hidden whitespace-nowrap  p-1 transition-all  md:group-hover:w-[192px]"
            >
              <Image
                className="hidden menu-active-link:block dark:block dark:menu-active-link:hidden"
                priority
                src="/static/icons/resume-light.svg"
                alt="Small doc icon indicationg the resumes"
                width={40}
                height={40}
              />
              <Image
                className="block menu-active-link:hidden dark:hidden dark:menu-active-link:block"
                priority
                src="/static/icons/resume-dark.svg"
                alt="Small doc icon indicationg the resumes"
                width={40}
                height={40}
              />
              <span className="w-full text-lg text-center uppercase transition-all text-secondary-500 menu-active-link:text-primary-100 dark:text-primary-100 dark:menu-active-link:text-secondary-500 md:opacity-0 md:group-hover:opacity-100">
                Mon CV
              </span>
            </a>
          </li>
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
            alt="Small doc icon indicationg the resumes"
            width={40}
            height={40}
          />
          <Image
            className="block rounded-lg shadow-sm menu-active-link:hidden dark:hidden dark:menu-active-link:block bg-secondary-100 dark:bg-primary-100"
            priority
            src="/static/icons/langue-light.svg"
            alt="Small doc icon indicationg the resumes"
            width={40}
            height={40}
          />{" "}
          <span className="flex-1 w-0 text-lg text-center transition-all md:opacity-0 md:group-hover:opacity-100">
            Langue
          </span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
