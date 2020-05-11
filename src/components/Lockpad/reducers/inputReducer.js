export const actions = {
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
  KEY_DOWN: 'KEY_DOWN',
  KEY_UP: 'KEY_UP',
  INPUT_EVENT: 'INPUT_EVENT'
};

export const initialState = {
  mouseDown: false,
  keyDown: false,
  event: null
};

export const inputReducer = (state, action) => {
  switch (action.type) {
    case actions.INPUT_EVENT: return { ...state, event: action.event };
    case actions.MOUSE_DOWN: return { ...state, mouseDown: true };
    case actions.MOUSE_UP: return { ...state, mouseDown: false };
    case actions.KEY_DOWN: return { ...state, keyDown: true };
    case actions.KEY_UP: return { ...state, keyDown: false };
    default: throw new Error('[inputReducer]: provided action.type is unknown');
  }
};
