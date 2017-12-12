import test from 'tape'
import React from 'react'
import reactDom from 'react-dom/server';
import dom from 'cheerio'

import createLandingPage from './landing-page'

const render = reactDom.renderToStaticMarkup;

test('Landing page component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It sohuld render the landing page.';

    const LandingPage = createLandingPage(React);
    const $ = dom.load(render(<LandingPage />));
    const output = $('.jptv-landing-page').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Musescore link', assert => {
    const message = 'It should contain a link to Musescore profile.';

    const LandingPage = createLandingPage(React);
    const $ = dom.load(render(<LandingPage />));
    const output = $('.jptv-landing-page').find('a.jptv-musescore-link').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});