const actions = {
  SET_HOTZONE: 'SET_HOTZONE',
  EXIT_HOTZONE: 'EXIT_HOTZONE',
  UNLOCK: 'UNLOCK'
};

export const initState = {
  pickOnHotzone: false,
  distanceFromUnlock: null,
  unlock: false
};

export const lockpadReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_HOTZONE: return (
      { ...state, pickOnHotzone: action.status, distanceFromUnlock: action.distance }
    );
    case actions.EXIT_HOTZONE: return { ...state, pickOnHotzone: false };
    case actions.UNLOCK: return { ...state, unlock: action.status };

    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
