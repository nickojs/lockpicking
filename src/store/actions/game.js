import { gameActions } from './actionTypes';

export const toggleUnlock = (unlock) => ({
  type: gameActions.TOGGLE_UNLOCK,
  unlock
});

export const toggleGameOver = (gameOver) => ({
  type: gameActions.TOGGLE_GAME_OVER,
  gameOver
});

export const toggleNotification = (notification) => ({
  type: gameActions.TOGGLE_NOTIFICATION,
  notification
});

export const setRedirect = (redirect) => ({
  type: gameActions.SET_REDIRECT,
  redirect
});
