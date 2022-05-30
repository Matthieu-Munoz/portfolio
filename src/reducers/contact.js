import { CHANGE_FIELD, CONFIRM_SENDING, TOGGLE_LOADING } from "@/actions/contact";

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    isSent: false,
    isLoading: false,
};

function Reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case CONFIRM_SENDING:
            return {
                ...state,
                name: "",
                email: "",
                subject: "",
                message: "",
                isSent: action.value,
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.value,
            };
        default:
            return state;
    }
}

export default Reducer;