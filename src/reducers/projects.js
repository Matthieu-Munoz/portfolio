import { TOGGLE_PROJECTS_INDEX, TOGGLE_PROJECT_INFO } from "@/actions/projects";

const initialState = {
    index: 0,
    project: {},
};

function Reducer(state = initialState, action = {}) {
    switch (action.type) {
        case TOGGLE_PROJECTS_INDEX:
            return {
                ...state,
                index: action.value,
            };
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