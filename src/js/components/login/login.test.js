import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import createLogin from './login';

const render = reactDom.renderToStaticMarkup;

test('Login component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render the login component.';

    const Login = createLogin(React);
    const $ = dom.load(render(<Login />));
    const output = $('.jptv-login').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('register button rendering', assert => {
    const message = 'It should render a register button.';

    const Login = createLogin(React);
    const $ = dom.load(render(<Login />));
    const output = $('.jptv-login').find('.register').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('login button rendering', assert => {
    const message = 'It should render a register button.';

    const Login = createLogin(React);
    const $ = dom.load(render(<Login />));
    const output = $('.jptv-login').find('.login').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
