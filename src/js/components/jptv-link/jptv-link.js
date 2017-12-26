import {
    Route,
    Link
  } from 'react-router-dom';

export default React => ({ label, to, activeOnlyWhenExact, className }) => {
  return (
    <Route>
      <span className={ className }>
        <Link to={to}></Link>
      </span>
    </Route>
  );
}
