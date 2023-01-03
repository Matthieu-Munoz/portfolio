// Dependencies
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// Local
import { useAppContext } from "../../context/state";
// Styles

/**
 * A React component used to switch between light and dark themes.
 */
export function ThemeToggle() {
  const { app } = useAppContext();
  const handleThemeSwitch = () => {
    const newTheme = app.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", JSON.stringify(newTheme));
    app.setTheme(newTheme);
  };

  return (
    <div className="themetoggle" onClick={handleThemeSwitch}>
      {app.theme === "dark" ? <BsFillMoonStarsFill className="themetoggle__switch" /> : <BsFillSunFill className="themetoggle__switch" />}
    </div>
  );
}
