// Dependencies
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Montserrat } from "@next/font/google";
import { useAppContext } from "../context/state";
import classNames from "classnames";
// Local | React-Redux
import { Socials } from "./Socials";
import { Header } from "./Header";
import { Intro } from "./Intro";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }) {
  const { app } = useAppContext();
  // -- CSS Class
  // Applying theme
  const themeClass = classNames("theme", { "theme--dark": app.theme === "dark" }, { "theme--light": app.theme === "light" });
  // Disabeling scroll while the intro is playing
  const appClass = classNames("app", {
    "disable-scroll": app.disableScroll,
  });

  // const loadTheme = () => {
  //   const storageTheme = localStorage.getItem("theme");
  //   if (storageTheme !== null) {
  //     app.setTheme(JSON.parse(storageTheme));
  //   }
  // };

  /**
   * Close the menu when anything BUT the menu/burgerIcon is clicked
   * @param {*} evt
   */
  const handleMenu = (evt, menuOpen) => {
    const str = JSON.stringify(evt.target.className);
    const res = str.includes("menu") || str.includes("burger");
    if (!res && menuOpen) {
      setMenuOpened(false);
    }
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme !== null) {
      app.setTheme(JSON.parse(storageTheme));
    }
  }, [app]);

  const { ref: contactRef, inView: contactInView } = useInView();
  const { ref: projectRef, inView: projectInView } = useInView();


  const anchors = ["home", "skills", "projects", "contact", "footer"];
  return (
    <main className={themeClass}>
      <div className={`${montserrat.className} ${appClass}`} onClick={(evt) => handleMenu(evt, app.menuOpen)}>
        {app.menuDisplay && (
          <>
          <Header />
          <Socials />
          </>
        )}
         <Intro />
        {/*
      <Modal /> */}
        <ReactFullpage
          licenseKey={"KNXF6-QO9NI-YH0AI-7I377-OOOYM"}
          anchors={anchors}
          lockAnchors={true}
          scrollOverflow={true}
          responsiveWidth={800}
          onLeave={(origin, destination, direction) => {
            app.toggleSection(destination.anchor, true);
          }}
          render={() => {
            return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
          }}
        />
      </div>
    </main>
  );
}
