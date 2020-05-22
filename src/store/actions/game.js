import { gameActions } from './actionTypes';

export const toggleUnlock = (unlock) => ({
  type: gameActions.TOGGLE_UNLOCK,
  status: unlock
});

export const toggleGameOver = (gameOver) => ({
  type: gameActions.TOGGLE_GAME_OVER,
  status: gameOver
});

export const toggleNotification = (notification) => ({
  type: gameActions.TOGGLE_NOTIFICATION,
  status: notification
});

export const setRedirect = (redirect) => ({
  type: gameActions.SET_REDIRECT,
  redirect
});

export const settings = (data) => ({
  type: gameActions.SETTINGS,
  settings: data
});
