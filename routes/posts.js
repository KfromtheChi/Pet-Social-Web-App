var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var postsCtrl = require('../controllers/posts');

// GET / users
router.get('/', postsCtrl.index);

module.exports = router;