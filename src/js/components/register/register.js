import { Link } from 'react-router-dom';

import './signup.css';
import createButton from '../button/button';

export default React => ({ onClick }) => {
  const Button = createButton(React);
  const label = 'Signup';

  return (
    <div className="jptv-register-user">
      <section id="register">
        <h2>Signup</h2>
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <label>Repeat password:</label>
          <input type="password" />
          <Button label={ label } onClick={ onClick } />
          <p>Already registered? <Link to="/login" >Login</Link></p>
        </form>
      </section>
    </div>
  );
}