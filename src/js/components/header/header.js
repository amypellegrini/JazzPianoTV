import createLogo from '../logo/logo';
import createQuote from '../quote/quote';
// import createSearch from '../search/search';
// import createLoginMenu from '../login-menu/login-menu.container';

export default React => () => {
  const Logo = createLogo(React);
  const Quote = createQuote(React);
  // const Search = createSearch(React);
  // const LoginMenu = createLoginMenu(React);

  return (
    <header>
      <Logo />
      <Quote />
      {/* <LoginMenu /> */}
      {/* <Search /> */}
    </header>
  );
}
