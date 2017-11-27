import createLogo from '../logo/logo';
import createQuote from '../quote/quote';
import createSearch from '../search/search';
import createLoginMenu from '../login-menu/login-menu.container';

/**
 * @todo: Fix arrow function default params (Babel!!)
 */
export default React => (showSearch = false, showLoginMenu = false) => {
  const Logo = createLogo(React);
  const Quote = createQuote(React);

  // search and login should remain hidden until ready.
  if (showSearch && showLoginMenu) {
    console.log('showSearch', showSearch);
    const Search = createSearch(React);
    const LoginMenu = createLoginMenu(React);
    
    return (
      <header>
        <Logo />
        <Quote />
        <LoginMenu />
        <Search />
      </header>
    );
  } else {
    return (
      <header>
        <Logo />
        <Quote />
      </header>
    );
  }
}
