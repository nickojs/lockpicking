/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as S from '../styles';

const UpdateForm = ({ optionsHandler, dataHandler }) => {
  const { loading, error, data } = dataHandler;
  const [togglePassword, setTogglePassword] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur', validateCriteriaMode: 'all'
  });

  const submit = (payload) => optionsHandler({
    method: 'DELETE',
    url: `https://${process.env.REACT_APP_BACKEND}/auth/delete-user/`,
    data: payload
  });

  return (
    <>
      <S.MsgContainer>
        {error && (
        <>
          <S.ErrorMsg>{error.error}</S.ErrorMsg>
          <S.ErrorMsg>{error}</S.ErrorMsg>
        </>
        )}
        {loading && <p>Loading...</p>}
        {data && <p>Updated account. Check your email</p>}
      </S.MsgContainer>

      <S.SmallTitle>Are you sure you want to delete your account?</S.SmallTitle>
      <S.Form key={4} onSubmit={handleSubmit(submit)} id="deleteAccountForm">
        <S.FormInputs>
          <S.Input
            type="text"
            placeholder="token"
            name="token"
            ref={register({ required: true })}
          />
          {errors?.token?.types?.required
            && <S.ErrorMsg>token required</S.ErrorMsg>}
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
            && <S.ErrorMsg>password required</S.ErrorMsg>}
        </S.FormInputs>
        <S.FormSubmit>
          <S.ConfirmButton
            type="submit"
            value="Delete Account"
            isDisabled={Object.keys(errors).length > 0}
            disabled={Object.keys(errors).length > 0}
          />
        </S.FormSubmit>
      </S.Form>
    </>
  );
};

export default UpdateForm;
