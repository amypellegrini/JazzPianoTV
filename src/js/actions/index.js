import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const LOAD_PAGE_REQUEST = 'LOAD_PAGE_REQUEST';
export const LOAD_PAGE_SUCCESS = 'LOAD_PAGE_SUCCESS';
export const LOAD_PAGE_FAILURE = 'LOAD_PAGE_FAILURE';

export const signupRequest = user => {
  return {
    type: SIGNUP_REQUEST,
    user
  }
}

export const loginRequest = user => {
  return dispatch => {
    dispatch();
  }
}

export const loadPageRequest = request => {

}

export const loadPageSuccess = request => {
  
}

export const loadPageError = request => {

}
