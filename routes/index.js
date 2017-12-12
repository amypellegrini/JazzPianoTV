var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  /* GET home page. */
  router.get('/*', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', { session: false }, function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json(info);
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.json(info);
      });
    })(req, res, next);
  });

  return router;
}
