import React, { useState, useRef, useEffect } from 'react';

import * as S from './styles';
import { Title, TextSmall, InnerContainer } from '../../generalStyles';
import Forms from './forms/forms';

import SideMenu from './sideMenu/sideMenu';

const Auth = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [triggerForm, setTriggerForm] = useState(false);
  const [index, setIndex] = useState(0);
  const container = useRef(null);

  // focus the window to enable input
  useEffect(() => {
    container.current.focus();
  }, []);

  const keyDownHandler = ({ nativeEvent }) => {
    const { keyCode } = nativeEvent;
    const currentFocusedElement = document.activeElement;

    // only toggles the menu if form is not being used (focus)
    if (keyCode === 32
      && currentFocusedElement === container.current) {
      setToggleMenu(!toggleMenu);
      setTriggerForm(false);
    }

    if (toggleMenu) {
      switch (keyCode) {
        case 87:
        case 38:
          if (index > 0) setIndex((prevIndex) => prevIndex - 1);
          break;
        case 83:
        case 40:
          if (index < 4) setIndex((prevIndex) => prevIndex + 1);
          break;
        case 68:
        case 39:
          setTriggerForm(true);
          setToggleMenu(false);
          break;
        default:
          break;
      }
    }
  };

  const mouseDownHandler = (e) => {
    e.preventDefault();
    container.current.focus();
  };

  const changeFormType = (i) => setIndex(i);

  return (
    <>
      <S.Container
        tabIndex="0"
        ref={container}
        toggle={toggleMenu}
        onKeyDown={keyDownHandler}
      >
        <InnerContainer>
          <Title>Login</Title>
          <TextSmall>Press space to open menu</TextSmall>
        </InnerContainer>
        {triggerForm
          && <Forms index={index} changeForm={changeFormType} />}
      </S.Container>
      <SideMenu
        toggle={toggleMenu}
        index={index}
        clicked={mouseDownHandler}
      />
    </>
  );
};

export default Auth;
