import createHeader from './components/header/header';
import createLandingPage from './components/landing-page/landing-page';
import createFooter from './components/footer/footer';

export default React => () => {
  const Header = createHeader(React);
  const LandingPage = createLandingPage(React);
  const Footer = createFooter(React);

  return (
    <section id="jptv">
      <Header />
      <LandingPage />
      <Footer />
    </section>
  );
};