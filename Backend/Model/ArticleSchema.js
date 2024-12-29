const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: [true, "please enter headline"],
    },
    author: {
        type: String,
        required: [true, "please enter author name"],
    },
    content: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false,
        default: 0,

    },
    img:{
        type: String,
        required: false,
        default:0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;