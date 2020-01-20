/* eslint-disable linebreak-style */
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../store';
import rootReducer from '../reducers';


export const storeFactory = (initalState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initalState);
}
;
