import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from '../styles';

const TokenForm = ({ optionsHandler, dataHandler }) => {
  const { loading, error, data } = dataHandler;
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur', validateCriteriaMode: 'all'
  });

  const submit = (payload) => optionsHandler({
    method: 'POST',
    url: `https://${process.env.REACT_APP_BACKEND}/auth/request-token/`,
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
        {data && <p>{data.message}</p>}
      </S.MsgContainer>
      <S.SmallTitle>
        Forgot your password or want to change your user data?
        Request a temporary token!
      </S.SmallTitle>

      <S.Form key={2} onSubmit={handleSubmit(submit)} id="resetTokenForm">
        <S.FormInputs>
          <S.Input
            type="text"
            placeholder="email"
            name="email"
            ref={register({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })}
          />
          {errors?.username?.types?.required
            && <S.ErrorMsg>email required</S.ErrorMsg>}
          {errors?.username?.types?.pattern
            && <S.ErrorMsg>email should be... an email!</S.ErrorMsg>}
        </S.FormInputs>
        <S.FormSubmit>
          <S.ConfirmButton
            type="submit"
            value="Request Token"
            isDisabled={Object.keys(errors).length > 0}
            disabled={Object.keys(errors).length > 0}
          />
        </S.FormSubmit>
      </S.Form>
    </>
  );
};

export default TokenForm;
