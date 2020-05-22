import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../../store/actions/user';

import * as S from './styles';
import Menu from '../../components/menu/menu';

const Home = () => {
  const [keyIdentifier, setKeyIdentifier] = useState(null);
  const [triggerRoute, setTriggerRoute] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const container = useRef(null);
  const dispatch = useDispatch();

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
      path: '/about'
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

  const mouseDownHandler = (e) => {
    e.preventDefault();
    container.current.focus();
  };

  useEffect(() => {
    if (triggerRoute) dispatch(setNavigation(true));
  }, [dispatch, triggerRoute]);

  return (
    <div>
      <S.Container ref={container} tabIndex="0" onKeyDown={keyDownHandler} isMenuOpen={menuToggle}>
        <S.InnerContainer>
          <S.Title>Skyrim</S.Title>
          <S.Text>lockpick simulator</S.Text>
          <hr />
          <S.TextSmall>Press space to start</S.TextSmall>
        </S.InnerContainer>
      </S.Container>
      <Menu
        toggle={menuToggle}
        keyPressed={keyIdentifier}
        clicked={mouseDownHandler}
      />
      {triggerRoute
        && <Redirect to={keyIdentifier.path} />}
    </div>
  );
};

export default Home;
