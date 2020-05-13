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
    pickLife, pickIsBroken, unlock, gameOver
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
    if (keyDown) return;
    dispatchInput({ type: inputActions.KEY_PRESS_START });
    dispatchInput({ type: inputActions.KEY_DOWN });
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
        dispatchInput({ type: inputActions.KEY_PRESS_INC, inc: keyPressMoment + 100 });
      }
    }, 100);
    return () => { clearTimeout(timer); };
  }, [keyPressMoment]);

  // turns the lock based on keyPress (keyDown)
  useEffect(() => {
    if (!keyDown) return dispatchMove({ type: moveActions.SET_TURNING, status: false });
    dispatchMove({ type: moveActions.SET_TURNING, status: true });
  }, [keyDown]);

  // defines wherever the pick is broken or not
  useEffect(() => {
    if (!keyPressMoment) return;
    /*
      this is kind of a global setTimeout, where the timeout is defined by the
      difference of current date and how long the *key* is being pressed
    */
    const diffTime = Math.abs(Date.now() - keyPressMoment);
    // only enters the timeout if key is being pressed for > .5s
    if (diffTime > 20) {
      if (isUnlockable) return dispatchPick({ type: pickActions.SET_UNLOCK, unlock: true });
      // toggles unlock, reduce pickLife and clears the UI state
      dispatchMove({ type: moveActions.CLEAR_HOTZONE });
      dispatchPick({ type: pickActions.SET_UNLOCK, unlock: false });
      dispatchPick({ type: pickActions.REDUCE_PICK_LIFE });
    }
  }, [keyPressMoment, isUnlockable]);

  // ends game if pickLife is reduced to zero
  useEffect(() => {
    if (pickLife !== 0) return;
    dispatchPick({ type: pickActions.SET_GAME_OVER, gameOver: true });
  }, [pickLife]);

  let lockpad = unlock ? <p>Unlocked!</p> : (
    <S.InnerContainer
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
      />
    </S.InnerContainer>
  );

  if (gameOver) {
    lockpad = <p>Game over...</p>;
  }

  return (
    <S.Container>
      {lockpad}
    </S.Container>
  );
};

export default LockPad;
