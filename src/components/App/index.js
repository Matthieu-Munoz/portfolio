// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import * as Scroll from 'react-scroll';
import classNames from 'classnames';
// React-Redux
// import Header from '../Header';
// import Loader from '../Loader';
import { toggleAnimation, toggleIntroSection, toggleMenu, toggleMenuDisplay, toggleScroll } from '@/actions/app';
// Styles
import './app.scss';
import AnimatedLogo from '../AnimatedLogo';
import Header from '../Header';

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();
  const { loadAnimation, introSection, darkTheme, disableScroll, menuDisplay, menuOpened } = useSelector((state) => state.app);
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
        scroller.scrollTo('start', {
          duration: 1000,
          smooth: true,
          offset: 10,
          ignoreCancelEvents: true,
        })
        setTimeout(() => {
          dispatch(toggleIntroSection(false))
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
  const handleMenuDisplay = (value) => {
    dispatch(toggleMenuDisplay(value))
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
        {menuDisplay && <Header />}
        {introSection && <div className="section section--intro">
          <div className="intro__corners">
            <span className="intro__corners__corner intro__corners__corner__TL"></span>
            <span className="intro__corners__corner intro__corners__corner__TR"></span>
            <span className="intro__corners__corner intro__corners__corner__BR"></span>
            <span className="intro__corners__corner intro__corners__corner__BL"></span>
          </div>
          {loadAnimation && <AnimatedLogo />}
        </div>}
        <Waypoint
          onLeave={() => handleMenuDisplay(true)}
        />
        <ScrollElement name="start">
          <div className="section section--start">

          </div>
        </ScrollElement>
        <div className="section section--skills">

        </div>
      </div>
    </div>
  );
}

export default App;
