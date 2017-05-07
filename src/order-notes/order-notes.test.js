import test from 'tape';
import orderNotes from './order-notes';

test('Order notes function', (assert) => {
  const message = 'Given an array of notes, it should return an array'
    + 'with the same notes in ascending order';

  const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const actual = orderNotes(['B', 'A', 'D', 'E', 'C', 'G', 'F']);

  assert.deepEqual(actual, expected, message);
  assert.end();
});
