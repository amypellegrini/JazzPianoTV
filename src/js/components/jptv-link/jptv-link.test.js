import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import { MemoryRouter } from 'react-router';
import reactDom from 'react-dom/server';

import createLink from './jptv-link';

const render = reactDom.renderToStaticMarkup;

test('Custom link component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render a link.';

    const Link = createLink(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <Link />
        </MemoryRouter>
      ));
    const output = $('a');

    const actual = output.length > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. link wrapper', assert => {
    const message = 'It should wrap link with a container span.';

    const Link = createLink(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <Link />
        </MemoryRouter>
      ));
    const output = $('span');

    const actual = output.find('a').length > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. link wrapper class', assert => {
    const message = 'Link wrapper should a custom class attribute';

    const Link = createLink(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <Link className="custom-class" />
        </MemoryRouter>
      ));
    const output = $('span');

    const actual = output.hasClass('custom-class');
    //const actual = output.attr('class');
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
