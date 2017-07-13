import './login.css';
import createButton from '../button/button';

export default React => ({ onLoginClick, history }) => {
  const Button = createButton(React);
  const label = 'Login';

  function onClick(event) {
    onLoginClick(event, history);
  }

  return (
    <div className="jptv-login-user">
      <h2>Login</h2>
      <form>
        <label>Username / email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <Button label={ label } onClick={ onClick } />
        <div className="fb-login-button"
              data-max-rows="1"
              data-size="medium"
              data-button-type="login_with"
              data-show-faces="false"
              data-auto-logout-link="false" data-use-continue-as="true"></div>
      </form>
    </div>
  );
}