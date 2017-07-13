import { connect } from 'react-redux';

import createLoginMenu from '../../components/login-menu/login-menu';

export default React => {
  const LoginMenu = createLoginMenu(React);

  const mapStateToProps = state => {
    return {
      isUserLogged: state.isUserLogged
    }
  }

  return connect(
    mapStateToProps
  )(LoginMenu);
}