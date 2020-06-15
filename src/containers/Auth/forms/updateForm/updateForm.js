import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import * as S from '../styles';
import useRequest from '../../../../hooks/request';

const UpdateForm = ({ optionsHandler, dataHandler }) => {
  const { loading, error, data } = dataHandler;
  const [togglePassword, setTogglePassword] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur', validateCriteriaMode: 'all'
  });

  const submit = (payload) => optionsHandler({
    method: 'POST',
    url: `https://${process.env.REACT_APP_BACKEND}/auth/update-user/`,
    data: payload
  });

  const [options, setOptions] = useState({});
  const [userData] = useRequest(options);
  const { loadingUser, errorUser, dataUser } = userData;

  const inputRef = {
    token: useRef(),
    username: useRef(),
    email: useRef(),
    password: useRef()
  };

  const retrieveUser = (event) => {
    const token = event.target.value;
    console.log(inputRef);
    // if (!isExpired) {
    //   console.log('not expired');

    //   setOptions({
    //     method: 'GET',
    //     url: `https://${process.env.REACT_APP_BACKEND}/auth/update-user/${token}`
    //   });
    // }
  };

  return (
    <>
      <S.MsgContainer>
        {error && <S.ErrorMsg>{error}</S.ErrorMsg> }
        {loading && <p>Loading...</p>}
        {data && <p>Redirecting...</p>}
      </S.MsgContainer>
      <S.MsgContainer>
        {errorUser && <S.ErrorMsg>{errorUser}</S.ErrorMsg> }
        {loadingUser && <p>loading user...</p>}
      </S.MsgContainer>
      <S.SmallTitle>Insert new user data</S.SmallTitle>
      <S.Form key={3} onSubmit={handleSubmit(submit)} id="updateAccountForm">
        <S.FormInputs>
          <S.Input
            type="text"
            placeholder="token"
            name="token"
            onBlur={(e) => retrieveUser(e)}
            ref={(e) => {
              register({ required: true });
              inputRef.token.current = e;
            }}
          />
          {errors?.token?.types?.required
            && <S.ErrorMsg>token required</S.ErrorMsg>}
          <S.Input
            type="text"
            placeholder="username"
            name="username"
            ref={(e) => {
              register({ required: true, minLength: 4, maxLength: 18 });
              inputRef.username.current = e;
            }}
          />
          {errors?.username?.types?.required
            && <S.ErrorMsg>username required</S.ErrorMsg>}
          {errors?.username?.types?.minLength
            && <S.ErrorMsg>username should be at least 4 characters long</S.ErrorMsg>}
          {errors?.username?.types?.maxLength
            && <S.ErrorMsg>username maximum length (18) exceeded</S.ErrorMsg>}
          <S.Input
            type="email"
            placeholder="email"
            name="email"
            ref={(e) => {
              register({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ });
              inputRef.email.current = e;
            }}
          />
          {errors?.email?.types?.required
            && <S.ErrorMsg>email required</S.ErrorMsg>}
          {errors?.email?.types?.pattern
            && <S.ErrorMsg>invalid email</S.ErrorMsg>}
          <S.InputDiv>
            <S.Input
              type={togglePassword ? 'password' : 'text'}
              placeholder="password"
              name="password"
              ref={(e) => {
                register(inputRef, { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ });
                inputRef.password.current = e;
              }}
            />
            <S.PasswordIndicator
              onClick={() => setTogglePassword(!togglePassword)}
              indicator={togglePassword}
            />
          </S.InputDiv>
          {errors?.password?.types?.required
            && <S.ErrorMsg>password required</S.ErrorMsg>}
          {errors?.password?.types?.pattern
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
            value="Update"
            isDisabled={Object.keys(errors).length > 0}
            disabled={Object.keys(errors).length > 0}
          />
        </S.FormSubmit>
      </S.Form>
    </>
  );
};

export default UpdateForm;
