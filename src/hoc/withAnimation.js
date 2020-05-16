/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${anim} .5s;
`;

const withAnimation = (WrappedComponent) => (props) => (
  <Wrapper>
    <WrappedComponent {...props} />
  </Wrapper>
);

export default withAnimation;
