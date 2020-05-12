import React, { useEffect, useRef, useReducer } from 'react';

import inputActions, { inputReducer, initState as initInput } from './reducers/inputReducer';
import moveActions, { moveReducer, initState as initMove } from './reducers/movementReducer';
import pickActions, { pickReducer, initState as initPick } from './reducers/pickReducer';

import Lockpad from '../../components/Lockpad/lockpad';
import * as S from './styles';
import useAngle from '../../hooks/angle';
import genArray from '../../helpers/array-generator';
import distanceMeter from '../../helpers/distance-meter';

const hotzone = genArray([0, 50]);
const unlockZone = genArray([20, 40]);

const LockPad = () => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initInput);
  const { mouseDown, keyDown, event } = inputState;

  const [lockpadState, dispatchLockpad] = useReducer(moveReducer, initMove);
  const { turning, distanceFromUnlock, rotation } = lockpadState;

  const [pickState, dispatchPick] = useReducer(pickReducer, initPick);
  const { pickLives, unlock } = pickState;

  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  const setHotzone = (zone, pick) => {
    const isPickOnHotzone = zone.includes(pick);
    if (!isPickOnHotzone) {
      return dispatchLockpad({ type: moveActions.CLEAR_HOTZONE });
    }
    const distance = distanceMeter(pick, unlockZone);
    dispatchLockpad({ type: moveActions.SET_HOTZONE, distance });
  };

  const setDistance = (distance) => {
    const degs = 90 - (distance * 2);

    if (distance === null) return;

    if (distance === 0) {
      dispatchLockpad({ type: moveActions.SET_ROTATION, rotation: degs });
    }
    if (distance !== 0) {
      dispatchLockpad({ type: moveActions.SET_ROTATION, rotation: degs });
    }
  };

  const unlockHandler = (key, distance) => {
    // always set unlock to false
    dispatchPick({ type: pickActions.SET_UNLOCK, unlock: false });

    // check key status to toggle turning state
    if (!key) {
      return dispatchLockpad({ type: moveActions.SET_TURNING, turning: false });
    }
    dispatchLockpad({ type: moveActions.SET_TURNING, turning: true });
    /*
    timer should be equal, or at least higher as the transition of
    LockpadContainer's, to archieve perfection
    */
    const timer = setTimeout(() => {
      // set unlock to true in 1s of keydown
      if (key && distance === 0) {
        return dispatchPick({ type: pickActions.SET_UNLOCK, unlock: true });
      }
    }, 1000);

    return () => { clearTimeout(timer); };
  };

  const pickMovementHandler = (isTurning, distance, lives) => {
    if (!isTurning) return;
    if (distance === 0) return;

    const timer = setTimeout(() => {
    /*
      checks for the lives quantity to determine if it'll be decreased
      or if the game is over (no more picks to pick the lock)
    */
      if (lives > 0) {
        console.log(lives);
        return dispatchPick({ type: pickActions.SET_PICK_LIVES, lives: lives - 1 });
      }
      if (lives <= 0) {
        console.log('game over, no more picks for you');
      }
    }, 500);

    return () => { clearTimeout(timer); };
  };

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

  useEffect(() => {
    pickMovementHandler(turning, distanceFromUnlock, pickLives);
  }, [turning, distanceFromUnlock, pickLives]);

  useEffect(() => {
    dispatchLockpad({ type: moveActions.CLEAR_HOTZONE });
  }, [pickLives]);


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
