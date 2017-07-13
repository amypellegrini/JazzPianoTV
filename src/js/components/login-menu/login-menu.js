import { Link } from 'react-router-dom';

import './login-menu.css';

export default React => (props) => {
  const isUserLogged = props.isUserLogged;

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
          <span className="logout">
            <Link to="/">Logout</Link></span>
        </p>
      </div>
    );
  }
}