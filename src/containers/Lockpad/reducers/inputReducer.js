const actions = {
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
  KEY_DOWN: 'KEY_DOWN',
  KEY_UP: 'KEY_UP',
  INPUT_EVENT: 'INPUT_EVENT',
  KEY_PRESS_START: 'KEY_PRESS_START',
  KEY_PRESS_INC: 'KEY_PRESS_INC',
  KEY_PRESS_END: 'KEY_PRESS_END'
};

export const initState = {
  mouseDown: false,
  keyDown: false,
  keyIdentifier: null,
  keyPressMoment: null,
  event: null
};

const inputEvent = (state, action) => ({
  ...state,
  event: action.event
});

const mouseDown = (state, action) => ({
  ...state,
  mouseDown: true
});

const mouseUp = (state, action) => ({
  ...state,
  mouseDown: false
});

const keyDown = (state, action) => ({
  ...state,
  keyDown: true,
  keyIdentifier: action.key
});

const keyUp = (state, action) => ({
  ...state,
  keyDown: false,
  keyIdentifier: null
});

const keyPressStart = (state, action) => ({
  ...state,
  keyPressMoment: Date.now()
});

const keyPressInc = (state, action) => ({
  ...state,
  keyPressMoment: action.inc
});

const keyPressEnd = (state, action) => ({
  ...state,
  keyPressMoment: null
});

export const inputReducer = (state, action) => {
  switch (action.type) {
    case actions.INPUT_EVENT: return inputEvent(state, action);
    case actions.MOUSE_DOWN: return mouseDown(state, action);
    case actions.MOUSE_UP: return mouseUp(state, action);
    case actions.KEY_DOWN: return keyDown(state, action);
    case actions.KEY_UP: return keyUp(state, action);
    case actions.KEY_PRESS_START: return keyPressStart(state, action);
    case actions.KEY_PRESS_INC: return keyPressInc(state, action);
    case actions.KEY_PRESS_END: return keyPressEnd(state, action);
    default: throw new Error('[inputReducer]: provided action.type is unknown');
  }
};

export default actions;
