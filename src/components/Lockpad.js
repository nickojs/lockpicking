import React, { useState, useRef } from 'react';
import * as S from './styles';
import useAngle from '../hooks/angle';

const LockPad = () => {
  const [event, setEvent] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const pickRef = useRef(null);
  const angle = useAngle(pickRef, event);

  const setPickPosition = (e) => mouseDown && setEvent(e.nativeEvent);

  return (
    <S.Container
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseMove={(e) => setPickPosition(e)}
    >
      <S.LockpadContainer>
        <S.Pick ref={pickRef} position={angle} />
        <S.Lockpad />
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
