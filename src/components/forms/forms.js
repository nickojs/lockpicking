import React, { useState, useEffect } from 'react';
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
        const payload = {
          auth: true,
          token: 'blablabla',
          username: data.username
        };
        return dispatch(setAuth(payload));
      }, 1500);
    }
  }, [index, data, changeForm, clear, history, dispatch]);

  const onSubmitSignup = (payload) => setOptions({
    method: 'POST',
    url: `http://${process.env.REACT_APP_BACKEND}/users`,
    data: payload
  });

  const onSubmitLogin = (payload) => setOptions({
    method: 'POST',
    url: `http://${process.env.REACT_APP_BACKEND}/login`,
    data: payload
  });

  let form = null;
  console.log(process.env.REACT_APP_BACKEND);

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
