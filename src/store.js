import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import appReducer from './containers/App/reducer';

export const history = createHistory();

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
