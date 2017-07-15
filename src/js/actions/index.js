import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';

export const signupRequest = user => {
  return {
    type: SIGNUP_REQUEST,
    user
  }
}


export const login = user => {
  return dispatch => {
    dispatch();
  }
}