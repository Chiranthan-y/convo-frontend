import {applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
