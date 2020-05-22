import { pickActions } from '../actions/actionTypes';

const initState = {
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


const pickReducer = (state = initState, action) => {
  switch (action.type) {
    case pickActions.REDUCE_PICK_LIFE: return reducePickLife(state);
    case pickActions.CLEAR_GAME: return clearGame(state);
    case pickActions.REDUCE_PICKLIVES: return reducePickLives(state);
    default: return state;
  }
};

export default pickReducer;
