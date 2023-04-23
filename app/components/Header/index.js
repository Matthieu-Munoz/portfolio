"use client"
import Menu from "./menu";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-end w-full h-16 pr-4 bg-primary-100 md:bg-transparent">
      <Menu />
    </header>
  );
};

export default Header;
