import { combineReducers } from "redux";
import appReducer from "./app";
import contactReducer from "./contact";
import projectsReducer from "./projects";
import sectionsReducer from "./sections";

const rootReducer = combineReducers({
  app: appReducer,
  contact: contactReducer,
  projects: projectsReducer,
  sections: sectionsReducer,
});

export default rootReducer;
