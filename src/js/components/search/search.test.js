import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server'

import createSearch from './search';

const render = reactDom.renderToStaticMarkup;

test('Search component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render the search component.';

    const Search = createSearch(React);
    const $ = dom.load(render(<Search />));
    const output = $('.jptv-search').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('text input rendering', assert => {
    const message = 'It should render a text input.';

    const Search = createSearch(React);
    const $ = dom.load(render(<Search />));
    const output = $('.jptv-search').find('input[type="text"]').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('search box magnifying glass icon', assert => {
    const message = 'Search box should render a magnifying glass icon';

    const Search = createSearch(React);
    const $ = dom.load(render(<Search />));
    const output = $('.jptv-search').find('.search-icon').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});

