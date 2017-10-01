import test from 'tape';
import dom from 'cheerio';
import React from 'react';
import reactDom from 'react-dom/server';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

import jptvApp from './reducers/jptv-app';
import createApp from './app';

const render = reactDom.renderToStaticMarkup;

// @todo: fix router integration first
test('App init', assert => {
  const message = 'It sohuld initialize the app.';

  // let store = createStore(jptvApp);
  // let history = createMemoryHistory();

  // const App = createApp(React);
  // const $ = dom.load(
  //   render(
  //     <Provider store={ store }>
  //       <MemoryRouter history={ history }>
  //         <App />
  //       </MemoryRouter>
  //     </Provider>
  //   )
  // );
  // const output = $('#jptv').length;

  // const actual = output > 0;
  // const expected = true;

  // assert.equal(actual, expected, message);
  assert.end();
});