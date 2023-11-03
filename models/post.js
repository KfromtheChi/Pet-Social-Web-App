const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// comments are not saved to their own collection
// no modelneeded
// subdocument to a post = comment schema in post schema (embedded)

const commentSchema = new Schema({
    comment: { type: String, required: true }
});
    
const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
    image: String,
    location: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);

