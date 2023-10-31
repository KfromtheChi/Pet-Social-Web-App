var express = require('express');
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pet Social' });
});

// require the controller that exports CRUD functions
var postsCtrl = require("../controllers/posts");

// GET/posts
router.get("/", postsCtrl.index);

// GET/posts/new
router.get("/new", postsCtrl.new);

// GET/comments
router.get("/", commentsCtrl.index);

// GET/comments/new
router.get("/new", commentsCtrl.new);

module.exports = router;
