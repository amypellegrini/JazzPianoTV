import createHeader from './components/header/header';
import createLoginMenu from './containers/login-menu/login-menu';
import createNavMenu from './components/nav-menu/nav-menu';
import createFooter from './components/footer/footer';

import createSignup from './components/signup/signup';
import createMyAccount from './containers/my-account/my-account';
import createLogin from './containers/login/login';
import {
  BrowserRouter as Router,
  Route,
  browserHistory } from 'react-router-dom';

export default React => () => {
  const Header = createHeader(React);
  const LoginMenu = createLoginMenu(React);
  const NavMenu = createNavMenu(React);
  const Footer = createFooter(React);
  const Signup = createSignup(React);
  const Login = createLogin(React);
  const MyAccount = createMyAccount(React);

  return (
    <Router history={ browserHistory }>
      <section id="jptv">
        <header>
          <Header />
          <NavMenu />
          <LoginMenu />
        </header>

        <Route path="/signup"
               component={ Signup } />
        <Route path="/login"
               component={ Login } />
        <Route path="/my-account"
               component={ MyAccount } />

        <Footer />
      </section>
    </Router>
  );
};