import React, { useState } from 'react';

import Dialog from '../../../components/dialog/dialog';
import useRequest from '../../../hooks/request';

import SignupForm from './signupForm/signupForm';
import LoginForm from './loginForm/loginForm';
import TokenForm from './tokenForm/tokenForm';
import UpdateForm from './updateForm/updateForm';

const Forms = ({ index, changeForm }) => {
  const [options, setOptions] = useState({});
  const [requestData, clear] = useRequest(options);

  const requestHandler = (payload) => setOptions(payload);

  let form = null;

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
    case 3:
      form = (
        <UpdateForm
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
