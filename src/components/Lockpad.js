import React, { useEffect, useState, useRef } from 'react';
import * as S from './styles';
import useAngle from '../hooks/angle';

const LockPad = (props) => {
  const pickRef = useRef(null);
  const returnFinalAngle = useAngle(pickRef);
  const [angle, setAngle] = useState(null);

  const mousePositionHandler = (event) => {
    const currentAngle = returnFinalAngle(event.nativeEvent);
    if (currentAngle > -115 && currentAngle < 115) {
      console.log(angle);
      return setAngle(currentAngle);
    }
  };

  return (
    <S.Container onMouseMove={(event) => mousePositionHandler(event)}>
      <S.LockpadContainer>
        <S.Pick ref={pickRef} position={angle} />
        <S.Lockpad />
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
