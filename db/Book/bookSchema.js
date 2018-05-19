const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        originTitle: String,
        title: [{
            language: String,
            title: String,
        }],
    },
    author: [String],
    language: [String],
    originLanguage: String,
    year: String,
    description: [{
        language: String,
        description: String,
    }],  
    rating: Number,
    publisher: [String],
    isbn: String,
    pages: Number,
});

module.exports = bookSchema;
