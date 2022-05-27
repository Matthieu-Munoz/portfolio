// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { AiOutlineGlobal } from "react-icons/ai";
// React-Redux
import { toggleMenu, toggleSection } from '@/actions/app';
import ThemeToggle from '../ThemeToggle';
// Styles
import "./menu.scss"

function Menu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector((state) => state.app.menuOpened);
    const { home, skills, project, contact } = useSelector((state) => state.app.currentSection);
    const menuCssClass = classNames('menu', { 'open': menuStatus });
    const homeCssClass = classNames('menu__links__link', { 'menu__links__link--active': home });
    const skillsCssClass = classNames('menu__links__link', { 'menu__links__link--active': skills });
    const projectCssClass = classNames('menu__links__link', { 'menu__links__link--active': project });
    const contactCssClass = classNames('menu__links__link', { 'menu__links__link--active': contact });
    const burgerCssClass = classNames('burger burger-squeeze', { 'open': menuStatus });

    const handleSectionSwitch = (section) => {
        dispatch(toggleSection(section, true));
    }
    return (
        <>
            <div className="menu_toggle">
                <div className={burgerCssClass} onClick={() => dispatch(toggleMenu(!menuStatus))}>
                    <div className="burger-lines"></div>
                </div>
            </div>
            <div className={menuCssClass}>
                <div className="menu__logo" />
                <div className="menu__links">
                    <div className={homeCssClass} data-section="home" onClick={() => handleSectionSwitch('home')} >

                    </div>
                    <div className={skillsCssClass} data-section="skills" onClick={() => handleSectionSwitch('skills')}>

                    </div>
                    <div className={projectCssClass} data-section="project" onClick={() => handleSectionSwitch('project')}>

                    </div>
                    <div className={contactCssClass} data-section="contact" onClick={() => handleSectionSwitch('contact')}>

                    </div>
                </div>
                <div className="menu__toggles">
                    <ThemeToggle className="menu__theme_toggle" />
                    <AiOutlineGlobal className="menu__language_toggle" />
                </div>

            </div>
        </>
    );
}

export default Menu;
