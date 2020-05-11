import React, {
  useState, useEffect, useRef, useReducer
} from 'react';

import inputActions, {
  inputReducer, initState as initInput
} from './reducers/inputReducer';

import lockpadActions, {
  lockpadReducer, initState as initLockpad
} from './reducers/lockpadReducer';

import * as S from './styles';
import useAngle from '../../hooks/angle';
import genArray from '../../helpers/array-generator';
import distanceMeter from '../../helpers/distance-meter';

const hotzone = genArray([0, 50]);
const unlockZone = genArray([20, 40]);

const LockPad = () => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initInput);
  const { mouseDown, keyDown, event } = inputState;

  const [lockpadState, dispatchLockpad] = useReducer(lockpadReducer, initLockpad);
  const { pickOnHotzone, distanceFromUnlock, unlock } = lockpadState;

  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  useEffect(() => {
    const isPickOnHotzone = hotzone.includes(pickPosition);
    if (!isPickOnHotzone) {
      return;
    }

    const distance = distanceMeter(pickPosition, unlockZone);
    dispatchLockpad({
      type: lockpadActions.SET_HOTZONE,
      status: isPickOnHotzone,
      distance
    });

    const isPickOnUnlockzone = unlockZone.includes(pickPosition);
    dispatchLockpad({ type: lockpadActions.UNLOCK, status: isPickOnUnlockzone });
  }, [pickPosition]);

  useEffect(() => {
    console.log('hotzone: ', pickOnHotzone);
    console.log('unlockZone: ', unlock);
  }, [pickOnHotzone, unlock, keyDown]);

  const setPickPosition = (e) => (
    mouseDown && dispatchInput({ type: inputActions.INPUT_EVENT, event: e.nativeEvent })
  );

  const keyDownHandler = () => (
    !keyDown && dispatchInput({ type: inputActions.KEY_DOWN })
  );

  return (
    <S.Container
      tabIndex="0"
      onMouseUp={() => dispatchInput({ type: inputActions.MOUSE_UP })}
      onMouseDown={() => dispatchInput({ type: inputActions.MOUSE_DOWN })}
      onKeyUp={() => dispatchInput({ type: inputActions.KEY_UP })}
      onKeyDown={keyDownHandler}
      onMouseMove={setPickPosition}
    >
      <S.LockpadContainer position={0}>
        <S.Pick ref={pickRef} position={pickPosition} />
        <S.LockpadBackground>
          <S.Lockpad />
        </S.LockpadBackground>
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
