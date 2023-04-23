"use client"
// Dependencies
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// Local
import { useAppContext } from "@/app/context/state";
// Styles

/**
 * A React component used to switch between light and dark themes.
 */
export function ThemeToggle({handler}) {
  const { app } = useAppContext();
  return (
    <div
      className="flex h-[2rem] w-[51px] transition-all cursor-pointer items-center rounded-full bg-secondary-100 shadow-inner dark:bg-primary-100"
      onClick={handler}
    >
      {!app.lightTheme ? (
        <BsFillMoonStarsFill className="h-[1.6rem] w-[1.6rem] animate-toggleOn rounded-full bg-beige-200 p-1 text-primary-500 dark:bg-primary-500 dark:text-beige-200" />
      ) : (
        <BsFillSunFill className="ml-1 h-[1.6rem] w-[1.6rem] animate-toggleOff rounded-full bg-beige-200 p-1 text-primary-500 dark:bg-primary-500 dark:text-beige-200" />
      )}
    </div>
  );
}
