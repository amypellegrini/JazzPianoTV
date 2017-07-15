import './login.css';
import createButton from '../button/button';

export default React => ({ onLoginClick, history }) => {
  const Button = createButton(React);
  const label = 'Login';

  function onClick(event) {
    // pass history to container handler so that it can redirect.
    onLoginClick(event, history);
  }

  return (
    <div className="jptv-login-user">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <Button label={ label } onClick={ onClick } />
      </form>
    </div>
  );
}