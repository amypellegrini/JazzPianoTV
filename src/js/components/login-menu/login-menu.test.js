import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import createLoginMenu from './login-menu';
import { MemoryRouter } from 'react-router-dom';

const render = reactDom.renderToStaticMarkup;

test('Login component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render the login component.';

    const LoginMenu = createLoginMenu(React);
    const $ = dom.load(
      render(
        <MemoryRouter>
          <LoginMenu />
        </MemoryRouter>
      )
    );
    const output = $('.jptv-login-menu').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('register button rendering', assert => {
    const message = 'It should render a register button.';

    const LoginMenu = createLoginMenu(React);
    const $ = dom.load(
      render(
        <MemoryRouter>
          <LoginMenu />
        </MemoryRouter>
      )
    );
    const output = $('.jptv-login-menu').find('.register').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('login button rendering', assert => {
    const message = 'It should render a register button.';

    const LoginMenu = createLoginMenu(React);
    const $ = dom.load(
      render(
        <MemoryRouter>
          <LoginMenu />
        </MemoryRouter>
      )
    );
    const output = $('.jptv-login-menu').find('.login').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('logout button rendering', assert => {
    const message = 'It should render a logoout button if user is logged.';

    const LoginMenu = createLoginMenu(React);
    const isUserLogged = true;
    const $ = dom.load(
      render(
        <MemoryRouter>
          <LoginMenu isUserLogged={ isUserLogged } />
        </MemoryRouter>
      )
    );
    const output = $('.jptv-login-menu').find('.logout').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});