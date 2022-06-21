// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// React-Redux
import { toggleTheme } from "Actions/app";
// Styles
import "./themetoggle.scss";

/**
 * A React component used to switch between light and dark themes.
 */
function ThemeToggle() {
  const currentTheme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();
  const handleThemeSwitch = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", JSON.stringify(newTheme));
    dispatch(toggleTheme(newTheme));
  };

  return (
    <div className="themetoggle" onClick={handleThemeSwitch}>
      {currentTheme === "dark" ? (
        <BsFillMoonStarsFill className="themetoggle__switch" />
      ) : (
        <BsFillSunFill className="themetoggle__switch" />
      )}
    </div>
  );
}

export default ThemeToggle;
