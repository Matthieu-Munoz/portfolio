// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import * as Scroll from 'react-scroll';
import classNames from 'classnames';
// Local | React-Redux
import { toggleAnimation, toggleIntroSection, toggleMenu, toggleMenuDisplay, toggleScroll, toggleSection } from '@/actions/app';
import AnimatedLogo from '../AnimatedLogo';
import Header from '../Header';
// Styles
import 'cooltipz-css';
import './app.scss';
import Home from '../Home';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Socials from '../Socials';
import Modal from '../Modal';

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();
  const { loadAnimation, introSection, darkTheme, disableScroll, menuDisplay } = useSelector((state) => state.app);
  const themeClass = classNames('theme', { 'theme--dark': darkTheme }, { 'theme--light': !darkTheme });
  const appClass = classNames('app', { 'disable-scroll': disableScroll });
  const menuOpen = useSelector((state) => state.app.menuOpened)
  const scroller = Scroll.scroller;
  const ScrollElement = Scroll.Element;
  let checkIntro = false;

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  const debouncedHandleResize = debounce(() => {
    dispatch(toggleMenu(false))
  }, 500)

  const handlePageIntroListener = (evt) => {
    if (evt.target.visibilityState === "visible") {
      handlePageIntro();
    }
  }

  const handlePageIntro = () => {
    if (!checkIntro) {
      checkIntro = true;
      dispatch(toggleAnimation(true));
      setTimeout(() => {
        dispatch(toggleScroll(false));
        scroller.scrollTo('home', {
          duration: 1000,
          smooth: true,
          ignoreCancelEvents: true,
        })
        setTimeout(() => {
          dispatch(toggleIntroSection(false))
          dispatch(toggleMenuDisplay(true))
        }, 1100);
      }, 3000);
    }
  }
  /**
   * Close the menu when anything BUT the menu/burgerIcon is clicked
   * @param {*} evt 
   */
  const handleMenu = (evt, menuOpen) => {
    const str = JSON.stringify(evt.target.className);
    const res = str.includes("menu") || str.includes("burger");
    if (!res && menuOpen) {
      dispatch(toggleMenu(false))
    }
  }
  const handleSwitchSection = (section) => {
    dispatch(toggleSection(section, true));
  }

  useEffect(
    () => {
      window.addEventListener('resize', debouncedHandleResize)
      document.addEventListener("visibilitychange", handlePageIntroListener);
      if (!document.hidden) {
        handlePageIntro();
      }
      // dispatch(loadTheme());
      return _ => {
        window.removeEventListener('resize', debouncedHandleResize)
        document.removeEventListener("visibilitychange", handlePageIntroListener);
      }
    },
    [],
  );

  return (
    <div className={themeClass}>
      <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)} >
        {menuDisplay && <> <Header /><Socials /></>}
        {introSection && <div className="section section--intro">
          <div className="intro__corners">
            <span className="intro__corners__corner intro__corners__corner__TL"></span>
            <span className="intro__corners__corner intro__corners__corner__TR"></span>
            <span className="intro__corners__corner intro__corners__corner__BR"></span>
            <span className="intro__corners__corner intro__corners__corner__BL"></span>
          </div>
          {loadAnimation && <AnimatedLogo />}
        </div>}
        <Modal />
        <ScrollElement name="home">
          <Waypoint onEnter={() => handleSwitchSection('home')}>
            <div className="section section--home">
              <Home />
            </div>
          </Waypoint>
        </ScrollElement>
        <ScrollElement name="skills">
          <Waypoint onEnter={() => handleSwitchSection('skills')}>
            <div className="section section--skills">
              <Skills />
            </div>
          </Waypoint>
        </ScrollElement>
        <ScrollElement name="projects">
          <Waypoint onEnter={() => handleSwitchSection('projects')}>
            <div className="section section--projects">
              <Projects />
            </div>
          </Waypoint>
        </ScrollElement>
        <ScrollElement name="contact">
          <Waypoint onEnter={() => handleSwitchSection('contact')}>
            <div className="section section--contact">
              <Contact />
            </div>
          </Waypoint>
        </ScrollElement>
        <div className="footer">
          Réalisé par Matthieu Munoz, code disponible<a href="https://github.com/Matthieu-Munoz/portfolio" target="_blank" rel="noopener noreferrer">ici</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
