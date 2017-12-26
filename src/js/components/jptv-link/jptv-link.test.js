import test from 'tape';
import React from 'react';
import dom from 'cheerio';
import reactDom from 'react-dom/server';
import { MemoryRouter } from 'react-router';

import createLink from './jptv-link';

const render = reactDom.renderToStaticMarkup;

test('Custom link component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render a link.';

    const Link = createLink(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <Link to="/target-path" />
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
          <Link to="/target-path" />
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
          <Link  to="/target-path" className="custom-class" />
        </MemoryRouter>
      ));
    const output = $('span');

    const actual = output.hasClass('custom-class');
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. link href', assert => {
    const message = 'Link should properly set href target.';

    const Link = createLink(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <Link to="/target-path" />
        </MemoryRouter>
      ));
    const output = $('a');

    const actual = output.attr('href');
    const expected = '/target-path';

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. link label', assert => {
    const message = 'Link should render a given label.';

    const Link = createLink(React);
    const $ = dom.load(render(
        <MemoryRouter>
          <Link to="/example-link" label="Example link"/>
        </MemoryRouter>
      ));
    const output = $('a');

    const actual = output.text();
    const expected = 'Example link';

    assert.equal(actual, expected, message);
    assert.end();
  });
});
