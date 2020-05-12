const actions = {
  SET_HOTZONE: 'SET_HOTZONE',
  CLEAR_HOTZONE: 'CLEAR_HOTZONE',
  SET_ROTATION: 'SET_ROTATION',
  SET_TURNING: 'SET_TURNING',
  SET_UNLOCK: 'SET_UNLOCK',
};

export const initState = {
  turning: false,
  distanceFromUnlock: null,
  unlock: false,
  rotation: 0,
};

const setHotzone = (state, action) => ({
  ...state,
  distanceFromUnlock: action.distance
});

const clearHotzone = (state, action) => ({
  ...state,
  ...initState
});

const setRotation = (state, action) => ({
  ...state,
  rotation: action.rotation
});

const setTurning = (state, action) => ({
  ...state,
  turning: action.turning
});


const setUnlock = (state, action) => ({
  ...state,
  unlock: action.unlock
});


export const lockpadReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_HOTZONE: return setHotzone(state, action);
    case actions.CLEAR_HOTZONE: return clearHotzone(state, action);
    case actions.SET_ROTATION: return setRotation(state, action);
    case actions.SET_TURNING: return setTurning(state, action);
    case actions.SET_UNLOCK: return setUnlock(state, action);

    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
