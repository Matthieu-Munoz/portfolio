// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import * as Scroll from 'react-scroll';
import classNames from 'classnames';
// React-Redux
// import Header from '../Header';
// import Loader from '../Loader';
import { toggleMenu, toggleMenuDisplay, toggleScroll } from '@/actions/app';
// Styles
import './app.scss';
import AnimatedLogo from '../AnimatedLogo';
import Header from '../Header';

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();



  const { darkTheme, disableScroll, menuDisplay } = useSelector((state) => state.app);
  const themeClass = classNames('theme', { 'theme--dark': darkTheme }, { 'theme--light': !darkTheme });
  const appClass = classNames('app', { 'disable-scroll': disableScroll });
  const menuOpen = useSelector((state) => state.app.menuOpened)
  const scroller = Scroll.scroller;
  const scroll = Scroll.animateScroll;
  const ScrollElement = Scroll.Element;

  useEffect(
    () => {
      // dispatch(loadTheme());
      setTimeout(() => {
        dispatch(toggleScroll(false));
        scroller.scrollTo('start', {
          duration: 1000,
          smooth: true,
          offset: 10,
          ignoreCancelEvents: true,
        })
      }, 4000);
    },
    [dispatch],
  );

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


  return (
    <div className={themeClass}>
      <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)} >
        {menuDisplay && <Header />}
        <div className="section section--intro">
          <div className="intro__corners">
            <span className="intro__corners__corner intro__corners__corner__TL"></span>
            <span className="intro__corners__corner intro__corners__corner__TR"></span>
            <span className="intro__corners__corner intro__corners__corner__BR"></span>
            <span className="intro__corners__corner intro__corners__corner__BL"></span>
          </div>
          <AnimatedLogo />
        </div>
        <Waypoint
          onEnter={() => handleMenuDisplay(false)}
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
