import React from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';
import Dialog from '../../components/dialog/dialog';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <S.Container>
      <S.Title>Wait.. I know you</S.Title>
      <Dialog>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="text" placeholder="username" name="username" ref={register({ required: true, minLength: 4, maxLength: 18 })} />
          <S.Input type="text" placeholder="password" name="password" ref={register({ required: true, minLength: 8, maxLength: 20 })} />
          <S.Input type="email" placeholder="email" name="email" ref={register({ required: true })} />

          <input type="submit" />
        </form>
      </Dialog>
    </S.Container>
  );
};

export default Login;
