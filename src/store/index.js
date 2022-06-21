import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducer from "Reducers";
import globalMiddleWare from "Middlewares/global";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(globalMiddleWare));

const store = createStore(reducer, enhancers);

export default store;
