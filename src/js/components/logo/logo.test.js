import test from 'tape';
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import dom from 'cheerio';
import logo from './logo';

const renderText = ReactDOMServer.renderToStaticMarkup;

test('Main logo component', assert => {
  const message = "It should render the main logo.";
  const Logo = logo(React);
  const el = <Logo />;
  const $ = dom.load(renderText(el));
  const output = $('h1').toString();

  let actual = output;
  let expected = "<h1>JazzPiano<span class=\"domain-suffix\">TV</span></h1>";

  assert.equal(actual, expected, message);
  assert.end();
});