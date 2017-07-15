import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createMyAccount from './my-account';

const render = reactDom.renderToStaticMarkup;

test('My account component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render my account component';

    const MyAccount = createMyAccount(React);
    const $ = dom.load(render(<MyAccount />));
    const output = $('.jptv-my-account').length;
    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});