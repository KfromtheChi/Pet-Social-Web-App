var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var commentsCtrl = require('../controllers/comments');

// GET / users
router.get('/', commentsCtrl.index);

module.exports = router;