import test from 'tape'
import React from 'react'
import reactDom from 'react-dom/server';
import dom from 'cheerio'
import { MemoryRouter } from 'react-router'

import createLandingPage from './landing-page'

const render = reactDom.renderToStaticMarkup;

test('Landing page component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It sohuld render the landing page.';

    const LandingPage = createLandingPage(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      ));
    const output = $('.jptv-landing-page').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Musescore link', assert => {
    const message = 'It should contain a link to Musescore profile.';

    const LandingPage = createLandingPage(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      ));
    const output = $('.jptv-landing-page').find('a.jptv-musescore-link').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Route to 12 Rules of Piano Mastery', assert => {
    const message = 'It should contain a route link to 12 Rules page.';

    let actual = false;

    const LandingPage = createLandingPage(React);
    const $ = dom.load(render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    ));
    const output = $('.jptv-landing-page')
      .find('.jptv-12-rules-link a').attr('href');

    actual = output;
    const expected = '/jptv-12-rules';

    assert.equal(actual, expected, message);
    assert.end();
  });
});