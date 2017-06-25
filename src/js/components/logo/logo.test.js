import test from 'tape';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import createLogo from './logo';

const renderText = ReactDOMServer.renderToStaticMarkup;

test('Main logo component', assert => {
  const message = "It should render the main logo.";

  const Logo = createLogo(React);
  const el = <Logo />;

  const actual = renderText(el);
  const expected = "<h1>JazzPiano<span class=\"domain-suffix\">TV</span></h1>";

  assert.equal(actual, expected, message);
  assert.end();
});