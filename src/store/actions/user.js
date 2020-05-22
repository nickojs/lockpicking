import { userActions } from './actionTypes';

export const setAuth = (auth) => ({
  type: userActions.SET_AUTH,
  auth
});

export const setNavigation = (navigation) => ({
  type: userActions.SET_AUTH,
  navigation
});
