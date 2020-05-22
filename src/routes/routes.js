import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import LockpadMenu from '../containers/LockpadMenu/LockpadMenu';
import Lockpad from '../containers/Lockpad/Lockpad';
import Outcome from '../containers/Outcome/Outcome';
import About from '../containers/About/About';

import withAnimation from '../hoc/withAnimation';

const routesArray = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/game-options', name: 'Options', Component: LockpadMenu },
  { path: '/game', name: 'Game', Component: Lockpad },
  { path: '/endgame', name: 'Endgame', Component: Outcome },
  { path: '/about', name: 'About', Component: About }
];

const routes = (
  <Switch>
    {routesArray.map(
      ({ path, Component }) => (
        <Route key={path} exact path={path} component={withAnimation(Component)} />
      )
    )}
    <Redirect to="/" />
  </Switch>

);

export default routes;
