import { TOGGLE_PROJECT_INFO } from "Actions/projects";

const initialState = {
  index: 0,
  project: {},
};

function Reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PROJECT_INFO:
      return {
        ...state,
        project: action.project,
      };
    default:
      return state;
  }
}

export default Reducer;
