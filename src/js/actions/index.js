const LOGIN = 'LOGIN';

export function login({ isUserLogged }) {
  return {
    type: LOGIN,
    isUserLogged
  }
}