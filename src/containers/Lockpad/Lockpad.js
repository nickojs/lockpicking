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

  const [moveState, dispatchMove] = useReducer(moveReducer, initMove);
  const {
    isUnlockable, turning, distanceFromUnlock, rotation
  } = moveState;

  const [pickState, dispatchPick] = useReducer(pickReducer, initPick);
  const {
    pickLives, pickIsBroken, unlock, gameOver
  } = pickState;

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

  // defines if the pick is on the hotzone
  useEffect(() => {
    const isPickOnHotzone = hotzone.includes(pickPosition);
    if (!isPickOnHotzone) {
      return dispatchMove({ type: moveActions.CLEAR_HOTZONE });
    }
    const distance = distanceMeter(pickPosition, unlockZone);
    dispatchMove({ type: moveActions.SET_HOTZONE, distance });
  }, [pickPosition]);

  // calculates the distance between the current pick location and unlockzone
  // and generates a rotation angle based on this distance
  useEffect(() => {
    const degs = 90 - (distanceFromUnlock * 2);

    if (distanceFromUnlock === null) return;
    /*
      'unlockable' seems redundant, but it exists because the other effect need
      to know this in order to trigger the timed 'unlock' functionality.
      another way is to pass 'distanceFromUnlock' on the next effect
      as a dependency, but it triggers multiple useless re-renders
    */
    if (distanceFromUnlock === 0) {
      dispatchMove({ type: moveActions.SET_ROTATION, rotation: degs });
      dispatchMove({ type: moveActions.SET_UNLOCKABLE, status: true });
    }
    if (distanceFromUnlock !== 0) {
      dispatchMove({ type: moveActions.SET_ROTATION, rotation: degs });
      dispatchMove({ type: moveActions.SET_UNLOCKABLE, status: false });
    }
  }, [distanceFromUnlock]);

  // increments the 'keyPressMoment', to define how long the key is pressed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyPressMoment) {
        dispatchInput({ type: inputActions.KEY_PRESS_INC, inc: keyPressMoment + 500 });
      }
    }, 500);

    return () => { clearTimeout(timer); };
  }, [keyPressMoment]);

  // defines wherever the pick is broken or not
  // useEffect(() => {
  //   if (!keyPressMoment) return;
  //   if (distanceFromUnlock === 0) return;

  //   // exit if difference of time is insignificant (< 25)
  //   const diffTime = Math.abs(Date.now() - keyPressMoment);
  //   if (diffTime < 25) return;

  //   // checks for the lives quantity to determine if it'll be decreased
  //   // or if the game is over (no more picks to pick the lock)
  //   if (pickLives > 0) {
  //     dispatchPick({ type: pickActions.REMOVE_PICK_LIFE });
  //     dispatchPick({ type: pickActions.SET_BROKE_PICK, status: true });
  //     return;
  //   }
  //   if (pickLives === 0) {
  //     console.log('game over, no more picks for you');
  //     return dispatchPick({ type: pickActions.SET_GAME_OVER, gameOver: true });
  //   }
  // }, [keyPressMoment, distanceFromUnlock, pickLives]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (pickIsBroken) dispatchPick({ type: pickActions.SET_BROKE_PICK, status: false });
  //   }, 1000);

  //   return () => { clearTimeout(timer); };
  // }, [pickIsBroken]);

  // reset the hotzone and input states if the pick is broken
  // useEffect(() => {
  //   dispatchMove({ type: moveActions.CLEAR_HOTZONE });
  // }, [pickLives]);


  let lockpad = unlock ? <p>Unlocked!</p> : (
    <S.Container
      tabIndex="0"
      onMouseUp={() => dispatchInput({ type: inputActions.MOUSE_UP })}
      onMouseDown={() => dispatchInput({ type: inputActions.MOUSE_DOWN })}
      onKeyUp={setKeyUp}
      onKeyDown={setKeyDown}
      onMouseMove={setPickPosition}
    >
      <Lockpad
        rotation={rotation}
        turning={turning}
        pickRef={pickRef}
        pickPosition={pickPosition}
        pickBroke={pickIsBroken}
      />
    </S.Container>
  );

  if (gameOver) {
    lockpad = <p>Game over...</p>;
  }
  return lockpad;
};

export default LockPad;
