// Dependencies
import { createContext, useContext, useEffect, useRef } from "react";
// Local | React-Redux
// Styles
import "./cursor.scss";

const CursorContext = createContext({});

function Cursor(props) {
  const dot = useRef(null);
  const dotOutline = useRef(null);

  const delay = 8;

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };
  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };
  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX.current = e.pageX;
    endY.current = e.pageY;
    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };
  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  const addScrollEventListeners = () => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
  };
  const removeScrollEventListeners = () => {
    document.removeEventListener("mousedown", mouseOverEvent);
    document.removeEventListener("mouseup", mouseOutEvent);
    document.removeEventListener("mousemove", mouseMoveEvent);
    document.removeEventListener("mouseenter", mouseEnterEvent);
    document.removeEventListener("mouseleave", mouseLeaveEvent);
  };

  useEffect(() => {
    addScrollEventListeners();
    animateDotOutline();
    return () => {
      removeScrollEventListeners();
      cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <CursorContext.Provider value={{ mouseOverEvent, mouseOutEvent }}>
      {props.children}
      <div ref={dotOutline} className="cursor-dot-outline" />
      <div ref={dot} className="cursor-dot" />
    </CursorContext.Provider>
  );
}

export default Cursor;
export const useCursorContext = () => useContext(CursorContext);
