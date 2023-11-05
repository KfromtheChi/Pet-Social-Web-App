const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// comments are not saved to their own collection
// no modelneeded
// subdocument to a post = comment schema in post schema (embedded)

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
});
    
const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: String,
    image: String,
    location: String,
    userName: String,
    userAvatar: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);

