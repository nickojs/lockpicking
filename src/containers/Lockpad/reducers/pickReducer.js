const actions = {
  REDUCE_PICK_LIFE: 'REDUCE_PICK_LIFE',
  SET_UNLOCK: 'SET_UNLOCK',
  SET_GAME_OVER: 'SET_GAME_OVER',
  CLEAR_GAME: 'CLEAR_GAME',
  SET_BROKE_PICK: 'SET_BROKE_PICK'
};

export const initState = {
  pickLife: 100,
  pickLives: 3,
  unlock: false,
  gameOver: false,
  pickIsBroken: false
};

const reducePickLife = (state, action) => ({
  ...state,
  pickLife: state.pickLife - 1
});

const setBrokePick = (state, action) => ({
  ...state,
  pickLives: state.pickLives - 1,
  pickLife: 100
});

const setUnlock = (state, action) => ({
  ...state,
  unlock: action.unlock
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
    case actions.SET_GAME_OVER: return setGameOver(state, action);
    case actions.CLEAR_GAME: return clearGame(state, action);
    case actions.SET_BROKE_PICK: return setBrokePick(state, action);
    default: throw new Error('[lockpadReducer]: provided action.type is unknown');
  }
};

export default actions;
