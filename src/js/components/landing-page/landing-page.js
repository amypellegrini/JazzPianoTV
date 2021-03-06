import './landing-page.css';
import createLink from '../jptv-link/jptv-link';

export default React => () => {
  const Link = createLink(React);

  return (
    <div className="jptv-landing-page font-large-size">
      <section>
        <header className="jumbotron">
          <h2>The Hanon Pilgrimage to Mastery</h2>
          <p>Coming soon</p>
        </header>

        <p>Being talented is not enough. Understanding technique is not enough.</p>

        <p>Being disciplined, if not balanced with acute awareness, inner clarity, emotional stability, and deep understanding of technique, is not going to cut it.</p>

        <p><strong>The Hanon Pilgrimage to Mastery</strong> is designed to help you develop the traits you need to achieve Piano mastery and virtuosity.</p>

        <h3>How does it work?</h3>

        <p><strong>The Hanon Pilgrimage to Mastery</strong> is intended to be used in conjunction with the <Link to="/jptv-12-rules" className="jptv-12-rules-link" label="JazzPianoTV 12 Rules for Piano Mastery"/>, as a framework for personal and technical development of Piano Mastery.</p>

        <p>We could think about <strong>The Hanon Pilgrimage to Mastery</strong> as the road to travel, and the <strong>JazzPianoTV 12 Rules for Piano Mastery</strong> as the guideline to make sure you are well prepared for the trip, which could be very disheartening if you are not.</p>

        <p>Are you ready?</p>

        <hr />

        <p className="font-default-size">Looking for sheet music? Feel free to visit Amy Pellegrini <a className="jptv-musescore-link" href="https://musescore.com/user/3607356" target="_blank">Musescore Profile</a>.</p>
      </section>
    </div>
  );
}