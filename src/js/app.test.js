import test from 'tape';
import dom from 'cheerio';
import React from 'react';
import reactDom from 'react-dom/server';

import createApp from './app';

const render = reactDom.renderToStaticMarkup;

test('App init', assert => {
  const message = 'It sohuld initialize the app.';

  const App = createApp(React);
  const $ = dom.load(render(<App />));
  const output = $('#jptv').length;

  const actual = output > 0;
  const expected = true;

  assert.equal(actual, expected, message);
  assert.end();
});