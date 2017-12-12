import { connect } from 'react-redux';
import { login } from '../../actions/';

import createLoginMenu from './login-menu';

export default React => {
  const LoginMenu = createLoginMenu(React);

  const mapStateToProps = state => {
    return {
      isUserLogged: state.isUserLogged
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onLogoutClick: () => {
        dispatch(login({
          isUserLogged: false
        }));
      }
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginMenu);
}