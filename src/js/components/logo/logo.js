export default React => ({ type }) => {
  let logo;

  if (type && type === 'lite') {
    logo = <h1 className="logo-lite">
            <a href="/">
              JP<span className="domain-suffix">TV</span>
            </a>
          </h1>;
  } else {
    logo = <h1>
            <a href="/">
              JazzPiano
              <span className="domain-suffix">TV</span>
            </a>
          </h1>;
  }

  return logo;
};
