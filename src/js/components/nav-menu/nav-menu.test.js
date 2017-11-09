import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

import createNavMenu from './nav-menu';

const render = reactDom.renderToStaticMarkup;

test('Navigation Menu component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render the navigation menu.';

    const NavMenu = createNavMenu(React);
    const $ = dom.load(
      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>
      )
    );

    const output = $('.jptv-nav-menu').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
