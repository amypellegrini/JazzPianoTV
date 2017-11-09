import './footer.css';

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
            <Link to="/page:">Report a problem</Link>
          </li>
          <li>
            <Link to="/page:">Contact</Link>
          </li>
          <li>
            <Link to="/page:">Follow us on Twitter</Link>
          </li>
          <li>
            <Link to="/page:">Like us on Facebook</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}