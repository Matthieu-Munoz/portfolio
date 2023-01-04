// Dependencies
import Script from "next/script";
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import { Montserrat } from "@next/font/google";
import classNames from "classnames";
// Local | React-Redux
import { useAppContext } from "../context/state";
import { Socials } from "./Socials";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Modal } from "./Modal";

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
        <Modal />
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
      <Script id="animation_js" beforeInteractive src="https://cdn.jsdelivr.net/gh/Matthieu-Munoz/mm-logo-js/animation_purge.min.js" />
    </main>
  );
}
