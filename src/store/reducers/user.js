import { userActions } from '../actions/actionTypes';

const initState = {
  navigation: false,
  isAuth: false,
  token: null,
  username: null
};

export const setAuth = (state, action) => ({
  ...state,
  isAuth: action.auth,
  token: action.token,
  username: action.username
});

export const setNavigation = (state, action) => ({
  ...state,
  navigation: action.navigation
});

export const logout = (state, action) => ({
  ...initState
});


const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.SET_AUTH: return setAuth(state, action);
    case userActions.SET_NAVIGATION: return setNavigation(state, action);
    case userActions.LOGOUT: return logout(state, action);
    default: return state;
  }
};

export default userReducer;
