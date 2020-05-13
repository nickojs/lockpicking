const actions = {
  SET_HOTZONE: 'SET_HOTZONE',
  CLEAR_HOTZONE: 'CLEAR_HOTZONE',
  SET_ROTATION: 'SET_ROTATION',
  SET_TURNING: 'SET_TURNING',
  SET_UNLOCKABLE: 'SET_UNLOCKABLE'
};

export const initState = {
  isUnlockable: false,
  distanceFromUnlock: null,
  turning: false,
  rotation: 8
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
  turning: action.status
});

const setUnlockable = (state, action) => ({
  ...state,
  isUnlockable: action.status
});

export const moveReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_HOTZONE: return setHotzone(state, action);
    case actions.CLEAR_HOTZONE: return clearHotzone(state, action);
    case actions.SET_ROTATION: return setRotation(state, action);
    case actions.SET_TURNING: return setTurning(state, action);
    case actions.SET_UNLOCKABLE: return setUnlockable(state, action);
    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
