const Post = require('../models/post');

module.exports = {
  create,
  delete: deleteComment,
  edit: updateComment
};


async function updateComment(req,res) {
  const post = await Post.findOne({ "comments._id": req.params.id});
  if (!post) return res.redirect("/posts");
  const comment = post.comments.id(req.params.id);
  comment.comment = req.body.comment;
  await post.save();
  res.redirect(`/posts`);
}

async function deleteComment (req, res) {
  const post = await Post.findOne({ 'comments._id': req.params.id });
  if (!post) return res.redirect('/posts');
  post.comments.remove(req.params.id);
  await post.save();
  res.redirect('/posts');
};

async function create(req, res) {
  const post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    post.comments.push(req.body);
      console.log(req.body)
    try {
      await post.save();
        res.redirect(`/posts`);
    } catch(err) {
        console.log(err);
    }
};

/*
function index(req, res) {
    res.render('comments/index', {
      comments: Comment.getAll()
    });
}
*/
