import test from 'tape';
import React from 'react';
import reactDom from 'react-dom/server';
import dom from 'cheerio';
import createPage from './page';

const render = reactDom.renderToStaticMarkup;

test('Page component', nest => {
  nest.test('. rendering', assert => {
    const message = 'It should render a given page.';

    const matchProp = {
      params: {
        pageId: 'jptv-12-rules'
      }
    };

    const Page = createPage(React);

    const $ = dom.load(render(<Page match={ matchProp } />));
    const output = $('.jptv-page-container');

    const actual = output.length > 0;
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. loading state', assert => {
    const message = 'Initial state should be "loading" until page renders.';

    const matchProp = {
      params: {
        pageId: 'jptv-12-rules'
      }
    };

    const Page = createPage(React);
    const $ = dom.load(render(<Page match={ matchProp } />));
    const output =  $('.jptv-page-container');

    const actual = output.hasClass('loading');
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });

  nest.test('. page .md content render (not loading)', assert => {
    const message = 'It should render a given MD content.'

    const matchProp = {
      params: {
        pageId: 'jptv-12-rules'
      }
    };

    const Page = createPage(React);
    const pageContent = '## JPTV Markdown Render';

    const $ = dom.load(render(<Page pageContent={pageContent} match={ matchProp } />));
    const actual = $('h2').text();
    const expected = 'JPTV Markdown Render';

    assert.equal(actual, expected, message);
    assert.end();
  });
});