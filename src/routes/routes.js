import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import LockpadMenu from '../containers/LockpadMenu/LockpadMenu';
import Lockpad from '../containers/Lockpad/Lockpad';
import Outcome from '../containers/Outcome/Outcome';
import About from '../containers/About/About';
import Login from '../containers/Login/Login';
import Logout from '../containers/Logout/Logout';
import Stats from '../containers/Stats/Stats';

import withNavigation from '../hoc/withNavigation';

const routesArray = [
  { path: '/game-options', name: 'Options', Component: LockpadMenu },
  { path: '/game', name: 'Game', Component: Lockpad },
  { path: '/endgame', name: 'Endgame', Component: Outcome },
  { path: '/about', name: 'About', Component: About },
  { path: '/login', name: 'Login', Component: Login },
  { path: '/logout', name: 'Logout', Component: Logout },
  { path: '/stats', name: 'Stats', Component: Stats }
];

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    {routesArray.map(
      ({ path, Component }) => (
        <Route key={path} path={path} component={withNavigation(Component)} />
      )
    )}
    <Redirect to="/" />
  </Switch>

);

export default routes;
