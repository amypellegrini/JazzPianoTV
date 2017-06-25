import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createHeader from './header';

const render = reactDom.renderToStaticMarkup;

test('Header component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render the header section';

    const Header = createHeader(React);
    const $ = dom.load(render(<Header />));
    const output = $('header').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
