import './register.css';
import createButton from '../button/button';

export default React => () => {
  const Button = createButton(React);
  const label = 'Register';

  return (
    <div className="jptv-register-user">
      <section id="register">
        <h2>Register</h2>
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <label>Repeat password:</label>
          <input type="password" />
          <Button label={ label } />
        </form>
      </section>
    </div>
  );
}