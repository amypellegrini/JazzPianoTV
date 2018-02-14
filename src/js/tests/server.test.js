import test from 'tape';
import http from 'http';
import React from 'react';
import dom from 'cheerio';

test('Server', nest => {
  nest.test('. Root path', assert => {
    http.get('http://localhost:3000', res => {
      const message = 'Status code should be 200 OK.';
      const actual = res.statusCode;
      const expected = 200;

      assert.equal(actual, expected, message);
      assert.end();
    });
  });

  nest.test('. html response body', assert => {
    http.get('http://localhost:3000', res => {
      const message = 'Response body should be valid HTML.';

      let responseBody = '';
      
      res.on('data', chunk => {
        responseBody += chunk;
      });

      res.on('end', () => {
        const actual = responseBody.split('\r\n')[0];
        const expected = '<!DOCTYPE html>';

        assert.equal(actual, expected, message);
        assert.end();
      });
    });
  });

  nest.test('. React isomorhpic rendering', assert => {
    http.get('http://localhost:3000', res => {
      const message = 'Client app should be pre-rendered.';
  
      let responseBody;

      res.on('data', chunk => {
        responseBody += chunk;
      });

      res.on('end', () => {
        const $ = dom.load(responseBody);
        const actual = $('#jptv').length > 0;
        const expected = true;

        assert.equal(actual, expected, message);
        assert.end();
      });
    });
  });

  nest.test('. Server page rendering (with route)', assert => {
    http.get('http://localhost:3000/jptv-12-rules', res => {

      const message = 'Server render should work with page routing.';

      let responseBody;

      res.on('data', chunk => {
        responseBody += chunk;
      });

      res.on('end', () => {
        const $ = dom.load(responseBody);
        const actual = responseBody;
        const expected = 'JazzPianoTV 12 Rules for Piano Mastery';

        assert.equal(actual, expected, message);
        assert.end();
      });
    });
  });
});
