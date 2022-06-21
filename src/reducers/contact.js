import {
  CHANGE_FIELD,
  CONFIRM_SENDING,
  TOGGLE_ERROR,
  TOGGLE_LOADING,
} from "Actions/contact";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  nameError: false,
  emailError: false,
  subjectError: false,
  messageError: false,
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
    case TOGGLE_ERROR:
      return {
        ...state,
        [`${action.name}Error`]: action.value,
      };
    default:
      return state;
  }
}

export default Reducer;
