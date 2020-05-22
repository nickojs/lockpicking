import { gameActions } from '../actions/actionTypes';

const initState = {
  gameOver: false,
  unlock: false,
  notification: false,
  redirect: null
};

const toggleUnlock = (state, action) => ({
  ...state,
  unlock: action.status
});

const toggleGameOver = (state, action) => ({
  ...state,
  gameOver: action.status
});

const toggleNotification = (state, action) => ({
  ...state,
  notification: action.status
});

const setRedirect = (state, action) => ({
  ...state,
  redirect: action.redirect
});


const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case gameActions.TOGGLE_UNLOCK: return toggleUnlock(state, action);
    case gameActions.TOGGLE_GAME_OVER: return toggleGameOver(state, action);
    case gameActions.TOGGLE_NOTIFICATION: return toggleNotification(state, action);
    case gameActions.SET_REDIRECT: return setRedirect(state, action);
    default: return state;
  }
};

export default gameReducer;
