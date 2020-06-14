import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Dialog from '../dialog/dialog';
import useRequest from '../../hooks/request';

import SignupForm from './signupForm/signupForm';
import LoginForm from './loginForm/loginForm';
import TokenForm from './tokenForm/tokenForm';

const Forms = ({ index, changeForm }) => {
  const [options, setOptions] = useState({});
  const [requestData, clear] = useRequest(options);
  const { data } = requestData;

  useEffect(() => {
    // if (index === 0 && data) {
    //   setTimeout(() => {
    //     clear();
    //     changeForm(1);
    //   }, 500);
    // }
    if (index === 2 && data) {
      console.log(data);
      setTimeout(() => {
        clear();
      }, 500);
    }
  }, [index, data, changeForm, clear]);

  let form = null;

  const requestHandler = (payload) => setOptions(payload);

  switch (index) {
    case 0:
      form = (
        <SignupForm
          optionsHandler={requestHandler}
          dataHandler={requestData}
          changeForm={changeForm}
          clear={clear}
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
