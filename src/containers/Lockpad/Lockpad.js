import React, { useEffect, useReducer } from 'react';
import inputActions, { inputReducer, initState as initInput } from './reducers/inputReducer';

import * as S from './styles';
import Lockpad from './lockpad/lockpad';
// import HUD from '../../components/hud/hud';

const LockPad = ({ location }) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initInput);
  const { mouseDown, keyDown, keyPressMoment } = inputState;
  const { /* info, */ lifeSpeed } = location.state; // game settings data

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

  // // defines if the pick is on the hotzone
  // useEffect(() => {
  //   const isPickOnHotzone = hotzone.includes(pickPosition);
  //   if (!isPickOnHotzone) {
  //     return dispatchMove({ type: moveActions.CLEAR_HOTZONE });
  //   }
  //   const distance = distanceMeter(pickPosition, unlockzone);
  //   dispatchMove({ type: moveActions.SET_HOTZONE, distance });
  // }, [pickPosition, hotzone, unlockzone]);

  // // calculates the distance between the current pick location and unlockzone
  // // and generates a rotation angle based on this distance
  // useEffect(() => {
  //   const degs = 90 - (distanceFromUnlock * 2);

  //   if (distanceFromUnlock === null) return;
  //   /*
  //     'unlockable' seems redundant, but it exists because the other effect needs
  //     to know this, in order to trigger the timed 'unlock' functionality.
  //     another way is to pass 'distanceFromUnlock' on the next effect
  //     as a dependency, but it triggers multiple useless re-renders
  //   */
  //   if (distanceFromUnlock === 0) {
  //     dispatchMove({ type: moveActions.SET_UNLOCKABLE });
  //     dispatchMove({ type: moveActions.SET_ROTATION, rotation: degs });
  //   }
  //   if (distanceFromUnlock !== 0) {
  //     dispatchMove({ type: moveActions.CLEAR_UNLOCKABLE });
  //     dispatchMove({ type: moveActions.SET_ROTATION, rotation: degs });
  //   }
  // }, [distanceFromUnlock]);

  // acts like a global timeout, counting for how long the key is being pressed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyPressMoment) {
        dispatchInput({ type: inputActions.KEY_PRESS_INC, inc: keyPressMoment + lifeSpeed });
      }
    }, lifeSpeed);
    return () => { clearTimeout(timer); };
  }, [keyPressMoment, lifeSpeed]);

  // // turns the lock based on keyPress (keyDown)
  // useEffect(() => {
  //   if (!keyDown) {
  //     return dispatchMove({ type: moveActions.CLEAR_TURNING });
  //   }
  //   dispatchMove({ type: moveActions.SET_TURNING });
  // }, [keyDown]);

  // // defines wherever the pick is broken or not
  // useEffect(() => {
  //   // if the key is not being pressed, exits this effect
  //   if (!keyPressMoment) return;
  //   /*
  //     here I apply the 'global timeout' of keyPressMoment effect and
  //     compare with a 'current' Date.now() to get how long the key is pressed
  //   */
  //   const diffTime = Math.abs(Date.now() - keyPressMoment);
  //   // starts to "hurt" the pick || unlock at .2s of hold time
  //   if (diffTime > 20) {
  //     // toggles unlock and reduce pickLife - while the key is pressed!
  //     dispatchPick({ type: pickActions.CLEAR_UNLOCK });
  //     dispatchPick({ type: pickActions.REDUCE_PICK_LIFE });
  //     /*
  //       this is why 'isUnlockable' is necessary, and have better performance
  //       if compared with 'distanceFromUnlock', which triggers everytime
  //     */
  //     if (isUnlockable) return dispatchPick({ type: pickActions.SET_UNLOCK });
  //   }
  // }, [keyPressMoment, isUnlockable]);

  // // remove a pick if pickLife reduces to zero, also toggles notification
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatchPick({ type: pickActions.TOGGLE_NOTIFICATION, status: false });
  //   }, 1500);

  //   if (pickLife === 0) {
  //     dispatchPick({ type: pickActions.TOGGLE_NOTIFICATION, status: true });
  //     dispatchPick({ type: pickActions.REDUCE_PICKLIVES });
  //   }

  //   return () => { clearTimeout(timer); };
  // }, [pickLife]);

  // // ends game if pickLives is reduced to zero
  // useEffect(() => {
  //   if (pickLives === 0) {
  //     dispatchPick({ type: pickActions.SET_GAME_OVER });
  //   }
  // }, [pickLives]);

  // // creates the redirect component
  // let endgameRedirect = null;

  // if (unlock || gameOver) {
  //   const picks = initPick.pickLives === pickLives
  //     ? 0
  //     : initPick.pickLives - pickLives;

  //   const totalTime = (Date.now() - location.state.startingTime) / 1000;

  //   const endgameData = {
  //     gameOver,
  //     unlock,
  //     stats: {
  //       picks,
  //       totalTime
  //     }
  //   };

  //   endgameRedirect = (
  //     <Redirect to={{
  //       pathname: '/endgame',
  //       state: endgameData
  //     }}
  //     />
  //   );
  // }

  // let notificationComponent = null;
  // if (notification) {
  //   notificationComponent = <Notification>Oops, you just broke a pick</Notification>;
  // }

  return (
    <>
      {/* <HUD life={pickLife} picks={pickLives} info={info} /> */}
      <S.Container>
        <S.InnerContainer
          tabIndex="0"
          onMouseUp={() => dispatchInput({ type: inputActions.MOUSE_UP })}
          onMouseDown={() => dispatchInput({ type: inputActions.MOUSE_DOWN })}
          onKeyUp={setKeyUp}
          onKeyDown={setKeyDown}
          onMouseMove={setPickPosition}
        >
          <Lockpad input={inputState} location={location} />
        </S.InnerContainer>
      </S.Container>
    </>
  );
};

export default LockPad;
