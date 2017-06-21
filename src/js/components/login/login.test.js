import test from 'tape';
import auth from './login';

test('login public API', (assert) => {
  const message = 'it should expose a basic API for login and logout';

  auth.login();

  const expected = true;
  const actual = auth.logged();

  assert.equal(expected, actual, message);
});
