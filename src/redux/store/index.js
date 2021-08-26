// REDUX AND REDUX THUNK

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initalState = {};
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export { store };
