import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from '../styles';

const LoginForm = ({ submit }) => {
  const [togglePassword, setTogglePassword] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur', validateCriteriaMode: 'all'
  });

  console.log('LoginErrors: ', errors);

  return (
    <>
      <S.SmallTitle>Wait... I know you</S.SmallTitle>
      <S.Form key={1} onSubmit={handleSubmit(submit)} id="loginForm">
        <S.FormInputs>
          <S.Input
            type="text"
            placeholder="username"
            name="username"
            ref={register({ required: true })}
          />
          {errors?.username?.types?.required
            && <S.ErrorMsg>username is required</S.ErrorMsg>}
          <S.InputDiv>
            <S.Input
              type={togglePassword ? 'password' : 'text'}
              placeholder="password"
              name="password"
              ref={register({ required: true })}
            />
            <S.PasswordIndicator
              onClick={() => setTogglePassword(!togglePassword)}
              indicator={togglePassword}
            />
          </S.InputDiv>
          {errors?.password?.types?.required
            && <S.ErrorMsg>password is required</S.ErrorMsg>}
        </S.FormInputs>
        <S.FormSubmit>
          <S.ConfirmButton
            type="submit"
            value="Login"
            isDisabled={Object.keys(errors).length > 0}
            disabled={Object.keys(errors).length > 0}
          />
        </S.FormSubmit>
      </S.Form>
    </>
  );
};

export default LoginForm;
