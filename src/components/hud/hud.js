import React from 'react';

const HUD = (props) => (
  <div>
    <h1>Total picks: {props.picks}</h1>
    <h1>Pick life: {props.life}</h1>
  </div>
);

export default HUD;
