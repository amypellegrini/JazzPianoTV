import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createFooter from './footer';

const render = reactDom.renderToStaticMarkup;

test('Footer component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render the footer component.';

    const Footer = createFooter(React);
    const $ = dom.load(render(
      <Footer />
    ));
    const output = $('footer').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Twitter link', assert => {
    const message = 'It should contain a Twitter page link.';

    const Footer = createFooter(React);
    const $ = dom.load(render(
      <Footer />
    ));
    const output = $('footer').find('.twitter-link').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Musescore link', assert => {
    const message = 'It should contain a Musescore profile link.';

    const Footer = createFooter(React);
    const $ = dom.load(render(
      <Footer />
    ));
    const output = $('footer').find('.musescore-link').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
