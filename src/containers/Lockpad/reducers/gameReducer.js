const actions = {
  TOGGLE_UNLOCK: 'TOGGLE_UNLOCK',
  TOGGLE_GAME_OVER: 'TOGGLE_GAME_OVER',
  TOGGLE_NOTIFICATION: 'TOGGLE_NOTIFICATION',
  SET_REDIRECT: 'SET_REDIRECT'
};

export const initState = {
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


export const gameReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_UNLOCK: return toggleUnlock(state, action);
    case actions.TOGGLE_GAME_OVER: return toggleGameOver(state, action);
    case actions.TOGGLE_NOTIFICATION: return toggleNotification(state, action);
    case actions.SET_REDIRECT: return setRedirect(state, action);
    default: throw new Error('[gameReducer]: provided action.type is unknown');
  }
};

export default actions;
