import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/menu/menu';
import * as S from './styles';

const Home = (props) => {
  const [keyIdentifier, setKeyIdentifier] = useState(null);
  const [triggerRoute, setTriggerRoute] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const keyFilter = {
    87: {
      key: 'w',
      path: '/game-options'
    },
    65: {
      key: 'a',
      path: '/'
    },
    68: {
      key: 'd',
      path: '/'
    },
    83: {
      key: 's',
      path: '/game'
    }
  };

  // this needs refactoring
  const keyDownHandler = ({ nativeEvent }) => {
    const { keyCode } = nativeEvent;
    const input = keyFilter[keyCode];

    // special case, toggle menu with any key besides WASD (input)
    if (keyCode === 32 && !input) setMenuToggle(!menuToggle);

    // exit function if no WASD detected
    if (!input) return;

    // keys will be saved only if menu is up
    if (menuToggle) {
      // saves WASD current key
      if (input) setKeyIdentifier(input);

      // compares keyIdentifier w/ current input to check for repetitive input
      if (keyIdentifier
          && input.key === keyIdentifier.key) {
        setTriggerRoute(!triggerRoute);
      } else {
        setTriggerRoute(false);
      }
    }
  };

  return (
    <S.Container tabIndex="0" onKeyDown={keyDownHandler}>
      <S.InnerContainer>
        <S.Title>Skyrim</S.Title>
        <S.Text>lockpick simulator</S.Text>
        <hr />
        <S.TextSmall>Press space to start</S.TextSmall>
        <Menu
          toggle={menuToggle}
          keyPressed={keyIdentifier}
        />
      </S.InnerContainer>
      {triggerRoute
        && <Redirect to={keyIdentifier.path} />}
    </S.Container>
  );
};

export default Home;
