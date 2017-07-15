import './my-account.css';
import createButton from '../button/button';
import createLogin from '../../containers/login/login';

export default React => ({ user, isUserLogged }) => {

  if (isUserLogged && user) {
    const Button = createButton(React);

    return (
      <div className="jptv-my-account logged-in">
        <h2>My Account</h2>
        <dl>
          <dt>Name</dt>
          <dd>{ user.name }</dd>
          <dt>Email</dt>
          <dd>{ user.email }</dd>
          <Button label="Change password / edit details" />
        </dl>
      </div>
    );
  } else {
    const Login = createLogin(React);

    return (
      <div className="jptv-my-account not-logged">
        <h3>Please login to access your account</h3>
        <Login />
      </div>
    )
  }
}