import './exercises.css';

export default React => () => {
  return (
    <div className="exercises">
    <div className="exercise-list group">
      <section id="ii-v-i">
        <h2>II - V - I</h2>
        <div className="exercise-item">
          <h3>II - V - I</h3>
          <p>AB Forms</p>
        </div>
        <div className="exercise-item">
          <h3>II - V - I</h3>
          <p>Drop-2 Voicings</p>
        </div>
        <div className="exercise-item">
          <h3>II - V - I</h3>
          <p>AB Forms + Greek Modes (Groups of 7)</p>
        </div>
        <div className="exercise-item">
          <h3>II - V - I</h3>
          <p>AB Forms + Greek Modes (Groups of 9)</p>
        </div>
      </section>
    </div>
    <div className="exercise-list group">
      <section id="groups-of-7">
        <h2>Note Groups</h2>
        <div className="exercise-item">
          <h3>Groups of 7</h3>
          <p>Greek Modes over II - V - I</p>
        </div>
        <div className="exercise-item">
          <h3>Groups of 9</h3>
          <p>Greek Modes over II - V - I</p>
        </div>
      </section>
    </div>
    <div className="exercise-list group">
      <section id="walking-bass">
        <h2>Walking Bass</h2>
        <div className="exercise-item">
          <h3>Walking Bass</h3>
          <p>Chord Root over II - V - I</p>
        </div>
      </section>
    </div>
  </div>
  );
}