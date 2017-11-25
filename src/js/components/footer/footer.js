import './footer.css';

import { Link } from 'react-router-dom';

export default React => () => {
  return (
    <footer className="jptv-footer">
      <div className="links">
        <ul>
          <li>
            <Link to="/page:">Terms of Service</Link>
          </li>
          <li>
            <Link to="/page:">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/page:">Cookies</Link>
          </li>
          <li>
            <Link to="/page:">Contact</Link>
          </li>
          <li>
            <a href="https://twitter.com/amyvpellegrini" className="twitter-link">Amy Pellegrini on Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/jazzpianotv/" className="facebook-link">JazzPianoTV Facebook page</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}