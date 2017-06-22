import createLogo from './components/logo/logo';

export default React => () => {
  const Logo = createLogo(React);

  return (
    <header>
      <Logo />
    </header>
  );
};