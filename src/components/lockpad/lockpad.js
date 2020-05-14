import React from 'react';
import * as S from './styles';

const lockpad = ({
  rotation, turning, pickRef, pickPosition
}) => (
  <S.LockpadContainer position={rotation} isTurning={turning}>
    <S.Pick ref={pickRef} position={pickPosition} />

    <S.LockpadBackground>
      <S.Lockpad />
    </S.LockpadBackground>
  </S.LockpadContainer>
);

export default lockpad;