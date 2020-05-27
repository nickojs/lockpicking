import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Dialog from '../dialog/dialog';
import useRequest from '../../hooks/request';
import SignupForm from './signupForm/signupForm';
import LoginForm from './loginForm/loginForm';

const Forms = ({ index, changeForm }) => {
  const [options, setOptions] = useState({});
  const [requestData, clear] = useRequest(options);
  const { loading, error, data } = requestData;

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        clear();
        changeForm(1);
      }, 500);
    }
  }, [data, changeForm, index, clear]);

  const onSubmitSignup = (payload) => setOptions({
    method: 'POST',
    url: 'http://localhost:5000/users',
    data: payload
  });

  const onSubmitLogin = (payload) => setOptions({
    method: 'POST',
    url: 'http://localhost:5000/login',
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
        {error
           && (
           <div>
             <S.ErrorMsg>
               Something went wrong:
               <br />
               <br />
               {error}
             </S.ErrorMsg>
           </div>
           )}
        {loading
          && <p>Loading...</p>}
        {data && <p>Redirecting...</p>}
      </S.MsgContainer>
      {form}
    </Dialog>
  );
};

export default Forms;
