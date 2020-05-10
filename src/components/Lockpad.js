import React, { useState, useRef } from 'react';
import * as S from './styles';
import useAngle from '../hooks/angle';

const LockPad = () => {
  const [event, setEvent] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const pickRef = useRef(null);
  const angle = useAngle(pickRef, event);
  /*
    'angle' don't serves only for indicating the pick's alignment,
    it will also be useful to determine the pick's position
    on the lockpad array
  */

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
