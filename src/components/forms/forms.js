import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/actions/user';

import * as S from './styles';
import Dialog from '../dialog/dialog';
import useRequest from '../../hooks/request';
import SignupForm from './signupForm/signupForm';
import LoginForm from './loginForm/loginForm';

const Forms = ({ index, changeForm }) => {
  const [options, setOptions] = useState({});
  const [requestData, clear] = useRequest(options);
  const { loading, error, data } = requestData;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (index === 0 && data) {
      setTimeout(() => {
        clear();
        changeForm(1);
      }, 500);
    }
    if (index === 1 && data) {
      setTimeout(() => {
        history.push('/');
        const payload = jwt.decode(data.token);
        return dispatch(setAuth({
          auth: true,
          token: data.token,
          ...payload
        }));
      }, 1500);
    }
  }, [index, data, changeForm, clear, history, dispatch]);


  const onSubmitSignup = (payload) => setOptions({
    method: 'POST',
    url: `https://${process.env.REACT_APP_BACKEND}/auth/signup`,
    data: payload
  });

  const onSubmitLogin = (payload) => setOptions({
    method: 'POST',
    url: `https://${process.env.REACT_APP_BACKEND}/auth/login`,
    data: payload
  });

  let form = null;

  switch (index) {
    case 0:
      form = <SignupForm submit={onSubmitSignup} />;
      break;
    case 1:
      form = <LoginForm submit={onSubmitLogin} />;
      break;
    default:
      break;
  }

  return (
    <Dialog>
      <S.MsgContainer>
        {error && <S.ErrorMsg>{error}</S.ErrorMsg> }
        {loading && <p>Loading...</p>}
        {data && <p>Redirecting...</p>}
      </S.MsgContainer>
      {form}
    </Dialog>
  );
};

export default Forms;
