import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';

import { routerReducer, routerMiddleware } from 'react-router-redux';

// Actions to execute when the application is loading
import { contatsLoadRequest } from './services/contactService/actions';

// Routes
import Routes from './nav/Routes';

// Reducers
import reducers from './globalRedux/reducers';

// Sagas
import sagas from './globalRedux/sagas';

// Create a history
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history);

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Add the reducer to the store on the `router` key
// Also apply our middleware for navigating
/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    ...reducers,
    routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routeMiddleware, sagaMiddleware),
);
/* eslint-enable */
sagaMiddleware.run(sagas);

// Load contacts for the first time with paraneters defined in directoryReducer
const { order, search } = store.getState().directoryReducer;
store.dispatch(contatsLoadRequest(order, search));

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root'),
);

