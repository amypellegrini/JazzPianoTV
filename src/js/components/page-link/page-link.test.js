import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

import createPageLink from './page-link'

const render = reactDom.renderToStaticMarkup;

test('Page link', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render a page link.';

    const PageLink = createPageLink(React);

    const $ = dom.load(
      render(
        <MemoryRouter>
          <PageLink />
        </MemoryRouter>
      )
    );

    const element = $('.jptv-page-link');
    const output = element.lenght;
    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});