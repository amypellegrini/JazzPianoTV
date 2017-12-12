import test from 'tape';
import createRegister from './signup';
import dom from 'cheerio';
import React from 'React';
import reactDom from 'react-dom/server';

import { MemoryRouter } from 'react-router-dom';

const render = reactDom.renderToStaticMarkup;

test('Signup component', nest => {
  nest.test('rendering', assert => {
    const message = 'It sohuld render the user signup component.';

    const Register = createRegister(React);
    const $ = dom.load(
      render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      )
    );
    const output = $('#signup').length;
  
    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});