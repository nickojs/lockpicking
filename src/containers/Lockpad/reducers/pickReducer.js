const actions = {
  REDUCE_PICK_LIFE: 'REDUCE_PICK_LIFE',
  REDUCE_PICKLIVES: 'REDUCE_PICKLIVES',
  SET_UNLOCK: 'SET_UNLOCK',
  CLEAR_UNLOCK: 'CLEAR_UNLOCK',
  SET_GAME_OVER: 'SET_GAME_OVER',
  CLEAR_GAME: 'CLEAR_GAME'
};

export const initState = {
  pickLife: 100,
  pickLives: 3,
  unlock: false,
  gameOver: false
};

const reducePickLife = (state, action) => ({
  ...state,
  pickLife: state.pickLife - 1
});

const reducePickLives = (state, action) => ({
  ...state,
  pickLives: state.pickLives - 1,
  pickLife: 100
});

const setUnlock = (state, action) => ({
  ...state,
  unlock: true
});

const clearUnlock = (state, action) => ({
  ...state,
  unlock: false
});

const setGameOver = (state, action) => ({
  ...state,
  gameOver: true
});

const clearGame = (state, action) => ({
  ...state,
  ...initState
});

export const pickReducer = (state, action) => {
  switch (action.type) {
    case actions.REDUCE_PICK_LIFE: return reducePickLife(state, action);
    case actions.SET_UNLOCK: return setUnlock(state, action);
    case actions.CLEAR_UNLOCK: return clearUnlock(state, action);
    case actions.SET_GAME_OVER: return setGameOver(state, action);
    case actions.CLEAR_GAME: return clearGame(state, action);
    case actions.REDUCE_PICKLIVES: return reducePickLives(state, action);
    default: throw new Error('[pickReducer]: provided action.type is unknown');
  }
};

export default actions;
