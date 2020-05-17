import React, { useEffect, useRef, useReducer } from 'react';
import { Redirect } from 'react-router-dom';

import inputActions, { inputReducer, initState as initInput } from './reducers/inputReducer';
import moveActions, { moveReducer, initState as initMove } from './reducers/movementReducer';
import pickActions, { pickReducer, initState as initPick } from './reducers/pickReducer';

import Lockpad from '../../components/lockpad/lockpad';
import HUD from '../../components/hud/hud';
import * as S from './styles';
import useAngle from '../../hooks/angle';
import genArray from '../../helpers/array-generator';
import distanceMeter from '../../helpers/distance-meter';

const hotzone = genArray([0, 50]);
const unlockZone = genArray([20, 40]);

const LockPad = ({ location }) => {
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
    pickLife, pickLives, unlock, gameOver
  } = pickState;

  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  const setPickPosition = ({ nativeEvent }) => {
    // needs to check the keyDown to prevent 'move and unlock' bug
    if (mouseDown && !keyDown) {
      return dispatchInput({ type: inputActions.INPUT_EVENT, event: nativeEvent });
    }
  };

  const setKeyDown = ({ nativeEvent }) => {
    if (keyDown) return;
    dispatchInput({ type: inputActions.KEY_DOWN, key: nativeEvent.keyCode });
    dispatchInput({ type: inputActions.KEY_PRESS_START });
  };

  const setKeyUp = () => {
    dispatchInput({ type: inputActions.KEY_UP });
    dispatchInput({ type: inputActions.KEY_PRESS_END });
  };


  useEffect(() => {
    // generate the hotzone/unlockzone dynamically on mount
    // ...
  }, []);

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
      'unlockable' seems redundant, but it exists because the other effect needs
      to know this, in order to trigger the timed 'unlock' functionality.
      another way is to pass 'distanceFromUnlock' on the next effect
      as a dependency, but it triggers multiple useless re-renders
    */
    if (distanceFromUnlock === 0) {
      dispatchMove({ type: moveActions.SET_UNLOCKABLE });
      dispatchMove({ type: moveActions.SET_ROTATION, rotation: degs });
    }
    if (distanceFromUnlock !== 0) {
      dispatchMove({ type: moveActions.CLEAR_UNLOCKABLE });
      dispatchMove({ type: moveActions.SET_ROTATION, rotation: degs });
    }
  }, [distanceFromUnlock]);

  // acts like a global timeout, counting for how long the key is being pressed
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
    if (!keyDown) {
      return dispatchMove({ type: moveActions.CLEAR_TURNING });
    }
    dispatchMove({ type: moveActions.SET_TURNING });
  }, [keyDown]);

  // defines wherever the pick is broken or not
  useEffect(() => {
    // if the key is not being pressed, exits this effect
    if (!keyPressMoment) return;
    /*
      here I apply the 'global timeout' of keyPressMoment effect and
      compare with a 'current' Date.now() to get how long the key is pressed
    */
    const diffTime = Math.abs(Date.now() - keyPressMoment);
    // starts to "hurt" the pick || unlock at .2s of hold time
    if (diffTime > 20) {
      // toggles unlock and reduce pickLife - while the key is pressed!
      dispatchPick({ type: pickActions.CLEAR_UNLOCK });
      dispatchPick({ type: pickActions.REDUCE_PICK_LIFE });
      /*
        this is why 'isUnlockable' is necessary, and have better performance
        if compared with 'distanceFromUnlock', which triggers everytime
      */
      if (isUnlockable) return dispatchPick({ type: pickActions.SET_UNLOCK });
    }
  }, [keyPressMoment, isUnlockable]);

  // remove a pick if pickLife reduces to zero
  useEffect(() => {
    if (pickLife === 0) {
      dispatchPick({ type: pickActions.REDUCE_PICKLIVES });
    }
  }, [pickLife]);

  // ends game if pickLives is reduced to zero
  useEffect(() => {
    if (pickLives === 0) {
      dispatchPick({ type: pickActions.SET_GAME_OVER });
    }
  }, [pickLives]);

  // creates the redirect component
  let endgameRedirect = null;

  if (unlock || gameOver) {
    const picks = initPick.pickLives === pickLives
      ? initPick.pickLives
      : initPick.pickLives - pickLives;

    const totalTime = (Date.now() - location.state.startingTime) / 1000;

    const endgameData = {
      gameOver,
      unlock,
      picks,
      totalTime
    };

    endgameRedirect = (
      <Redirect to={{
        pathname: '/endgame',
        state: endgameData
      }}
      />
    );
  }

  return (
    <>
      <HUD life={pickLife} picks={pickLives} />
      <S.Container>
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
      </S.Container>
      {endgameRedirect}
    </>
  );
};

export default LockPad;
