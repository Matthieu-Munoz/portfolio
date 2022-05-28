// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { AiOutlineGlobal } from "react-icons/ai";
import * as Scroll from 'react-scroll';
// React-Redux
import { toggleMenu, toggleSection } from '@/actions/app';
import ThemeToggle from '../ThemeToggle';
// Styles
import "./menu.scss"

function Menu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector((state) => state.app.menuOpened);
    const { home, skills, projects, contact } = useSelector((state) => state.app.currentSection);
    const menuCssClass = classNames('menu', { 'open': menuStatus });
    const homeCssClass = classNames('menu__links__link', { 'menu__links__link--active': home });
    const skillsCssClass = classNames('menu__links__link', { 'menu__links__link--active': skills });
    const projectCssClass = classNames('menu__links__link', { 'menu__links__link--active': projects });
    const contactCssClass = classNames('menu__links__link', { 'menu__links__link--active': contact });
    const burgerCssClass = classNames('burger burger-squeeze', { 'open': menuStatus });
    const scroller = Scroll.scroller;

    const handleSectionSwitch = (section) => {
        dispatch(toggleSection(section, true));
        dispatch(toggleMenu(false))
        scroller.scrollTo(section, {
            duration: 1000,
            smooth: true,
            ignoreCancelEvents: true,
        })
    }
    return (
        <>
            <div className="menu_toggle">
                <div className={burgerCssClass} onClick={() => dispatch(toggleMenu(!menuStatus))}>
                    <div className="burger-lines"></div>
                </div>
            </div>
            <div className={menuCssClass}>
                <a href="/" target="_blank" rel="noopener noreferrer"><div className="menu__logo" /></a>
                <div className="menu__links">
                    <div className={homeCssClass} data-section="home" onClick={() => handleSectionSwitch('home')} >
                        Accueil
                    </div>
                    <div className={skillsCssClass} data-section="skills" onClick={() => handleSectionSwitch('skills')}>
                        Compétences
                    </div>
                    <div className={projectCssClass} data-section="projects" onClick={() => handleSectionSwitch('projects')}>
                        Projets
                    </div>
                    <div className={contactCssClass} data-section="contact" onClick={() => handleSectionSwitch('contact')}>
                        Contact
                    </div>
                </div>
                <div className="menu__toggles">
                    <div className="menu__toggles__ctn">
                        <ThemeToggle className="menu__theme_toggle" />
                        <div className="menu__toggles__ctn__info">Theme</div>
                    </div>
                    <div className="menu__toggles__ctn">
                        <AiOutlineGlobal className="menu__language_toggle" />
                        <div className="menu__toggles__ctn__info">Langue</div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Menu;
