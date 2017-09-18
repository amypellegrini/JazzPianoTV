import createHeader from './components/header/header';
import createLoginMenu from './containers/login-menu/login-menu';
import createNavMenu from './components/nav-menu/nav-menu';

export default React => () => {
  const Header = createHeader(React);
  const LoginMenu = createLoginMenu(React);
  const NavMenu = createNavMenu(React);

  return (
    <section id="jptv">
      <header>
        <Header />
        <NavMenu />
        <LoginMenu />
      </header>
    </section>
  );
};