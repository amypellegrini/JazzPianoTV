import test from 'tape';
import dom from 'cheerio';
import React from 'react';
import reactDom from 'react-dom/server';
import jptvApp from './reducers/jptv-app';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

import createApp from './app';

const render = reactDom.renderToStaticMarkup;

test('App init', assert => {
  const message = 'It sohuld initialize the app.';

  let store = createStore(jptvApp);

  const App = createApp(React);
  const $ = dom.load(
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
  );
  const output = $('#jptv').length;

  const actual = output > 0;
  const expected = true;

  assert.equal(actual, expected, message);
  assert.end();
});