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
  const {
    mouseDown, keyDown, event, keyPressMoment
  } = inputState;

  const [lockpadState, dispatchLockpad] = useReducer(moveReducer, initMove);
  const { turning, distanceFromUnlock, rotation } = lockpadState;

  const [pickState, dispatchPick] = useReducer(pickReducer, initPick);
  const { pickLives, unlock, gameOver } = pickState;

  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  const setPickPosition = ({ nativeEvent }) => (
    mouseDown && dispatchInput({ type: inputActions.INPUT_EVENT, event: nativeEvent })
  );

  const setKeyUp = () => {
    dispatchInput({ type: inputActions.KEY_UP });
    dispatchInput({ type: inputActions.KEY_PRESS_END });
  };

  const setKeyDown = () => {
    if (!keyDown) {
      dispatchInput({ type: inputActions.KEY_PRESS_START });
      dispatchInput({ type: inputActions.KEY_DOWN });
    }
  };

  useEffect(() => {
    const isPickOnHotzone = hotzone.includes(pickPosition);
    if (!isPickOnHotzone) {
      return dispatchLockpad({ type: moveActions.CLEAR_HOTZONE });
    }
    const distance = distanceMeter(pickPosition, unlockZone);
    dispatchLockpad({ type: moveActions.SET_HOTZONE, distance });
  }, [pickPosition]);

  useEffect(() => {
    const degs = 90 - (distanceFromUnlock * 2);

    if (distanceFromUnlock === null) return;

    if (distanceFromUnlock === 0) {
      dispatchLockpad({ type: moveActions.SET_ROTATION, rotation: degs });
    }
    if (distanceFromUnlock !== 0) {
      dispatchLockpad({ type: moveActions.SET_ROTATION, rotation: degs });
    }
  }, [distanceFromUnlock]);

  useEffect(() => {
    // always set unlock to false
    dispatchPick({ type: pickActions.SET_UNLOCK, unlock: false });

    // check key status to toggle turning state
    if (!keyDown) {
      return dispatchLockpad({ type: moveActions.SET_TURNING, turning: false });
    }
    dispatchLockpad({ type: moveActions.SET_TURNING, turning: true });
    // timer should be equal, or higher as the LockpadContainers transition
    const timer = setTimeout(() => {
      // set unlock to true in 1s of keydown
      if (keyDown && distanceFromUnlock === 0) {
        return dispatchPick({ type: pickActions.SET_UNLOCK, unlock: true });
      }
    }, 1000);

    return () => { clearTimeout(timer); };
  }, [keyDown, distanceFromUnlock]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyPressMoment) {
        console.log('keyPressMoment');
        dispatchInput({ type: inputActions.KEY_PRESS_INC, inc: keyPressMoment + 500 });
      }
    }, 500);

    return () => { clearTimeout(timer); };
  }, [keyPressMoment]);

  useEffect(() => {
    if (!turning) return;
    if (distanceFromUnlock === 0) return;

    const timer = setTimeout(() => {
    /*
      checks for the lives quantity to determine if it'll be decreased
      or if the game is over (no more picks to pick the lock)
    */
      if (pickLives > 0) {
        console.log(pickLives);
        return dispatchPick({ type: pickActions.REMOVE_PICK_LIFE });
      }
      if (pickLives === 0) {
        console.log('game over, no more picks for you');
        return dispatchPick({ type: pickActions.SET_GAME_OVER, gameOver: true });
      }
    }, 2500);

    return () => { clearTimeout(timer); };
  }, [turning, distanceFromUnlock, pickLives]);

  useEffect(() => {
    dispatchLockpad({ type: moveActions.CLEAR_HOTZONE });
  }, [pickLives]);


  const lockpad = unlock ? <p>Unlocked!</p> : (
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
      onKeyUp={setKeyUp}
      onKeyDown={setKeyDown}
      onMouseMove={setPickPosition}
    >
      {lockpad}
    </S.Container>
  );
};

export default LockPad;
