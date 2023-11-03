var express = require('express');
var router = express.Router();
const passport = require('passport');

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pet Social' });
});

// Google OAuth passport login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    // requesting user profile and email
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/posts',
    failureRedirect: '/posts'
  }
));

// Oauth passport logout route
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/posts');
  });
});

module.exports = router
