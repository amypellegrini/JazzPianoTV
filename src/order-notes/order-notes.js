/**
 * 
 * @param {*} notesArray Array or string representing a list of notes. 
 * @param {Boolean} ascending 
 */
export default function orderNotes(notesArray, direction) {
  const notes = ['A', 'Bb', 'A#', 'Cb', 'B', 'B#', 'C', 'Db', 'C#', 'D',
                  'Eb', 'D#', 'E', 'Fb', 'F', 'Gb', 'F#', 'G', 'Ab', 'G#'];
  const final = [];

  if (typeof notesArray === 'string') {
    notesArray = notesArray.split('')
      .reduce((accumulator, currentValue, currentIndex) => {
        if (currentValue === 'b' || currentValue === '#') {
          let alteredValue = accumulator[currentIndex - 1] + currentValue;
          accumulator[currentIndex - 1] = alteredValue;
          return accumulator;
        }

        return accumulator;
      }, notesArray.split(''));
  }

  if (!direction || direction === 'ascending') {
    notes.forEach((note) => {
      notesArray.forEach((currentNote) => {
        if (note === currentNote) {
          final.push(currentNote);
        }
      });
    });
  }

  return final;
}
