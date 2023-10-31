const Comment = require('../models/comment');

module.exports = {
    index
};

function index(req, res) {
    res.render('comments/index', {
      comments: Comment.getAll()
    });
}
