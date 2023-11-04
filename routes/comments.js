var express = require('express');
var router = express.Router();

// Require the controller that exports CRUD functions
var commentsCtrl = require('../controllers/comments');

// POST/posts/:id/comments
router.post('/posts/:id/comments', commentsCtrl.create);

// DELETE/comments/:id
router.delete('/comments/:id', commentsCtrl.delete);

// GET/comments/:id/edit
router.put('/comments/:id', commentsCtrl.edit);



module.exports = router;

