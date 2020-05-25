import React, { useState, useEffect, useRef } from 'react';

import * as S from './styles';
import { Title, TextSmall } from '../../generalStyles';
import Forms from '../../components/forms/forms';

import SideMenu from '../../components/sideMenu/sideMenu';

const Login = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [triggerForm, setTriggerForm] = useState(false);
  const [index, setIndex] = useState(0);
  const container = useRef(null);

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
          if (index < 1) setIndex((prevIndex) => prevIndex + 1);
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


  return (
    <>
      <S.Container
        tabIndex="0"
        ref={container}
        toggle={toggleMenu}
        onKeyDown={keyDownHandler}
      >
        <Title>Login</Title>
        <TextSmall>Press space to open menu</TextSmall>
        {triggerForm
          && <Forms index={index} />}
      </S.Container>
      <SideMenu
        toggle={toggleMenu}
        index={index}
        clicked={mouseDownHandler}
      />
    </>
  );
};

export default Login;
