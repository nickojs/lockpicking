const actions = {
  SET_HOTZONE: 'SET_HOTZONE',
  ROTATE_LOCK: 'ROTATE_LOCK',
  UNLOCK: 'UNLOCK'
};

export const initState = {
  pickOnHotzone: false,
  rotateLock: false,
  unlock: false
};

export const lockpadReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_HOTZONE: return { ...state, pickOnHotzone: action.status };
    case actions.ROTATE_LOCK: return { ...state, rotateLock: action.status };
    case actions.UNLOCK: return { ...state, unlock: action.status };

    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
