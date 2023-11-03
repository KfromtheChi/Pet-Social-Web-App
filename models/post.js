const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// since comments are not saved to their own collection, no model is needed
//subdocument to a post, so all it needs is a schema in the post schema
const commentSchema = new Schema({
    comment: { String }
});
    //user: {type: Schema.Types.ObjectId, ref: 'User'},
    //post: {type: Schema.Types.ObjectId, ref: 'Post'},
    //replies: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    
const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
    image: String,
    location: String,
    comments: [commentSchema]
});


module.exports = mongoose.model('Post', postSchema);