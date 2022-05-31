import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from '@/reducers';
import globalMiddleWare from '@/middlewares/global';

const composeEnhancers = compose;

const enhancers = composeEnhancers(
  applyMiddleware(globalMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
