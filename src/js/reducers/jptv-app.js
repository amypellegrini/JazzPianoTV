const initialState = {
  userLogged: false
}

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  return state;
}
