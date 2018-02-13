import test from 'tape';
import http from 'http';

test('Server', nest => {
  nest.test('. Root path', assert => {
    http.get('http://localhost:3000', res => {
      const message = 'Status code should be 200 OK.';
      assert.equal(200, res.statusCode, message);
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

  nest.test('. client React hydration', assert => {
    const message = 'Client app should be able to hydrate server response.';
  });
});