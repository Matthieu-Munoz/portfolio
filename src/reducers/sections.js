import { TOGGLE_SECTION_PROP } from "Actions/sections";

const initialState = {
  startFlag: true,
  initialScroll: window.scrollY,
  qty: 1,
  mainSection: null,
  nextSection: null,
  menuSection: "home",
};

function Reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_SECTION_PROP:
      return {
        ...state,
        [action.prop]: action.value,
      };
    default:
      return state;
  }
}

export default Reducer;
