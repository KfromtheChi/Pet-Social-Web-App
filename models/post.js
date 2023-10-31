const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
    comment: [String]
}, {
    timestamps: true
});


module.exports = mongoose.model('Post', postSchema);