const actions = {
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
  KEY_DOWN: 'KEY_DOWN',
  KEY_UP: 'KEY_UP',
  INPUT_EVENT: 'INPUT_EVENT',
  KEY_PRESS_START: 'KEY_PRESS_START',
  KEY_PRESS_INC: 'KEY_PRESS_INC',
  KEY_PRESS_END: 'KEY_PRESS_END',
  CLEAR_INPUT: 'CLEAR_INPUT'
};

export const initState = {
  mouseDown: false,
  keyDown: false,
  keyPressMoment: null,
  event: null
};

export const inputReducer = (state, action) => {
  switch (action.type) {
    case actions.INPUT_EVENT: return { ...state, event: action.event };
    case actions.MOUSE_DOWN: return { ...state, mouseDown: true };
    case actions.MOUSE_UP: return { ...state, mouseDown: false };
    case actions.KEY_DOWN: return { ...state, keyDown: true };
    case actions.KEY_UP: return { ...state, keyDown: false };
    case actions.KEY_PRESS_START: return { ...state, keyPressMoment: Date.now() };
    case actions.KEY_PRESS_INC: return { ...state, keyPressMoment: action.inc };
    case actions.KEY_PRESS_END: return { ...state, keyPressMoment: null };
    case actions.CLEAR_INPUT: return { ...state, ...initState };
    default: throw new Error('[inputReducer]: provided action.type is unknown');
  }
};

export default actions;
