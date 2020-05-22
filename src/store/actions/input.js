import { inputActions } from './actionTypes';

export const inputEvent = (event) => ({
  type: inputActions.INPUT_EVENT,
  event
});

export const mouseDown = () => ({
  type: inputActions.MOUSE_DOWN
});

export const mouseUp = () => ({
  type: inputActions.MOUSE_UP
});

export const keyDown = () => ({
  type: inputActions.KEY_DOWN
});

export const keyUp = () => ({
  type: inputActions.KEY_UP
});

export const keyPressStart = () => ({
  type: inputActions.KEY_PRESS_START
});

export const keyPressInc = (inc) => ({
  type: inputActions.KEY_PRESS_INC,
  inc
});

export const keyPressEnd = () => ({
  type: inputActions.KEY_PRESS_END
});
