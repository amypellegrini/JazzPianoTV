import test from 'tape';
import createRegister from './register';
import dom from 'cheerio';
import React from 'React';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

test('Register component', nest => {
  nest.test('rendering', assert => {
    const message = 'It sohuld render the user registration component.';

    const Register = createRegister(React);
    const $ = dom.load(render(<Register />));
    const output = $('#register').length;
  
    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});