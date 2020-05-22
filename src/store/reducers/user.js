import { userActions } from '../actions/actionTypes';

const initState = {
  isAuth: false,
  navigation: false
};

export const setAuth = (state, action) => ({
  ...state,
  isAuth: action.auth
});

export const setNavigation = (state, action) => ({
  ...state,
  navigation: action.navigation
});


const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.SET_AUTH: return setAuth(state, action);
    case userActions.SET_NAVIGATION: return setNavigation(state, action);
    default: return state;
  }
};

export default userReducer;
