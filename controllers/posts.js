const Post = require('../models/post');

module.exports = {
  index,
  new: newPost,
  create,
  delete: deletePost
  //show
};


async function deletePost (req, res) {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/posts');
};

async function create(req, res) {
  //req.body.like = !!req.body.like;
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  try {
    await Post.create({ ...req.body, user: req.user._id });
      res.redirect(`/posts`)
  } catch(err) {
      console.log(err);
  };
};

function newPost(req, res) {
  res.render('posts/new', { title: 'Create New Post', errorMsg: '' });
};

async function index(req, res) {
    res.render('posts/index', {
      posts: await Post.find({}),
      title: 'All Posts'
    });
};

// function show(req, res) {
//   res.render('posts/show', {
//     post: Post.getOne(req.params.id),
//     description: '',
//   });
// }
