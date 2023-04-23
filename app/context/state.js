"use client"
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [lightTheme, setLightTheme] = useState(true),
    [currentSection, setCurrentSection] = useState(1);

  let sharedState = {
    app: {
      lightTheme,
      setLightTheme,
      currentSection,
      setCurrentSection,
    },
    projects: {},
    contact: {},
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
