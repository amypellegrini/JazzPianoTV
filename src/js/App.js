import createHeader from './components/header/header';
import createLoginMenu from './components/login-menu/login-menu';
import createRegister from './components/register/register';

export default React => () => {
  const Header = createHeader(React);
  const LoginMenu = createLoginMenu(React);
  const Register = createRegister(React);

  return (
    <section id="jptv">
      <header>
        <Header />
        <LoginMenu />
        <Register />
      </header>
    </section>
  );
};