import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createLogo from './logo';

const render = reactDom.renderToStaticMarkup;

test('Main logo component', assert => {
  const message = "It should render the main logo.";

  const Logo = createLogo(React);
  const $ = dom.load(render(<Logo />));
  const output = $('h1').text();

  const actual = output;
  const expected = 'JazzPianoTV';

  assert.equal(actual, expected, message);
  assert.end();
});
