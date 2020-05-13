import React from 'react';
import * as S from './styles';

const lockpad = ({
  rotation, turning, pickRef, pickPosition, pickBroke
}) => (
  <S.LockpadContainer position={rotation} isTurning={turning}>
    {pickBroke ? <S.BrokePick /> : <S.Pick ref={pickRef} position={pickPosition} />}

    <S.LockpadBackground>
      <S.Lockpad />
    </S.LockpadBackground>
  </S.LockpadContainer>
);

export default lockpad;
