export default function orderNotes(notesArray) {
  const notes = ['A', 'Bb', 'A#', 'Cb', 'B', 'B#', 'C', 'Db', 'C#', 'D',
                  'Eb', 'D#', 'E', 'Fb', 'F', 'Gb', 'F#', 'G', 'Ab', 'G#'];
  const final = [];

  notes.forEach((note) => {
    notesArray.forEach((currentNote) => {
      if (note === currentNote) {
        final.push(currentNote);
      }
    });
  });

  return final;
}
