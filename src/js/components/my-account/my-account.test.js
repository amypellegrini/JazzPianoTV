import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';

import jptvApp from '../../reducers/jptv-app';
import createMyAccount from './my-account';

const render = reactDom.renderToStaticMarkup;

test('My account component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render my account component';

    let store = createStore(jptvApp);

    const MyAccount = createMyAccount(React);
    const $ = dom.load(
      render(
        <Provider store={ store }>
          <MemoryRouter>
            <MyAccount />
          </MemoryRouter>
        </Provider>
      )
    );
    const output = $('.jptv-my-account').length;
    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});