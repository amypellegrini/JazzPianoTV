import createLogo from '../logo/logo';
import createQuote from '../quote/quote';

export default React => () => {
  const Logo = createLogo(React);
  const Quote = createQuote(React);

  return (
    <header>
      <Logo />
      <Quote />
    </header>
  );
}