const actions = {
  REMOVE_PICK_LIFE: 'REMOVE_PICK_LIFE',
  SET_UNLOCK: 'SET_UNLOCK',
  SET_GAME_OVER: 'SET_GAME_OVER',
  CLEAR_GAME: 'CLEAR_GAME'
};

export const initState = {
  pickLives: 3,
  unlock: false,
  gameOver: false
};

const removePickLife = (state, action) => ({
  ...state,
  pickLives: state.pickLives - 1
});

const setUnlock = (state, action) => ({
  ...state,
  unlock: action.unlock
});

const setGameOver = (state, action) => ({
  ...state,
  gameOver: action.gameOver
});

const clearPick = (state, action) => ({
  ...state,
  ...initState
});

export const pickReducer = (state, action) => {
  switch (action.type) {
    case actions.REMOVE_PICK_LIFE: return removePickLife(state, action);
    case actions.SET_UNLOCK: return setUnlock(state, action);
    case actions.SET_GAME_OVER: return setGameOver(state, action);
    case actions.CLEAR_GAME: return clearPick(state, action);
    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
