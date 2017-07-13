const initialState = {
  isUserLogged: false
}

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        isUserLogged: action.isUserLogged
      })
  }

  return state;
}
