import { Link } from 'react-router-dom';

import './login-menu.css';

export default React => ({ isUserLogged, onLogoutClick }) => {
  if (!isUserLogged) {
    return (
      <div className="jptv-login-menu">
        <p>
          <Link to="/login" className="login">Login</Link>
          <span className="separator"> | </span>
          <Link to="/register" className="register">Signup</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="jptv-login-menu">
        <p>
          <span className="logout" onClick={ onLogoutClick }>Logout</span>
        </p>
      </div>
    );
  }
}