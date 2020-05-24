import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';
import { Title, TextSmall } from '../../generalStyles';

import SideMenu from '../../components/sideMenu/sideMenu';
import Dialog from '../../components/dialog/dialog';

const Login = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [index, setIndex] = useState(0);
  const container = useRef(null);
  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);


  const keyDownHandler = ({ nativeEvent }) => {
    const { keyCode } = nativeEvent;

    if (keyCode === 32) setToggleMenu(!toggleMenu);

    if (toggleMenu) {
      switch (keyCode) {
        case 87:
        case 38:
          if (index > 0) setIndex((prevIndex) => prevIndex - 1);
          break;
        case 83:
        case 40:
          if (index < 2) setIndex((prevIndex) => prevIndex + 1);
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
        {/* <Dialog>
        <S.SmallTitle>Wait... I know you</S.SmallTitle>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FormInputs>
            <S.Input type="text" placeholder="username" name="username" ref={register({ required: true, minLength: 4, maxLength: 18 })} />
            <S.Input type="email" placeholder="email" name="email" ref={register({ required: true })} />
            <S.Input type="text" placeholder="password" name="password" ref={register({ required: true, minLength: 8, maxLength: 20 })} />
          </S.FormInputs>
          <S.FormSubmit>
            <S.ConfirmButton type="submit" value="Login" />
          </S.FormSubmit>
        </S.Form>
      </Dialog> */}
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
