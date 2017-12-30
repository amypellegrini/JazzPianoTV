import './footer.css';

import { Link } from 'react-router-dom';

export default React => () => {
  return (
    <footer className="jptv-footer">
      <div className="group">
        <ul>
          <li>
            <h4>Contact / follow</h4>
          </li>
          <li>
            <a href="https://musescore.com/user/3607356" className="musescore-link" target="_blank">Amy Pellegrini Musescore Profile</a>
          </li>
          <li>
            <a href="https://twitter.com/amyvpellegrini" className="twitter-link" target="_blank">Amy Pellegrini on Twitter</a>
          </li>
        </ul>
        <ul>
          <li>
            <h4>Listen music tracks</h4>
          </li>
          <li>
            <a href="https://amypellegrini.bandcamp.com/" className="bandcamp-link" target="_blank">Amy Pellegrini on Bandcamp</a>
          </li>
          <li>
            <a href="https://soundcloud.com/amyvpellegrini" className="soundcloud-link" target="_blank">Amy Pellegrini on Soundcloud</a>
          </li>
        </ul>
      </div>
      <p className="group">&copy; 2017 Amy Pellegrini</p>
    </footer>
  );
}