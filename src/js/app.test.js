import test from 'tape';
import dom from 'cheerio';
import React from 'react';
import reactDom from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

import createApp from './app';

const render = reactDom.renderToStaticMarkup;

test('Index', assert => {
  const message = 'It sohuld initialize the app.';

  const App = createApp(React);
  const $ = dom.load(
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  );
  const output = $('#jptv').length;

  const actual = output > 0;
  const expected = true;

  assert.equal(actual, expected, message);
  assert.end();
});