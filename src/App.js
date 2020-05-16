import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import LockpadOptions from './components/lockpadOptions/lockpadOptions';
import Lockpad from './containers/Lockpad/Lockpad';
import Outcome from './containers/Outcome/Outcome';

const app = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/game-options" component={LockpadOptions} />
    <Route path="/game" component={Lockpad} />
    <Route path="/endgame" component={Outcome} />
  </Switch>
);

export default app;
