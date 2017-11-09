import './landing-page.css';
import createHero from '../hero/hero';
import createJumbotron from '../jumbotron/jumbotron';

export default React => () => {
  const Hero = createHero(React);
  const Jumbotron = createJumbotron(React);

  return (
    <div className="jptv-landing-page">
      <Hero />
      <Jumbotron />
    </div>
  );
}