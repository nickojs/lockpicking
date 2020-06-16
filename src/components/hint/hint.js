import React from 'react';
import * as S from './styles';

const Hint = ({ children }) => (
  <S.HintContainer>
    <S.HintText>{children}</S.HintText>
  </S.HintContainer>
);

export default Hint;
