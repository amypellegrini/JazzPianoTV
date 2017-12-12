import { Link } from 'react-router-dom';

import './nav-menu.css';

export default React => () => {
  return (
    <nav>
      <ul className="jptv-nav-menu">
        <li>
          <Link to="/shows">Shows</Link>
        </li>
        <li>
          <Link to="/exercises">Exercises</Link>
        </li>
        <li>
          <Link to="/sheet-music">Sheet music</Link>
        </li>
        <li>
          <Link to="/lessons">Lessons/Articles</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}