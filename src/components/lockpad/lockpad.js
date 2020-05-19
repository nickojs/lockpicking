import React from 'react';
import * as S from './styles';

import lockhole from '../../assets/lockpad/lockhole.png';
import pick from '../../assets/lockpad/pick_with_space.png';

const lockpad = ({
  rotation, turning, pickRef, pickPosition
}) => (
  <S.LockBackground>
    <S.LockpadContainer position={rotation} isTurning={turning}>
      <S.Pick
        src={pick}
        alt="a picklock that looks like a twig"
        ref={pickRef}
        position={pickPosition}
      />

      <S.LockpadBackground>
        <S.Lockpad
          src={lockhole}
          alt="an ugly but functional lockpad"
        />
      </S.LockpadBackground>
    </S.LockpadContainer>
  </S.LockBackground>
);

export default lockpad;
