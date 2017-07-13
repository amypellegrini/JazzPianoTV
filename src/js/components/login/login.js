import './login.css';
import createButton from '../button/button';

export default React => ({ onLoginClick, history }) => {
  console.log(history);
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
      </form>
    </div>
  );
}