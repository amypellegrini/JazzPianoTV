import createHeader from './components/header/header';
import createLogin from './components/login/login';

export default React => () => {
  const Header = createHeader(React);
  const Login = createLogin(React);

  return (
    <section id="jptv">
      <header>
        <Header />
        <Login />
      </header>
    </section>
  );
};