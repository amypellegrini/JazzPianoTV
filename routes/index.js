require('babel-register');
require('ignore-styles');

var React = require('react');
var reactDOMServer = require('react-dom/server');
var express = require('express');
var router = express.Router();
var createApp = require('../src/js/app-server').default;

module.exports = function() {
  var app = createApp(React);

  /* GET home page. */
  router.get('/*', function(req, res, next) {
    var render =  reactDOMServer.renderToString(app({
      location: req.url
    }));
    res.render('index', { serverRender: render });
  });

  return router;
}
