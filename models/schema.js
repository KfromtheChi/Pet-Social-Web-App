const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: Username,
    date: Number,
    description: String,
    comment: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Schema', schemaSchema);