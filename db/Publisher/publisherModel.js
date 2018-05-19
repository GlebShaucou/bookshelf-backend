const mongoose = require('mongoose');
const publisherSchema = require('./publisherSchema');

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
