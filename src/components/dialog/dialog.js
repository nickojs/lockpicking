import React from 'react';
import * as S from './styles';

const Dialog = ({ children }) => (
  <S.OptionsContainer>
    <S.OptionsInner>
      {children}
    </S.OptionsInner>
  </S.OptionsContainer>
);

export default Dialog;
