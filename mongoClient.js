const mongoose = require('mongoose');

const MONGO_DB_URL = 'mongodb://localhost:27017';
const dbName = 'bookshelf';

const url = `${MONGO_DB_URL}/${dbName}`;

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', (error) => {
    // eslint-disable-next-line
    console.log('Not Connected!', error);
});

db.once('open', () => {
    // eslint-disable-next-line
    console.log(`Connected to bookshelf database: ${url}`);  
});
