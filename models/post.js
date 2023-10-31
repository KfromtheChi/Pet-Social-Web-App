const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {type: ObjectId, ref: 'User'},
    date: Date,
    description: String,
    comment: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);