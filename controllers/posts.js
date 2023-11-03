const Post = require('../models/post');

module.exports = {
  index,
  new: newPost,
  create,
  //show
};

// function show(req, res) {
//   res.render('posts/show', {
//     post: Post.getOne(req.params.id),
//     description: '',
//   });
// }

async function create(req, res) {
  req.body.like = !!req.body.like;
  try {
    await Post.create({ ...req.body, user: req.user._id });
      res.redirect(`/posts`)
  } catch(err) {
      console.log(err);
  }
};

function newPost(req, res) {
  res.render('posts/new', { title: 'Create New Post', errorMsg: '' });
};
//****** async, await
function index(req, res) {
    res.render('posts/index', {
      posts: Post.find({}),
      title: 'All Posts'
    });
};
