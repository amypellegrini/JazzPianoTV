import './header.css';

import createLogo from '../logo/logo';
import createQuote from '../quote/quote';

/**
 * @todo: Fix arrow function default params (Babel!!)
 */
export default React => () => {
  const Logo = createLogo(React);
  const Quote = createQuote(React);

  return (
    <header className="jptv-header">
      <Logo />
      <Quote />
    </header>
  );
}
