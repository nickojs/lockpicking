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
  const { turning, distanceFromUnlock, rotation } = lockpadState;

  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  useEffect(() => {
    const isPickOnHotzone = hotzone.includes(pickPosition);
    if (!isPickOnHotzone) return dispatchLockpad({ type: lockpadActions.CLEAR_HOTZONE });

    const distance = distanceMeter(pickPosition, unlockZone);
    dispatchLockpad({ type: lockpadActions.SET_HOTZONE, distance });
  }, [pickPosition]);

  useEffect(() => {
    console.log('distanceFromUnlock effect');
    const degs = 90 - (distanceFromUnlock * 2);

    if (distanceFromUnlock === null) return;

    if (distanceFromUnlock === 0) {
      dispatchLockpad({ type: lockpadActions.SET_UNLOCK, unlock: true });
      dispatchLockpad({ type: lockpadActions.SET_ROTATION, rotation: degs });
    }
    if (distanceFromUnlock !== 0) {
      dispatchLockpad({ type: lockpadActions.SET_UNLOCK, unlock: false });
      dispatchLockpad({ type: lockpadActions.SET_ROTATION, rotation: degs });
    }

  }, [distanceFromUnlock]);

  useEffect(() => {
    console.log('keyDOwn effect');
    if (!keyDown) return dispatchLockpad({ type: lockpadActions.SET_TURNING, turning: false });
    dispatchLockpad({ type: lockpadActions.SET_TURNING, turning: true });
  }, [keyDown]);

  const setPickPosition = ({ nativeEvent }) => (
    mouseDown && dispatchInput({ type: inputActions.INPUT_EVENT, event: nativeEvent })
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
      <S.LockpadContainer position={rotation} isTurning={turning}>
        <S.Pick ref={pickRef} position={pickPosition} />
        <S.LockpadBackground>
          <S.Lockpad />
        </S.LockpadBackground>
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
