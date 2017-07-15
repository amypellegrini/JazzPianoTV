import { connect } from 'react-redux';
// import { saveAccountDetails } from '../../actions/';

import createMyAccount from '../../components/my-account/my-account';

export default React => {
  const MyAccount = createMyAccount(React);

  const mapStateToProps = (state, ownProps) => {
    return {
      isUserLogged: state.isUserLogged,
      // onEditSave: () => {
      //   dispatch(saveAccountDetails({
      //     user: ownProps.user
      //   }))
      // },
      user: state.user
    }
  }

  return connect(mapStateToProps)(MyAccount);
}

