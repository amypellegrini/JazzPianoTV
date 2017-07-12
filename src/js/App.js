import createHeader from './components/header/header';
import createLogin from './components/login/login';
import createRegister from './components/register/register';

export default React => () => {
  const Header = createHeader(React);
  const Login = createLogin(React);
  const Register = createRegister(React);

  return (
    <section id="jptv">
      <header>
        <Header />
        <Login />
        <Register />
      </header>
    </section>
  );
};