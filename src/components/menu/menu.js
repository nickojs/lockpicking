import React, { useEffect, useState } from 'react';
import * as S from './styles';

const menu = (props) => {
  const menu = props.toggle ? (
    <nav>
      <ul>
        <li>Play</li>
        <li>Stats</li>
        <li>Login</li>
        <li>About</li>
      </ul>
    </nav>
  ) : null;

  return menu;
};

export default menu;
