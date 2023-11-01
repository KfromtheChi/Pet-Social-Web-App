const Post = require('../models/post');

module.exports = {
  index,
  new: newPost,
  create,
  show
};

function show(req, res) {
  res.render('posts/show', {
    post: Post.getOne(req.params.id),
    description: '',
  });
}

async function create(req, res) {
  try {
    const post = await Post.create({ ...req.body, user: req.user._id });
    res.redirect(`/posts/${post._id}`)
  } catch(err) {
    console.log(err);
  }
}

function newPost(req, res) {
  res.render('posts/new', { title: 'Create New Post', errorMsg: '' });
};

async function index(req, res) {
    res.render('posts/index', {
      posts: await Post.find({}),
      title: 'All Posts'
    });
}
