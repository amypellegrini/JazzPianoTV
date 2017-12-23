import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createPage from './page';

const render = reactDom.renderToStaticMarkup;

test('Page renderer component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render a Page.';

    const Page = createPage(React);
    const $ = dom.load(render(<Page />));
    const output = $('.page').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. loading', assert => {
    const message = 'It should load a given page';
    assert.end();
  });
});