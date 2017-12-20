import './landing-page.css';

export default React => () => {
  return (
    <div className="jptv-landing-page">
      <section>
        <header className="jumbotron">
          <h2>The Hanon Pilgrimage to Mastery</h2>
          <p>Coming soon</p>
        </header>
        <p>Being talented is not enough. Understanding technique is not enough.</p>
        <p>Being disciplined, if not balanced with acute awareness, inner clarity, emotional stability, and deep understanding of technique, is not going to cut it.</p>
        <p><strong>The Hanon Pilgrimage to Mastery</strong> is designed to help you develop the traits you need to achieve Piano mastery and virtuosity.</p>
        <hr />
        <p>Looking for sheet music? Feel free to check out Amy Pellegrini <a className="jptv-musescore-link" href="https://musescore.com/user/3607356" target="_blank">Musescore Profile</a>.
        </p>
      </section>
    </div>
  );
}