const actions = {
  REDUCE_PICK_LIFE: 'REDUCE_PICK_LIFE',
  REDUCE_PICKLIVES: 'REDUCE_PICKLIVES',
  CLEAR_GAME: 'CLEAR_GAME'
};

export const initState = {
  pickLife: 100,
  pickLives: 3
};

const reducePickLife = (state) => ({
  ...state,
  pickLife: state.pickLife - 1
});

const reducePickLives = (state) => ({
  ...state,
  pickLives: state.pickLives - 1,
  pickLife: 100
});

const clearGame = (state) => ({
  ...state,
  ...initState
});


export const pickReducer = (state, action) => {
  switch (action.type) {
    case actions.REDUCE_PICK_LIFE: return reducePickLife(state);
    case actions.CLEAR_GAME: return clearGame(state);
    case actions.REDUCE_PICKLIVES: return reducePickLives(state);
    default: throw new Error('[pickReducer]: provided action.type is unknown');
  }
};

export default actions;
