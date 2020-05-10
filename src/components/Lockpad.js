import React, { useEffect, useState, useRef } from 'react';
import * as S from './styles';
import useAngle from '../hooks/angle';

const LockPad = (props) => {
  const pickRef = useRef(null);
  const returnFinalAngle = useAngle(pickRef);
  const [angle, setAngle] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);

  const setPickPosition = (event) => {
    if (mouseDown) {
      const outsideEvent = event.nativeEvent;
      const currentAngle = returnFinalAngle(outsideEvent);
      if (currentAngle > -115 && currentAngle < 115) {
        console.log(angle);
        return setAngle(currentAngle);
      }
    }
  };

  return (
    <S.Container
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseMove={(event) => setPickPosition(event)}
    >
      <S.LockpadContainer>
        <S.Pick ref={pickRef} position={angle} />
        <S.Lockpad />
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
