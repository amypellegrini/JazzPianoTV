import './landing-page.css';
import createLink from '../jptv-link/jptv-link';

export default React => () => {
  const Link = createLink(React);

  return (
    <div className="jptv-landing-page font-large-size">
      <section>
        <p>Being talented is not enough. Understanding technique is not enough.</p>

        <p>Being disciplined, if not balanced with acute awareness, inner clarity, emotional stability, and deep understanding of technique, is not going to cut it.</p>

        <p><strong>JazzPianoTV</strong> is designed to help you develop the traits you need to achieve Piano mastery and virtuosity.</p>
      </section>
      <section>
        <h3>How does it work?</h3>

        <p><strong>JazzPianoTV</strong> contents are intended to be practiced in conjunction with the <Link to="/jptv-12-rules" className="jptv-12-rules-link" label="JazzPianoTV 12 Rules for Piano Mastery"/>, as a framework for personal and technical development of Piano Mastery.</p>

        <p>We could think about <strong>The Hanon Pilgrimage to Mastery</strong>, <strong>The Book of Triads</strong>, or <strong>A Crush Course on JazzPiano</strong> courses as the road to travel, and the <strong>JazzPianoTV 12 Rules for Piano Mastery</strong> as the guideline to make sure you are well prepared for the trip.</p>

        <p>Are you ready?</p>
      </section>
      <section>
        <header className="jumbotron">
          <h2>Courses</h2>
          <p>Coming soon</p>
        </header>
        <ul>
          <li>The Hanon Pilgrimage to Mastery</li>
          <li>The Book of Triads</li>
          <li>A Crash Course on JazzPiano</li>
          <li>The Art of Blues Improvisation</li>
          <li>A Workout Guide to Chopin Etudes</li>
        </ul>
      </section>
      <section>
        <hr />

        <p className="font-default-size">Looking for sheet music? Feel free to visit Amy Pellegrini <a className="jptv-musescore-link" href="https://musescore.com/user/3607356" target="_blank">Musescore Profile</a>.</p>
      </section>
    </div>
  );
}