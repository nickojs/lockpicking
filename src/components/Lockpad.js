import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import useAngle from '../hooks/angle';
import genArray from '../helpers/array-generator';

const LockPad = () => {
  const [hotzone, setHotzone] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [event, setEvent] = useState(null);
  const pickRef = useRef(null);
  // 'angle' don't serves only for indicating the pick's alignment,
  // it will also be useful to determine if the pick's on the hotzone
  const angle = useAngle(pickRef, event);


  useEffect(() => {
    const zone = genArray([10, 30]);
    setHotzone(zone);
  }, []);

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
