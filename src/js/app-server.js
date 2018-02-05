import {
  StaticRouter as Router,
  Route
} from 'react-router-dom';

import createHeader from './components/header/header';
import createLandingPage from './components/landing-page/landing-page';
import createPage from './components/page/page';
import createFooter from './components/footer/footer';

export default React => (props) => {
  const location = props.location;
  const Header = createHeader(React);
  const LandingPage = createLandingPage(React);
  const Page = createPage(React);
  const Footer = createFooter(React);

  var context = {};

  return (
    <Router context={context} location={location}>
      <section id="jptv">
        <Header />
        <Route exact path="/" component={LandingPage}/>
        <Route path="/:pageId" component={Page}/>
        <Footer />
      </section>
    </Router>
  );
};
