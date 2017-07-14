var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  /* GET home page. */
  router.get('/*', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.post('/login', function(req, res, next ){
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.json( { message: info.message }) }
      res.json(user);
    })(req, res, next);   
});

  return router;
}
