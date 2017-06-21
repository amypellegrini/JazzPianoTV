import test from 'tape';

test('Main logo component', assert => {
  let message = "It should render the main logo.";

  let actual = null;
  let expected = "<h1>JazzPianoTV</h1>"

  assert.equal(actual, expected, message);
  assert.end();
});