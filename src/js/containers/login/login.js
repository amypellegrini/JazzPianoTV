import { connect } from 'react-redux';

import createLogin from '../../components/login/login';
import { login } from '../../actions/'

export default React => {
  const Login = createLogin(React);

  const mapDispatchToProps = dispatch => {
    return {
      onLoginClick: (event, history) => {
        event.preventDefault();
        event.stopPropagation();

        dispatch(login({
          isUserLogged: true
        }));

        history.push('/');
      }
    }
  }

  return connect(
    null,
    mapDispatchToProps
  )(Login);
}