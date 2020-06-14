import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import jwt from 'jsonwebtoken';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/actions/user';

import * as S from '../styles';

const LoginForm = ({ optionsHandler, dataHandler }) => {
  const { loading, error, data } = dataHandler;
  const [togglePassword, setTogglePassword] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur', validateCriteriaMode: 'all'
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const submit = (payload) => optionsHandler({
    method: 'POST',
    url: `https://${process.env.REACT_APP_BACKEND}/auth/login`,
    data: payload
  });

  useEffect(() => {
    if (!data) return;
    setTimeout(() => {
      history.push('/');
      const payload = jwt.decode(data.token);
      return dispatch(setAuth({
        auth: true,
        token: data.token,
        ...payload
      }));
    }, 1000);
  }, [data, dispatch, history]);

  return (
    <>
      <S.MsgContainer>
        {error && <S.ErrorMsg>{error}</S.ErrorMsg> }
        {loading && <p>Loading...</p>}
        {data && <p>Redirecting...</p>}
      </S.MsgContainer>
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
