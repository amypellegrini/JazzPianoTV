import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createQuote from './quote';

const render = reactDom.renderToStaticMarkup;

test('Quote component', assert => {
  const message = "it should render a quote";

  const Logo = createQuote(React);
  const $ = dom.load(render(<Logo />));
  const output = $('p').text();

  const actual = output;
  const expected = 'Learn to Play the Piano for Real';

  assert.equal(actual, expected, message);
  assert.end();
});
