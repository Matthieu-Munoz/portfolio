// Dependencies
// React-Redux
import Menu from "../Menu";
// Styles
import "./header.scss"

function Header() {
  return (
    <div className="header">
      <Menu />
      <div className="header__logo" />
    </div>
  );
}

export default Header;
