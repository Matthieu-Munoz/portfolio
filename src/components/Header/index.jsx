// Dependencies
// React-Redux
import { Menu } from "../Menu";
// Styles
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <Menu />
      <div className="header__logo" />
    </header>
  );
}
