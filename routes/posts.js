var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var postsCtrl = require('../controllers/posts');


// GET/posts
router.get("/", postsCtrl.index);

// GET/posts/new
//router.get("/new", postsCtrl.new);

// GET/posts/:id
// router.get('/:id',postsCtrl.show);

// GET/posts/:id/edit
//router.get('/:id/edit', postsCtrl.edit);

// POST/posts
////router.post('/', postsCtrl.create);

// DELETE/posts/:id
//router.delete('/:id', postsCtrl.delete);

// PUT/posts/:id
//router.put('/:id', postsCtrl.update);


module.exports = router;