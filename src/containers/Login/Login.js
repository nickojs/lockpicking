import React from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';
import SideMenu from '../../components/sideMenu/sideMenu';
import Dialog from '../../components/dialog/dialog';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <SideMenu />
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
  );
};

export default Login;
