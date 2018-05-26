import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';

import { routerReducer, routerMiddleware } from 'react-router-redux';

// Routes
import Routes from './nav/Routes';

// Reducers
import contactReducer from './services/contactService/reducer';

// Create a history
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to the store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    contactReducer,
    routerReducer,
  }),
  applyMiddleware(middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root'),
);

