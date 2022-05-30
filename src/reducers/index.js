import { combineReducers } from 'redux';
import appReducer from './app';
import contactReducer from './contact';

const rootReducer = combineReducers({
  app: appReducer,
  contact: contactReducer,
});

export default rootReducer;
