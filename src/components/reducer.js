export const actionTypes = {
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
  KEY_DOWN: 'KEY_DOWN',
  KEY_UP: 'KEY_UP',
  INPUT_EVENT: 'INPUT_EVENT'
};

export const inputReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_EVENT: return { ...state, event: action.event };
    case actionTypes.MOUSE_DOWN: return { ...state, mouseDown: true };
    case actionTypes.MOUSE_UP: return { ...state, mouseDown: false };
    case actionTypes.KEY_DOWN: return { ...state, keyDown: true };
    case actionTypes.KEY_UP: return { ...state, keyDown: false };
    default: throw new Error('[inputReducer]: provided action.type is unknown');
  }
};
