import React, { useEffect, useReducer, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Notification from '../../../components/notification/notification';

import * as S from './styles';
import lockhole from '../../../assets/lockpad/lockhole.png';
import pick from '../../../assets/lockpad/pick_with_space.png';

import moveActions, { moveReducer, initState as initMove } from '../reducers/movementReducer';
import pickActions, { pickReducer, initState as initPick } from '../reducers/pickReducer';
import gameActions, { gameReducer, initState as initGame } from '../reducers/gameReducer';

import useAngle from '../../../hooks/angle';
import distanceMeter from '../../../helpers/distance-meter';


const Lockpad = ({ location, input }) => {
  const { keyDown, event, keyPressMoment } = input;
  const { hotzone, unlockzone, startingTime } = location.state;
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  const [pickState, dispatchPick] = useReducer(pickReducer, initPick);
  const { pickLife, pickLives } = pickState;

  const [gameState, dispatchGame] = useReducer(gameReducer, initGame);
  const {
    gameOver, unlock, notification, redirect
  } = gameState;

  const [moveState, dispatchMove] = useReducer(moveReducer, initMove);
  const {
    isUnlockable, turning, distanceFromUnlock, rotation
  } = moveState;

  // defines if the pick is on the hotzone
  useEffect(() => {
    const isPickOnHotzone = hotzone.includes(pickPosition);
    if (!isPickOnHotzone) {
      return dispatchMove({ type: moveActions.CLEAR_HOTZONE });
    }
    const distance = distanceMeter(pickPosition, unlockzone);
    dispatchMove({ type: moveActions.SET_HOTZONE, distance });
  }, [pickPosition, hotzone, unlockzone]);

  // calculates the distance between the current pick location and unlockzone
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

    const diffTime = Math.abs(Date.now() - keyPressMoment);
    // starts to "hurt" the pick
    if (diffTime > 20) {
      dispatchGame({ type: gameActions.TOGGLE_UNLOCK, status: false });
      dispatchPick({ type: pickActions.REDUCE_PICK_LIFE });

      if (isUnlockable) return dispatchGame({ type: gameActions.TOGGLE_UNLOCK, status: true });
    }
  }, [keyPressMoment, isUnlockable]);

  // remove a pick if pickLife reduces to zero, also toggles notification
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatchGame({ type: gameActions.TOGGLE_NOTIFICATION, status: false });
    }, 1500);

    if (pickLife === 0) {
      dispatchGame({ type: gameActions.TOGGLE_NOTIFICATION, status: true });
      dispatchPick({ type: pickActions.REDUCE_PICKLIVES });
    }

    return () => { clearTimeout(timer); };
  }, [pickLife]);

  // ends game if pickLives is reduced to zero
  useEffect(() => {
    if (pickLives === 0) {
      dispatchGame({ type: gameActions.TOGGLE_GAME_OVER, status: true });
    }
  }, [pickLives]);

  // creates the redirect component
  useEffect(() => {
    if (unlock || gameOver) {
      const picks = pickLives;
      const totalTime = (Date.now() - startingTime) / 1000;
      const gameData = {
        gameOver,
        unlock,
        stats: { picks, totalTime }
      };

      dispatchGame({
        type: gameActions.SET_REDIRECT,
        redirect: {
          pathname: '/endgame',
          state: gameData
        }
      });
    }
  }, [unlock, gameOver, pickLives, startingTime]);

  return (
    <>
      <S.LockBackground>
        <S.LockpadContainer position={rotation} isTurning={turning}>
          <S.Pick
            src={pick}
            alt="a picklock that looks like a twig"
            ref={pickRef}
            position={pickPosition}
          />
          <S.LockpadBackground>
            <S.Lockpad
              src={lockhole}
              alt="an ugly but functional lockpad"
            />
          </S.LockpadBackground>
        </S.LockpadContainer>
      </S.LockBackground>
      {redirect
        && <Redirect to={redirect} />}
      {notification
        && <Notification>Oops, you just broke a pick</Notification>}
    </>
  );
};

export default Lockpad;
