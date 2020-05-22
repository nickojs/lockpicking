import { movementActions } from '../actions/actionTypes';

const initState = {
  isUnlockable: false,
  distanceFromUnlock: null,
  turning: false,
  rotation: 8
};

const setHotzone = (state, action) => ({
  ...state,
  distanceFromUnlock: action.distance
});

const clearHotzone = (state) => ({
  ...state,
  ...initState
});

const setRotation = (state, action) => ({
  ...state,
  rotation: action.rotation
});

const setTurning = (state) => ({
  ...state,
  turning: true
});

const clearTurning = (state) => ({
  ...state,
  turning: false
});

const setUnlockable = (state) => ({
  ...state,
  isUnlockable: true
});

const clearUnlockable = (state) => ({
  ...state,
  isUnlockable: false
});

const moveReducer = (state = initState, action) => {
  switch (action.type) {
    case movementActions.SET_HOTZONE: return setHotzone(state, action);
    case movementActions.CLEAR_HOTZONE: return clearHotzone(state, action);
    case movementActions.SET_ROTATION: return setRotation(state, action);
    case movementActions.SET_TURNING: return setTurning(state, action);
    case movementActions.CLEAR_TURNING: return clearTurning(state, action);
    case movementActions.SET_UNLOCKABLE: return setUnlockable(state, action);
    case movementActions.CLEAR_UNLOCKABLE: return clearUnlockable(state, action);
    default: return state;
  }
};

export default moveReducer;
