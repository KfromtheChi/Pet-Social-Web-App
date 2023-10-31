var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var commentsCtrl = require('../controllers/comments');

// GET/comments
router.get("/", commentsCtrl.index);

// GET/comments/new
//router.get("/new", commentsCtrl.new);


module.exports = router;