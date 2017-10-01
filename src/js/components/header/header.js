import createLogo from '../logo/logo';
import createQuote from '../quote/quote';
import createSearch from '../search/search';

export default React => () => {
  const Logo = createLogo(React);
  const Quote = createQuote(React);
  const Search = createSearch(React);

  return (
    <header>
      <Logo />
      <Quote />
      <Search />
    </header>
  );
}