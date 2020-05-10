import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import useAngle from '../hooks/angle';
import genArray from '../helpers/array-generator';

const LockPad = () => {
  const [hotzone, setHotzone] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [keyDown, setKeyDown] = useState(false);
  const [event, setEvent] = useState(null);
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event);

  useEffect(() => {
    const zone = genArray([10, 30]);
    setHotzone(zone);
  }, []);

  const setPickPosition = (e) => mouseDown && setEvent(e.nativeEvent);

  const turnLock = (e) => {
    // check if the pick is inside hotzone
    //   ↳ check how close it is to the unlock zone
    // rotates the lock
    console.log('key pressed');
  };

  return (
    <S.Container
      tabIndex="0"
      onKeyDown={() => setKeyDown(true)}
      onKeyUp={() => setKeyDown(false)}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseMove={setPickPosition}
    >
      <S.LockpadContainer>
        <S.Pick ref={pickRef} position={pickPosition} />
        <S.LockpadBackground>
          <S.Lockpad />
        </S.LockpadBackground>
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
