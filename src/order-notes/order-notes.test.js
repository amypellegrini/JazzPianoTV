import test from 'tape';
import orderNotes from './order-notes';

test('order notes function', (assert) => {
  const message = 'given an array of notes, it should return an array'
    + 'with the same notes in ascending order';

  const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const actual = orderNotes(['B', 'A', 'D', 'E', 'C', 'G', 'F']);

  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('order notes repeated values', (assert) => {
  const message = 'it should be able to handle repeated values';

  const expected = ['A', 'B', 'B', 'C', 'C', 'C', 'F'];
  const actual = orderNotes(['B', 'C', 'F', 'B', 'C', 'A', 'C']);

  assert.deepEqual(actual, expected, message);
  assert.end();
});
