import createHeader from './components/header/header';
import createLandingPage from './components/landing-page/landing-page';
import createFooter from './components/footer/footer';

import {
  BrowserRouter as Router,
  Route,
  browserHistory } from 'react-router-dom';

export default React => () => {
  const Header = createHeader(React);
  const LandingPage = createLandingPage(React);
  const Footer = createFooter(React);

  return (
    <Router history={ browserHistory }>
      <section id="jptv">
        <Header />
        <LandingPage />
        <Footer />
      </section>
    </Router>
  );
};