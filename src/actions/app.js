export const TOGGLE_ANIMATION = "TOGGLE_ANIMATION";
export const toggleAnimation = (value) => ({
  type: TOGGLE_ANIMATION,
  value,
});
export const TOGGLE_INTRO_SECTION = "TOGGLE_INTRO_SECTION";
export const toggleIntroSection = (value) => ({
  type: TOGGLE_INTRO_SECTION,
  value,
});
export const TOGGLE_INTRO_ANIMATION = "TOGGLE_INTRO_ANIMATION";
export const toggleIntroAnimation = (value) => ({
  type: TOGGLE_INTRO_ANIMATION,
  value,
});
// Used to switch between theme (dark/light)
export const TOGGLE_THEME = "TOGGLE_THEME";
export const toggleTheme = (theme) => ({
  type: TOGGLE_THEME,
  theme,
});
// Used to load the user preference (dark/light) from localStorage
export const LOAD_THEME = "LOAD_THEME";
export const loadTheme = () => ({
  type: LOAD_THEME,
});
// Used to save the user preference (dark/light) in localStorage
export const SAVE_THEME = "SAVE_THEME";
export const saveTheme = (theme) => ({
  type: SAVE_THEME,
  theme,
});
// Used to show/hide the menu
export const TOGGLE_MENU = "TOGGLE_MENU";
export const toggleMenu = (value) => ({
  type: TOGGLE_MENU,
  value,
});
// Used to display or hide the loader
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const toggleLoading = (value) => ({
  type: TOGGLE_LOADING,
  value,
});

export const TOGGLE_SCROLL = "TOGGLE_SCROLL";
export const toggleScroll = (value) => ({
  type: TOGGLE_SCROLL,
  value,
});

export const TOGGLE_MENU_DISPLAY = "TOGGLE_MENU_DISPLAY";
export const toggleMenuDisplay = (value) => ({
  type: TOGGLE_MENU_DISPLAY,
  value,
});

export const TOGGLE_MENU_TYPE = "TOGGLE_MENU_TYPE";
export const toggleMenuType = (value) => ({
  type: TOGGLE_MENU_TYPE,
  value,
});

export const TOGGLE_SECTION = "TOGGLE_SECTION";
export const toggleSection = (section, value) => ({
  type: TOGGLE_SECTION,
  section,
  value,
});

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const toggleModal = (component) => ({
  type: TOGGLE_MODAL,
  component,
});
// Switch between french and english
export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";
export const toggleLanguage = (language) => ({
  type: TOGGLE_LANGUAGE,
  language,
});