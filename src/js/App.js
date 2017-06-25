import createHeader from './components/header/header';

export default React => () => {
  const Header = createHeader(React);

  return (
    <Header />
  );
};