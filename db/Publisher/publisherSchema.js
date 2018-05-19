const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    publisher: String,
    location: String,
    publisherId: String,
});

module.exports = publisherSchema;
