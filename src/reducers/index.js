import { combineReducers } from 'redux';
import appReducer from './app';
import contactReducer from './contact';
import projectsReducer from './projects';

const rootReducer = combineReducers({
  app: appReducer,
  contact: contactReducer,
  projects: projectsReducer,
});

export default rootReducer;
