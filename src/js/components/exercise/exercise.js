export default React => ({ exerciseName, musicKey, bpm }) => {
  return (
    <div className="jptv-exercise">
      <h2>{ exerciseName }</h2>
      <p>Key: { musicKey }</p>
      <p>Tempo: { bpm }bpm</p>
    </div>
  );
}