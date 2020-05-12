import React, { useEffect, useRef, useReducer } from 'react';

import inputActions, { inputReducer, initState as initInput } from './reducers/inputReducer';
import lockActions, { lockpadReducer, initState as initLockpad } from './reducers/lockpadReducer';

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

  const hotzoneHandler = (zone, pick) => {
    const isPickOnHotzone = zone.includes(pick);
    if (!isPickOnHotzone) {
      return dispatchLockpad({ type: lockActions.CLEAR_HOTZONE });
    }

    const distance = distanceMeter(pick, unlockZone);
    dispatchLockpad({ type: lockActions.SET_HOTZONE, distance });
  };

  const dinstanceHandler = (distance) => {
    const degs = 90 - (distance * 2);

    if (distance === null) return;

    if (distance === 0) {
      dispatchLockpad({ type: lockActions.SET_UNLOCK, unlock: true });
      dispatchLockpad({ type: lockActions.SET_ROTATION, rotation: degs });
    }
    if (distance !== 0) {
      dispatchLockpad({ type: lockActions.SET_UNLOCK, unlock: false });
      dispatchLockpad({ type: lockActions.SET_ROTATION, rotation: degs });
    }
  };

  const keyHandler = (key) => {
    if (!key) {
      return dispatchLockpad({ type: lockActions.SET_TURNING, turning: false });
    }
    dispatchLockpad({ type: lockActions.SET_TURNING, turning: true });
  };

  const setPickPosition = ({ nativeEvent }) => (
    mouseDown && dispatchInput({ type: inputActions.INPUT_EVENT, event: nativeEvent })
  );

  const keyDownHandler = () => (
    !keyDown && dispatchInput({ type: inputActions.KEY_DOWN })
  );

  useEffect(() => { hotzoneHandler(hotzone, pickPosition); }, [pickPosition]);
  useEffect(() => { dinstanceHandler(distanceFromUnlock); }, [distanceFromUnlock]);
  useEffect(() => { keyHandler(keyDown); }, [keyDown]);

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
