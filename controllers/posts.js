const Post = require('../models/post');

module.exports = {
  index,
  new: newPost,
  create
};

async function index(req, res) {
    res.render('posts/index', {
      posts: await Post.getAll()
    });
}

function newPost(req, res) {
  res.render('posts/new', { title: 'Create New Post', errorMsg: '' });
};

async function create(req, res) {
  try {
    const post = await Post.create({ ...req.body, user: req.user._id });
    res.redirect(`/posts/${post._id}`)
  } catch(err) {
    console.log(err);
  }
}