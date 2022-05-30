import { TOGGLE_PROJECTS_INDEX } from "@/actions/projects";

const initialState = {
    index: 0,
};

function Reducer(state = initialState, action = {}) {
    switch (action.type) {
        case TOGGLE_PROJECTS_INDEX:
            return {
                ...state,
                index: action.value,
            };
        default:
            return state;
    }
}

export default Reducer;