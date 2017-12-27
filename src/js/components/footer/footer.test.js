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
    const $ = dom.load(render(<Footer />));
    const output = $('footer').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Twitter link', assert => {
    const message = 'It should contain a Twitter page link.';

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));
    const output = $('footer').find('.twitter-link').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Musescore link', assert => {
    const message = 'It should contain a Musescore profile link.';

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));
    const output = $('footer').find('.musescore-link').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Soundcloud link', assert => {
    const message = 'It should contain a Soundcloud profile link.';

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));
    const output = $('footer').find('.soundcloud-link').attr('href');

    const actual = output;
    const expected = 'https://soundcloud.com/amyvpellegrini';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Bandcamp link', assert => {
    const message = 'It should contain a Bandcamp profile link.';

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));
    const output = $('footer').find('.bandcamp-link').attr('href');

    const actual = output;
    const expected = 'https://amypellegrini.bandcamp.com/';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Bandcamp link label/text', assert => {
    const message = 'Link text shuould correspond to link target/href.';

    let actual = false;

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));
    const output = $('footer').find('.bandcamp-link').text();

    actual = output;
    const expected = 'Amy Pellegrini tracks on Bandcamp';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Soundcloud link label/text', assert => {
    const message = 'Link text shuould correspond to link target/href.';

    let actual = false;

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));
    const output = $('footer').find('.soundcloud-link').text();

    actual = output;
    const expected = 'Amy Pellegrini tracks on Soundcloud';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. Target blank', assert => {
    const message = 'All links should be open in a new tab (target=_blank).';

    let actual = false;

    const Footer = createFooter(React);
    const $ = dom.load(render(<Footer />));

    const output = $('footer').find('a').toArray().every((element) => {
      return element.attribs.target === '_blank';
    });

    actual = output;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
