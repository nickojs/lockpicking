const actions = {
  SET_HOTZONE: 'SET_HOTZONE',
  SET_ROTATION: 'SET_ROTATION'
};

export const initState = {
  pickOnHotzone: false,
  distanceFromUnlock: null,
  rotation: 0
};

const setHotzone = (state, action) => ({
  ...state,
  pickOnHotzone: action.status,
  distanceFromUnlock: action.distance
});

const exitHotzone = (state, action) => ({
  ...state,
  distanceFromUnlock: null,
  pickOnHotzone: false,
  rotation: 0
});

const setRotation = (state, action) => ({
  ...state,
  rotation: action.rotation
});

export const lockpadReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_HOTZONE: return setHotzone(state, action);
    case actions.EXIT_HOTZONE: return exitHotzone(state, action);
    case actions.SET_ROTATION: return setRotation(state, action);

    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
