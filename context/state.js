import { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const [introSection, setIntroSection] = useState(true);
  const [introAnimation, setIntroAnimation] = useState(false);
  const [theme, setTheme] = useState("light");
  const [disableScroll, setDisableScroll] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalComponent, setModalComponent] = useState("");
  const [currentSection, setCurrentSection] = useState({
    home: true,
    skills: false,
    projects: false,
    contact: false,
  });
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("french");
  const toggleSection = (section, value) => {
    setCurrentSection({
      home: false,
      skills: false,
      projects: false,
      contact: false,
      [section]: value,
    });
  };
  const toggleModal = (component) => {
    setModalOpened(!modalOpened);
    setModalComponent(component);
  };

  let sharedState = {
    app: {
      loadAnimation,
      setLoadAnimation,
      introSection,
      setIntroSection,
      introAnimation,
      setIntroAnimation,
      theme,
      setTheme,
      disableScroll,
      setDisableScroll,
      menuOpened,
      setMenuOpened,
      menuDisplay,
      setMenuDisplay,
      modalComponent,
      currentSection,
      loading,
      setLoading,
      language,
      setLanguage,
      toggleSection,
      toggleModal,
    },
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
