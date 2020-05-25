import React from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '../dialog/dialog';
import * as S from './styles';

const Forms = ({ index }) => {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    errors: errorsSignup } = useForm({ mode: 'onBlur', validateCriteriaMode: 'all' });
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    errors: errorsLogin } = useForm({ mode: 'onBlur' });

  const onSubmitSignup = (data) => {
    console.log('onSubmitSignup: ', data);
  };

  const onSubmitLogin = (data) => {
    console.log('onSubmitLogin: ', data);
  };

  console.log('signupErrors: ', errorsSignup);
  console.log('loginErrors: ', errorsLogin);

  let form = null;

  switch (index) {
    case 0:
      form = (
        <>
          <S.SmallTitle>You&apos;re finally awake</S.SmallTitle>
          <S.Form key={0} onSubmit={handleSubmitSignup(onSubmitSignup)} id="createAccountForm">
            <S.FormInputs>
              <S.Input
                type="text"
                placeholder="username"
                name="username"
                ref={registerSignup({ required: true, minLength: 4, maxLength: 18 })}
              />
              {errorsSignup?.username?.types?.required && <S.ErrorMsg>username required</S.ErrorMsg>}
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
              {errorsSignup?.email?.types?.required && <S.ErrorMsg>email required</S.ErrorMsg>}
              {errorsSignup?.email?.types?.pattern && <S.ErrorMsg>invalid email</S.ErrorMsg>}
              <S.Input
                type="text"
                placeholder="password"
                name="password"
                ref={registerSignup({ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })}
              />
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
              <S.ConfirmButton type="submit" value="Create Account" />
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
                ref={registerLogin({ required: true, minLength: 4, maxLength: 18 })}
              />
              <S.Input
                type="text"
                placeholder="password"
                name="password"
                ref={registerLogin({ required: true, minLength: 8, maxLength: 20 })}
              />
            </S.FormInputs>
            <S.FormSubmit>
              <S.ConfirmButton type="submit" value="Login" />
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
      {form}
    </Dialog>
  );
};

export default Forms;
