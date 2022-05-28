import {
    TOGGLE_THEME, SAVE_THEME, TOGGLE_MENU, TOGGLE_LOADING, TOGGLE_SCROLL, TOGGLE_MENU_DISPLAY, TOGGLE_SECTION, TOGGLE_ANIMATION, TOGGLE_INTRO_SECTION
} from '@/actions/app';

export const initialState = {
    loadAnimation: false,
    introSection: true,
    darkTheme: false,
    disableScroll: true,
    menuOpened: false,
    menuDisplay: false,
    currentSection: {
        home: true,
        skills: false,
        project: false,
        contact: false,
    },
    loading: true,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_ANIMATION:
            return {
                ...state,
                loadAnimation: action.value,
            };
        case TOGGLE_INTRO_SECTION:
            return {
                ...state,
                introSection: action.value,
            };
        case TOGGLE_THEME:
            // Fired when the user wants to switch theme
            return {
                ...state,
                darkTheme: action.theme,
            };
        case SAVE_THEME:
            // Fired on load when there is a theme in localStorage to save it in the state
            return {
                ...state,
                darkTheme: action.theme,
            };
        case TOGGLE_MENU:
            return {
                ...state,
                menuOpened: action.value,
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.value,
            };
        case TOGGLE_SCROLL:
            return {
                ...state,
                disableScroll: action.value,
            };
        case TOGGLE_MENU_DISPLAY:
            return {
                ...state,
                menuDisplay: action.value,
            };
        case TOGGLE_SECTION:
            return {
                ...state,
                currentSection: {
                    home: false,
                    skills: false,
                    project: false,
                    contact: false,
                    [action.section]: action.value,
                },
            };
        default:
            return state;
    }
};

export default reducer;
