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

    // always reset the input, avoid keeping the state if menu closes
    // also resets the input if other keys are pressed inside the menu
    setKeyIdentifier(null);

    // special case, toggle menu with space key
    if (keyCode === 32) setMenuToggle(!menuToggle);

    // exit function if no WASD detected
    // now also checks for key 27 ('esc'), because it was freezing the menu
    if (!input || keyCode === 27) return;

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
    <div>
      <S.Container tabIndex="0" onKeyDown={keyDownHandler} isMenuOpen={menuToggle}>
        <S.InnerContainer>
          <S.Title>Skyrim</S.Title>
          <S.Text>lockpick simulator</S.Text>
          <hr />
          <S.TextSmall>Press space to start</S.TextSmall>
        </S.InnerContainer>
        {triggerRoute
          && <Redirect to={keyIdentifier.path} />}
      </S.Container>
      <Menu
        toggle={menuToggle}
        keyPressed={keyIdentifier}
      />
    </div>
  );
};

export default Home;
