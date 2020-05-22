import { pickActions } from './actionTypes';

export const reducePickLife = () => ({
  type: pickActions.REDUCE_PICK_LIFE
});

export const reducePickLives = () => ({
  type: pickActions.REDUCE_PICKLIVES
});

export const clearGame = () => ({
  type: pickActions.CLEAR_GAME
});
