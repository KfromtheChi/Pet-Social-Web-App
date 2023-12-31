var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var usersCtrl = require('../controllers/users')

// GET / users
router.get('/', usersCtrl.index);

// GET/users/new
//router.get("/new", usersCtrl.new);

module.exports = router;
