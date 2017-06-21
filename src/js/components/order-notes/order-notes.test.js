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

test('order notes with repeated values', (assert) => {
  const message = 'it should be able to handle repeated values';

  const expected = ['A', 'B', 'B', 'C', 'C', 'C', 'F'];
  const actual = orderNotes(['B', 'C', 'F', 'B', 'C', 'A', 'C']);

  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('order notes with altered values', (assert) => {
  const message = 'it should be able to handle altered values';

  const expected = ['A', 'Bb', 'B', 'B', 'C', 'C#', 'F', 'F#'];
  const actual = orderNotes(['B', 'A', 'B', 'Bb', 'C#', 'C', 'F#', 'F']);

  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('order notes with string parameter', (assert) => {
  const message = 'it should be able to handle a notes list as string';

  const expected = ['A', 'Bb', 'B', 'B', 'C', 'C#', 'F', 'F#'];
  const actual = orderNotes('BABBbC#CF#F');

  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('order notes with ascending or descending parameter', (assert) => {
  const message = 'it should be able to accept a second parameter'
      + 'to set direction as ascending or descending';

  const initialList = ['B', 'A', 'B', 'Bb', 'C#', 'C', 'F#', 'F'];

  const expected = ['F#', 'F', 'C#', 'C', 'B', 'B', 'Bb', 'A'];
  const actual = orderNotes(initialList, 'descending');

  assert.deepEqual(actual, expected, message);
  assert.end();
});