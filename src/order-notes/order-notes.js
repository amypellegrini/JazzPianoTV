export default function orderNotes(notesArray, ascending) {
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const final = [];

  notes.forEach((note) => {
    notesArray.forEach((currentNote) => {
      if (currentNote === note) {
        final.push(currentNote);
      }
    });
  });

  return final;
}
