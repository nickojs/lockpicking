const actions = {
  SET_HOTZONE: 'SET_HOTZONE',
  UNLOCK: 'UNLOCK'
};

export const initState = {
  pickOnHotzone: false,
  position: null,
  unlock: false
};

export const lockpadReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_HOTZONE: return { ...state, pickOnHotzone: action.status, position: action.position };
    case actions.UNLOCK: return { ...state, unlock: action.status };

    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
