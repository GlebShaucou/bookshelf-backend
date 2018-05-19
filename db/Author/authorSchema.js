const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    authorId: String,
});

module.exports = authorSchema;
