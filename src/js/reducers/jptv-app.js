import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  isUserLogged: false
}

const jptvApp = (state, action) => {
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

export default combineReducers({
  jptvApp,
  form: formReducer
});
