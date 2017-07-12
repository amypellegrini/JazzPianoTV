import './login-menu.css';

export default React => (props) => {
  const isUserLogged = props.isUserLogged;

  if (!isUserLogged) {
    return (
      <div className="jptv-login">
        <p>
          <span className="login">
            Login</span> | <span className="register">
            Register</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="jptv-login">
        <p>
          <span className="logout">Logout</span>
        </p>
      </div>
    );
  }
}