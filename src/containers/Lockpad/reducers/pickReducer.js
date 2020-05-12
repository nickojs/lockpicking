const actions = {
  SET_PICK_LIVES: 'SET_PICK_LIVES',
  SET_UNLOCK: 'SET_UNLOCK'
};

export const initState = {
  pickLives: 3,
  unlock: false
};

const setPickLives = (state, action) => ({
  ...state,
  pickLives: action.lives
});

const setUnlock = (state, action) => ({
  ...state,
  unlock: action.unlock
});

export const pickReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PICK_LIVES: return setPickLives(state, action);
    case actions.SET_UNLOCK: return setUnlock(state, action);
    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
