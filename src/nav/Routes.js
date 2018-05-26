import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Directory from '../features/Directory';
import Detail from '../features/Detail';
import NotFound from '../features/NotFound';

const ROUTES = {
  DIRECTORY: '/',
  DETAIL: '/contact/:contactId',
  NOTFOUND: '/404',
  ALL: '/*',
};

const propTypes = {
  history: PropTypes.object.isRequired,
};

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={ROUTES.DIRECTORY} component={Directory} />
      <Route path={ROUTES.DETAIL} component={Detail} />
      <Route path={ROUTES.NOTFOUND} component={NotFound} />
      <Redirect from={ROUTES.ALL} to={ROUTES.NOTFOUND} />
    </Switch>
  </ConnectedRouter>
);

Routes.propTypes = propTypes;

export default Routes;
