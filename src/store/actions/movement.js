import { movementActions } from './actionTypes';

export const setHotzone = (distance) => ({
  type: movementActions.SET_HOTZONE,
  distance
});

export const clearHotzone = () => ({
  type: movementActions.CLEAR_HOTZONE
});

export const setRotation = (rotation) => ({
  type: movementActions.SET_ROTATION,
  rotation
});

export const setTurning = () => ({
  type: movementActions.SET_TURNING
});

export const clearTurning = () => ({
  type: movementActions.CLEAR_TURNING
});

export const setUnlockable = () => ({
  type: movementActions.SET_UNLOCKABLE
});

export const clearUnlockable = () => ({
  type: movementActions.CLEAR_UNLOCKABLE
});
