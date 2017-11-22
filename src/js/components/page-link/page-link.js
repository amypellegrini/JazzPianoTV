export default React => ({ match, path }) => {
  return (
    <Link to={`${match.url}/${path.url}`}>
      { path.label }
    </Link>
  );
}
