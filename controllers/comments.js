const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports = {
  index,
  create
};

function index(req, res) {
    res.render('comments/index', {
      comments: Comment.getAll()
    });
}

async function create(req, res) {
  const post = await Post.findById(req.params.id);
  try {
    const comment = await Comment.create({ ...req.body, user: req.user._id, post: post._id });
    post.comments.push(comment);
    await post.save();
  } catch(err) {
    console.log(err);
  }
}