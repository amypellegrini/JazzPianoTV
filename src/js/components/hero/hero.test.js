import test from 'tape';
import React from 'react';
import reactDom from 'react-dom/server';
import dom from 'cheerio';

import createHero from './hero';

const render = reactDom.renderToStaticMarkup;

test('Hero component', nest => {
  nest.test('rendering', assert => {
    const message = 'It should render the hero component.';

    const Hero = createHero(React);
    const $ = dom.load(render(<Hero />));
    const output = $('.jptv-hero').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
