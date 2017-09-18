import { Link } from 'react-router-dom';

import './nav-menu.css';

export default React => () => {
  return (
    <nav>
      <ul className="jptv-nav-menu">
        <li>
          <Link to="/lessons">Lessons</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}