import test from 'tape'
import { login, signupRequest } from './index';

test('Actions', nest => {
  nest.test('login action', assert => {
    const message = 'It should return a function.';

    const actual = typeof login;
    const expected = 'function';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('signup request action', assert => {
    const message = 'It should return a function.';

    const actual = typeof signupRequest;
    const expected = 'function';

    assert.equal(actual, expected, message);
    assert.end();
  });
});