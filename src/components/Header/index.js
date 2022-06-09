// Dependencies
// React-Redux
import Menu from "../Menu";
// Styles
import "./header.scss"

function Header() {
  return (
    <header className="header">
      <Menu />
      <div className="header__logo" />
    </header>
  );
}

export default Header;
