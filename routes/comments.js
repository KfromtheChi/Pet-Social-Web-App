var express = require('express');
var router = express.Router();

// Require the controller that exports CRUD functions
var commentsCtrl = require('../controllers/comments');

// POST/posts/:id/comments
router.post('/posts/:id/comments', commentsCtrl.create);

// GET/comments
//router.get("/", commentsCtrl.index);

// GET/comments/new
//router.get("/new", commentsCtrl.new);


module.exports = router;