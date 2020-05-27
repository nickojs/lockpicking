import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Dialog from '../dialog/dialog';
import useRequest from '../../hooks/request';
import SignupForm from './signupForm/signupForm';
import LoginForm from './loginForm/loginForm';

const Forms = ({ index, changeForm }) => {
  const [options, setOptions] = useState({});
  const [requestData, clear] = useRequest(options);

  useEffect(() => {
    console.log('data...:', requestData);
    if (requestData.data) {
      setTimeout(() => {
        clear();
        changeForm(1);
      }, 500);
    }
  }, [requestData, changeForm, index, clear]);

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
        {requestData.error
          && <S.ErrorMsg>Something went wrong!</S.ErrorMsg>}
        {requestData.loading
          && <p>Loading...</p>}
      </S.MsgContainer>
      {form}
    </Dialog>
  );
};

export default Forms;
