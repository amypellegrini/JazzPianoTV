import createHeader from './components/header/header';
import createLoginMenu from './components/login-menu/login-menu';

export default React => () => {
  const Header = createHeader(React);
  const LoginMenu = createLoginMenu(React);

  return (
    <section id="jptv">
      <header>
        <Header />
        <LoginMenu />
      </header>
    </section>
  );
};