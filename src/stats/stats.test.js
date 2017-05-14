import test from 'tape';
import stats from './stats';

test('stats component', (assert) => {
  const message = 'it should display a login prompt message'
                  + 'if user is not logged';

  const actual = stats();
  const expected = null;

  assert.equal(actual, expected, message);
});
