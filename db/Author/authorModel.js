const mongoose = require('mongoose');
const authorSchema = require('./authorSchema');

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;