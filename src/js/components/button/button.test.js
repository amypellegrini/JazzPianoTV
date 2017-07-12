import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createButton from './button';

const render = reactDom.renderToStaticMarkup;

test('Button component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render a button component';

    const Button = createButton(React);
    const $ = dom.load(render(<Button label="submit" />));
    const output = $('.jptv-button').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});