import './landing-page.css';

export default React => () => {
  return (
    <div className="jptv-landing-page">
      <section>
        <header className="jumbotron">
          <h2>Coming soon</h2>
          <p>The Hanon Pilgrimage to Mastery</p>
        </header>
        <p>Looking for sheet music? Feel free to check out Amy Pellegrini <a className="jptv-musescore-link" href="https://musescore.com/user/3607356" target="_blank">Musescore Profile</a>.
        </p>
      </section>
    </div>
  );
}