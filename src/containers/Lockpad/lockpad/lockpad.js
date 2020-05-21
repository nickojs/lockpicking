import React, { useEffect, useReducer, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as moveActions from '../../../store/actions/movement';

import Notification from '../../../components/notification/notification';

import * as S from './styles';
import lockhole from '../../../assets/lockpad/lockhole.png';
import pick from '../../../assets/lockpad/pick_with_space.png';

import pickActions, { pickReducer, initState as initPick } from '../reducers/pickReducer';
import gameActions, { gameReducer, initState as initGame } from '../reducers/gameReducer';

import useAngle from '../../../hooks/angle';
import distanceMeter from '../../../helpers/distance-meter';


const Lockpad = ({ location, input }) => {
  const { keyDown, event, keyPressMoment } = input;
  const { hotzone, unlockzone, startingTime } = location.state;
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event, hotzone);

  const dispatch = useDispatch();

  const moveState = useSelector((state) => state.movement);
  const { turning, rotation, distanceFromUnlock, isUnlockable } = moveState;

  const [pickState, dispatchPick] = useReducer(pickReducer, initPick);
  const { pickLife, pickLives } = pickState;

  const [gameState, dispatchGame] = useReducer(gameReducer, initGame);
  const { gameOver, unlock, notification, redirect } = gameState;

  // defines if the pick is on the hotzone
  useEffect(() => {
    const isPickOnHotzone = hotzone.includes(pickPosition);
    // limits the dispatches, without gameplay sacrifice
    const timer = setTimeout(() => {
      if (!isPickOnHotzone) dispatch(moveActions.clearHotzone());
    }, 250);

    const distance = distanceMeter(pickPosition, unlockzone);
    dispatch(moveActions.setHotzone(distance));

    return () => { clearTimeout(timer); };
  }, [pickPosition, hotzone, unlockzone, dispatch]);

  // calculates the distance between the current pick location and unlockzone
  useEffect(() => {
    const degs = 90 - (distanceFromUnlock * 2);

    if (distanceFromUnlock === null) return;

    dispatch(moveActions.setRotation(degs));

    if (distanceFromUnlock === 0) {
      dispatch(moveActions.setUnlockable());
    }
    if (distanceFromUnlock !== 0) {
      dispatch(moveActions.clearUnlockable());
    }
  }, [distanceFromUnlock, dispatch]);

  // turns the lock based on keyPress (keyDown)
  useEffect(() => {
    if (!keyDown) {
      dispatch(moveActions.clearTurning());
      return;
    }
    dispatch(moveActions.setTurning());
  }, [keyDown, dispatch]);

  // defines wherever the pick is broken or not
  useEffect(() => {
    // if the key is not being pressed, exits this effect
    if (!keyPressMoment) return;

    const diffTime = Math.abs(Date.now() - keyPressMoment);
    // starts to "hurt" the pick after sometime
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
        <S.LockpadContainer
          position={rotation}
          isTurning={turning}
        >
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
