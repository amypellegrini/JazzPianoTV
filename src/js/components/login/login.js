import './login.css';
import createButton from '../button/button';

export default React => () => {
  const Button = createButton(React);
  const label = 'Login';

  return (
    <div className="jptv-login-user">
      <h2>Login</h2>
      <form>
        <label>Username / email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <Button label={ label } />
      </form>
    </div>
  );
}