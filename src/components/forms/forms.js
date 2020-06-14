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
import TokenForm from './tokenForm/tokenForm';

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
    if (index === 2 && data) {
      console.log(data);
      setTimeout(() => {
        clear();
      }, 500);
    }
  }, [index, data, changeForm, clear, history, dispatch]);

  let form = null;

  const requestHandler = (payload) => setOptions(payload);

  switch (index) {
    case 0:
      form = (
        <SignupForm
          optionsHandler={requestHandler}
          dataHandler={requestData}
        />
      );
      break;
    case 1:
      form = (
        <LoginForm
          optionsHandler={requestHandler}
          dataHandler={requestData}
        />
      );
      break;
    case 2:
      form = (
        <TokenForm
          optionsHandler={requestHandler}
          dataHandler={requestData}
        />
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
