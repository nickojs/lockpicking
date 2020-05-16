import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/Home';
import LockpadOptions from '../components/lockpadOptions/lockpadOptions';
import Lockpad from '../containers/Lockpad/Lockpad';
import Outcome from '../containers/Outcome/Outcome';

import withAnimation from '../hoc/withAnimation';

const routesArray = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/game-options', name: 'Options', Component: LockpadOptions },
  { path: '/game', name: 'Game', Component: Lockpad },
  { path: '/endgame', name: 'Endgame', Component: Outcome }
];

const routes = (
  <Switch>
    {routesArray.map(
      ({ path, Component }) => (
        <Route key={path} exact path={path} component={withAnimation(Component)} />
      )
    )}
  </Switch>

);

export default routes;
