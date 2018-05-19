const mongoose = require('mongoose');
const bookSchema = require('./bookSchema');

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
