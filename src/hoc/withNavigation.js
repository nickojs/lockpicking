/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const withNavigation = (WrappedComponent) => (props) => {
  const { navigation } = useSelector((state) => state.user);

  if (navigation) {
    return (<WrappedComponent {...props} />);
  }

  return <Redirect to="/" />;
};

export default withNavigation;
