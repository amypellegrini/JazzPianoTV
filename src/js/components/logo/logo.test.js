import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

import createLogo from './logo';

const render = reactDom.renderToStaticMarkup;

test('Main logo component', nest => {
  nest.test('rendering', assert => {
    const message = "It should render the main logo.";

    const Logo = createLogo(React);
    const $ = dom.load(render(<Logo />));
    const output = $('h1').text();

    const actual = output;
    const expected = 'JazzPianoTV';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('lite version', assert => {
    const message = 'It should provide an option to render a lite version';

    const Logo = createLogo(React);
    const $ = dom.load(render(<Logo type="lite" />));
    const output = $('h1').text();

    const actual = output;
    const expected = 'JPTV';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('default version link', assert => {
    const message = 'It should contain a link';

    const Logo = createLogo(React);
    const $ = dom.load(render(<Logo />));
    const output = $('h1').find('a').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('default version link href', assert => {
    const message = 'link href should link to base path';

    const Logo = createLogo(React);
    const $ = dom.load(render(<Logo />));
    const output = $('h1').find('a').attr('href');

    const actual = output;
    const expected = '/';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('lite version link', assert => {
    const message = 'It should also contain a link';

    const Logo = createLogo(React);
    const $ = dom.load(render(<Logo type="lite" />));
    const output = $('h1').find('a').length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('lite version link href', assert => {
    const message = 'lite logo link href should also link to base path';

    const Logo = createLogo(React);
    const $ = dom.load(render(<Logo type="lite" />));
    const output = $('h1').find('a').attr('href');

    const actual = output;
    const expected = '/';

    assert.equal(actual, expected, message);
    assert.end();
  });
});
