var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var postsCtrl = require('../controllers/posts');


// GET/posts
router.get("/", postsCtrl.index);

// GET/posts/new
//router.get("/new", postsCtrl.new);


module.exports = router;