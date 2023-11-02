const Post = require('../models/post');

module.exports = {
  create
};


async function create(req, res) {
    const post = await Post.findById(req.params.id);
  post.comments.push(req.body);
    console.log(req.body)
    try {
      await post.save();
      console.log(post)
        res.redirect(`/posts`);
    } catch(err) {
    console.log(err);
    }
}

/*
function index(req, res) {
    res.render('comments/index', {
      comments: Comment.getAll()
    });
}
*/
