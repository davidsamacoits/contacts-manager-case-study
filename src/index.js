import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';

import { routerReducer, routerMiddleware } from 'react-router-redux';

// Routes
import Routes from './nav/Routes';

// Reducers
import contactReducer from './services/contactService/reducer';

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
    contactReducer,
    routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routeMiddleware, sagaMiddleware),
);
/* eslint-enable */
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root'),
);

