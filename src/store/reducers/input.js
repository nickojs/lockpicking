import { inputActions } from '../actions/actionTypes';

const initState = {
  mouseDown: false,
  keyDown: false,
  keyPressMoment: null,
  event: null
};

const inputEvent = (state, action) => ({
  ...state,
  event: action.event
});

const mouseDown = (state) => ({
  ...state,
  mouseDown: true
});

const mouseUp = (state) => ({
  ...state,
  mouseDown: false
});

const keyDown = (state) => ({
  ...state,
  keyDown: true
});

const keyUp = (state) => ({
  ...state,
  keyDown: false
});

const keyPressStart = (state) => ({
  ...state,
  keyPressMoment: Date.now()
});

const keyPressInc = (state, action) => ({
  ...state,
  keyPressMoment: action.inc
});

const keyPressEnd = (state) => ({
  ...state,
  keyPressMoment: null
});

const inputReducer = (state = initState, action) => {
  switch (action.type) {
    case inputActions.INPUT_EVENT: return inputEvent(state, action);
    case inputActions.MOUSE_DOWN: return mouseDown(state, action);
    case inputActions.MOUSE_UP: return mouseUp(state, action);
    case inputActions.KEY_DOWN: return keyDown(state, action);
    case inputActions.KEY_UP: return keyUp(state, action);
    case inputActions.KEY_PRESS_START: return keyPressStart(state, action);
    case inputActions.KEY_PRESS_INC: return keyPressInc(state, action);
    case inputActions.KEY_PRESS_END: return keyPressEnd(state, action);
    default: return state;
  }
};

export default inputReducer;
