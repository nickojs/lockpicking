import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import LockpadMenu from '../containers/LockpadMenu/LockpadMenu';
import Lockpad from '../containers/Lockpad/Lockpad';
import Outcome from '../containers/Outcome/Outcome';
import About from '../containers/About/About';

import withAnimation from '../hoc/withAnimation';
import withNavigation from '../hoc/withNavigation';

const routesArray = [
  { path: '/game-options', name: 'Options', Component: LockpadMenu },
  { path: '/game', name: 'Game', Component: Lockpad },
  { path: '/endgame', name: 'Endgame', Component: Outcome },
  { path: '/about', name: 'About', Component: About }
];

const routes = (
  <Switch>
    <Route exact path="/" component={withAnimation(Home)} />
    {routesArray.map(
      ({ path, Component }) => (
        <Route key={path} path={path} component={withAnimation(withNavigation(Component))} />
      )
    )}
    <Redirect to="/" />
  </Switch>

);

export default routes;
