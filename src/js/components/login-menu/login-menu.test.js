import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import createLogin from './login-menu';

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

  nest.test('logout button rendering', assert => {
    const message = 'It should render a logoout button if user is logged.';

    const Login = createLogin(React);
    const isUserLogged = true;
    const $ = dom.load(render(<Login isUserLogged={ isUserLogged } />));
    const output = $('.jptv-login').find('.logout').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
