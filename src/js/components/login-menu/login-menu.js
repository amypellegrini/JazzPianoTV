import { Link } from 'react-router-dom';

import './login-menu.css';

export default React => ({ isUserLogged, onLogoutClick }) => {
  if (!isUserLogged) {
    return (
      <div className="jptv-login-menu">
        <p>
          <span className="login">
            <Link to="/login">Login</Link>
          </span>
          <span className="separator"> | </span>
          <span className="register">
            <Link to="/register">Register</Link>
          </span>
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