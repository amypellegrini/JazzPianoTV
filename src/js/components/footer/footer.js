import './footer.css';

import { Link } from 'react-router-dom';

export default React => () => {
  return (
    <footer className="jptv-footer">
      <ul>
        <li>
          <h4>Contact</h4>
        </li>
        <li>
          <a href="https://musescore.com/user/3607356" className="musescore-link" target="_blank">Amy Pellegrini Musescore Profile</a>
        </li>
        <li>
          <a href="https://twitter.com/amyvpellegrini" className="twitter-link" target="_blank">Amy Pellegrini on Twitter</a>
        </li>
      </ul>
      <p>&copy; 2017 Amy Pellegrini</p>
    </footer>
  );
}