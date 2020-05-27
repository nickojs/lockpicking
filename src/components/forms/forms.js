import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';
import Dialog from '../dialog/dialog';
import useRequest from '../../hooks/request';

const Forms = ({ index, changeForm }) => {
  const [togglePassword, setTogglePassword] = useState(true);
  const [options, setOptions] = useState({});
  const requestData = useRequest(options);

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    errors: errorsSignup } = useForm({ mode: 'onBlur', validateCriteriaMode: 'all' });
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    errors: errorsLogin } = useForm({ mode: 'onBlur', validateCriteriaMode: 'all' });

  useEffect(() => {
    console.log('data...:', requestData);
    if (requestData.data) {
      setTimeout(() => changeForm(1), 500);
    }
  }, [requestData, changeForm]);

  const onSubmitSignup = (data) => setOptions({
    method: 'POST',
    url: 'http://localhost:5000/users',
    data
  });

  const onSubmitLogin = (data) => setOptions({
    method: 'POST',
    url: 'http://localhost:5000/login',
    data
  });

  console.log('signupErrors: ', errorsSignup);
  console.log('loginErrors: ', errorsLogin);

  let form = null;

  switch (index) {
    case 0:
      form = (
        <>
          <S.SmallTitle>Hey you, you&apos;re finally awake</S.SmallTitle>
          <S.Form key={0} onSubmit={handleSubmitSignup(onSubmitSignup)} id="createAccountForm">
            <S.FormInputs>
              <S.Input
                type="text"
                placeholder="username"
                name="username"
                ref={registerSignup({ required: true, minLength: 4, maxLength: 18 })}
              />
              {errorsSignup?.username?.types?.required
                && <S.ErrorMsg>username required</S.ErrorMsg>}
              {errorsSignup?.username?.types?.minLength
                  && <S.ErrorMsg>username should be at least 4 characters long</S.ErrorMsg>}
              {errorsSignup?.username?.types?.maxLength
                  && <S.ErrorMsg>username maximum length (18) exceeded</S.ErrorMsg>}
              <S.Input
                type="email"
                placeholder="email"
                name="email"
                ref={registerSignup({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })}
              />
              {errorsSignup?.email?.types?.required
                && <S.ErrorMsg>email required</S.ErrorMsg>}
              {errorsSignup?.email?.types?.pattern
                && <S.ErrorMsg>invalid email</S.ErrorMsg>}
              <S.InputDiv>
                <S.Input
                  type={togglePassword ? 'password' : 'text'}
                  placeholder="password"
                  name="password"
                  ref={registerSignup({ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })}
                />
                <S.PasswordIndicator
                  onClick={() => setTogglePassword(!togglePassword)}
                  indicator={togglePassword}
                />
              </S.InputDiv>
              {errorsSignup?.password?.types?.required
                && <S.ErrorMsg>password required</S.ErrorMsg>}
              {errorsSignup?.password?.types?.pattern
                && (
                <S.ErrorMsg>
                  password should be at least 8 characters long
                  and contain at least one letter and one number
                </S.ErrorMsg>
              )}
            </S.FormInputs>
            <S.FormSubmit>
              <S.ConfirmButton
                type="submit"
                value="Create Acc"
                isDisabled={Object.keys(errorsSignup).length > 0}
                disabled={Object.keys(errorsSignup).length > 0}
              />
            </S.FormSubmit>
          </S.Form>
        </>
      );
      break;
    case 1:
      form = (
        <>
          <S.SmallTitle>Wait... I know you</S.SmallTitle>
          <S.Form key={1} onSubmit={handleSubmitLogin(onSubmitLogin)} id="loginForm">
            <S.FormInputs>
              <S.Input
                type="text"
                placeholder="username"
                name="username"
                ref={registerLogin({ required: true })}
              />
              {errorsLogin?.username?.types?.required
                && <S.ErrorMsg>username is required</S.ErrorMsg>}
              <S.InputDiv>
                <S.Input
                  type={togglePassword ? 'password' : 'text'}
                  placeholder="password"
                  name="password"
                  ref={registerLogin({ required: true })}
                />
                <S.PasswordIndicator
                  onClick={() => setTogglePassword(!togglePassword)}
                  indicator={togglePassword}
                />
              </S.InputDiv>
              {errorsLogin?.password?.types?.required
                && <S.ErrorMsg>password is required</S.ErrorMsg>}
            </S.FormInputs>
            <S.FormSubmit>
              <S.ConfirmButton
                type="submit"
                value="Login"
                isDisabled={Object.keys(errorsLogin).length > 0}
                disabled={Object.keys(errorsLogin).length > 0}
              />
            </S.FormSubmit>
          </S.Form>
        </>
      );
      break;
    default:
      break;
  }

  return (
    <Dialog>
      <div>
        {requestData.error
          && <S.ErrorMsg>Something went wrong!</S.ErrorMsg>}
        {requestData.loading
          && <p>Loading...</p>}
        {requestData.data
          && <p>Redirecting...</p>}
      </div>
      {form}
    </Dialog>
  );
};

export default Forms;
