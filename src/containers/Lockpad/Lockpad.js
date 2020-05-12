import React, { useEffect, useRef, useReducer } from 'react';

import inputActions, { inputReducer, initState as initInput } from './reducers/inputReducer';
import lockActions, { lockpadReducer, initState as initLockpad } from './reducers/lockpadReducer';

import * as S from './styles';
import useAngle from '../../hooks/angle';
import genArray from '../../helpers/array-generator';
import distanceMeter from '../../helpers/distance-meter';

import Lockpad from '../../components/Lockpad/lockpad';

const hotzone = genArray([0, 50]);
const unlockZone = genArray([20, 40]);

const LockPad = () => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initInput);
  const { mouseDown, keyDown, event } = inputState;

  const [lockpadState, dispatchLockpad] = useReducer(lockpadReducer, initLockpad);
  const { turning, distanceFromUnlock, rotation } = lockpadState;

  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  const setHotzone = (zone, pick) => {
    const isPickOnHotzone = zone.includes(pick);
    if (!isPickOnHotzone) {
      return dispatchLockpad({ type: lockActions.CLEAR_HOTZONE });
    }
    const distance = distanceMeter(pick, unlockZone);
    dispatchLockpad({ type: lockActions.SET_HOTZONE, distance });
  };

  const setDistance = (distance) => {
    const degs = 90 - (distance * 2);

    if (distance === null) return;

    if (distance === 0) {
      dispatchLockpad({ type: lockActions.SET_ROTATION, rotation: degs });
    }
    if (distance !== 0) {
      dispatchLockpad({ type: lockActions.SET_ROTATION, rotation: degs });
    }
  };

  const unlockHandler = (key, distance) => {
    if (!key) {
      return dispatchLockpad({ type: lockActions.SET_TURNING, turning: false });
    }
    dispatchLockpad({ type: lockActions.SET_TURNING, turning: true });
    console.log('unlock false');
    /*
    timer should be equal, or at least higher as the transition of
    LockpadContainer's, to archieve perfection
    */
    const timer = setTimeout(() => {
      if (key && distance === 0) {
        console.log('unlock true');
      }
    }, 1000);

    return () => { clearTimeout(timer); };
  };

  // const pickMovementHandler = (isTurning, distance, lifes) => {
  //   if (!isTurning) return;
  //   if (distance === 0) return;

  //   const timer = setTimeout(() => {
  //     if (lifes > 0) {
  //       console.log(lifes);
  //       return dispatchLockpad({ type: lockActions.SET_PICK_LIFE, pickLifes: lifes - 1 });
  //     }
  //     if (lifes <= 0) {
  //       console.log('game over, no more picks for you');
  //     }
  //   }, 500);

  //   return () => { clearTimeout(timer); };
  // };

  const setPickPosition = ({ nativeEvent }) => (
    mouseDown && dispatchInput({ type: inputActions.INPUT_EVENT, event: nativeEvent })
  );

  const setKeyDown = () => (
    !keyDown && dispatchInput({ type: inputActions.KEY_DOWN })
  );

  useEffect(() => {
    setHotzone(hotzone, pickPosition);
  }, [pickPosition]);

  useEffect(() => {
    setDistance(distanceFromUnlock);
  }, [distanceFromUnlock]);

  useEffect(() => {
    unlockHandler(keyDown, distanceFromUnlock);
  }, [keyDown, distanceFromUnlock]);

  // useEffect(() => {
  //   pickMovementHandler(turning, distanceFromUnlock, pickLifes);
  // }, [turning, distanceFromUnlock, pickLifes]);

  // useEffect(() => {
  //   dispatchLockpad({ type: lockActions.CLEAR_HOTZONE });
  // }, [pickLifes]);

  const lockpad = false ? <p>Unlocked!</p> : (
    <Lockpad
      rotation={rotation}
      turning={turning}
      pickRef={pickRef}
      pickPosition={pickPosition}
    />
  );

  return (
    <S.Container
      tabIndex="0"
      onMouseUp={() => dispatchInput({ type: inputActions.MOUSE_UP })}
      onMouseDown={() => dispatchInput({ type: inputActions.MOUSE_DOWN })}
      onKeyUp={() => dispatchInput({ type: inputActions.KEY_UP })}
      onKeyDown={setKeyDown}
      onMouseMove={setPickPosition}
    >
      {lockpad}

    </S.Container>
  );
};

export default LockPad;
