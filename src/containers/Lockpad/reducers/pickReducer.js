const actions = {
  SET_PICK_LIVES: 'SET_PICK_LIVES',
  SET_UNLOCK: 'SET_UNLOCK',
  SET_GAME_OVER: 'SET_GAME_OVER'
};

export const initState = {
  pickLives: 3,
  unlock: false,
  gameOver: false
};

const setPickLives = (state, action) => ({
  ...state,
  pickLives: action.lives
});

const setUnlock = (state, action) => ({
  ...state,
  unlock: action.unlock
});

const setGameOver = (state, action) => ({
  ...state,
  gameOver: action.gameOver
});

export const pickReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PICK_LIVES: return setPickLives(state, action);
    case actions.SET_UNLOCK: return setUnlock(state, action);
    case actions.SET_GAME_OVER: return setGameOver(state, action);
    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
