export default React => () => {
  return (
    <section id="jptv">
      <Header />
      <Route exact path="/" component={LandingPage}/>
      <Route path="/:pageId" component={Page}/>
      <Footer />
    </section>
  );
}
