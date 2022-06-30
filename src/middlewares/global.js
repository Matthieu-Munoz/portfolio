import { SECTIONS_SCROLL, toggleSectionProp } from "Actions/sections";

const globalMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SECTIONS_SCROLL:
      console.log("fired");
      // Section snaping
      const TIME_OUT = 600; // It should be the same transition time of the sections
      const body = action.data.body;
      const sectionsQty = 4;
      const { startFlag, initialScroll, qty, mainSection, nextSection } =
        store.getState().sections;

      if (startFlag) {
        const scrollDown = window.scrollY >= initialScroll;
        const scrollLimit = qty >= 1 && qty <= sectionsQty;
        // Verify that the scroll does not exceed the number of sections
        if (scrollLimit) {
          body.style.overflowY = "hidden"; // Lock el scroll
          if (scrollDown && qty < sectionsQty) {
            store.dispatch(
              toggleSectionProp("mainSection", action.data[`s${qty}`].current)
            );
            store.dispatch(
              toggleSectionProp(
                "nextSection",
                action.data[`s${qty + 1}`].current
              )
            );

            mainSection.style.transform = "translateY(-100vh)";
            nextSection.style.transform = "translateY(0)";

            store.dispatch(toggleSectionProp("qty", qty + 1));
          } else if (!scrollDown && qty > 1) {
            store.dispatch(
              toggleSectionProp(
                "mainSection",
                action.data[`s${qty - 1}`].current
              )
            );
            store.dispatch(
              toggleSectionProp("nextSection", action.data[`s${qty}`].current)
            );

            mainSection.style.transform = "translateY(0)";
            nextSection.style.transform = "translateY(100vh)";

            store.dispatch(toggleSectionProp("qty", qty - 1));
          }
        }
        // dispatch(toggleSection(menuSection, true));
        // Wait for the scrolling to finish to reset the values
        setTimeout(() => {
          store.dispatch(toggleSectionProp("initialScroll", window.scrollY));
          store.dispatch(toggleSectionProp("startFlag", true));
          body.style.overflowY = "scroll"; // Unlock scroll
        }, TIME_OUT);
        store.dispatch(toggleSectionProp("startFlag", false));
      }
      // Keep scrollbar in the middle of the viewport
      window.scroll(0, window.screen.height);
      next(action);
      break;
    default:
      next(action);
  }
};

export default globalMiddleWare;
