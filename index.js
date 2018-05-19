require('./mongoClient');

const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const publisherRoutes = require('./routes/publisherRoutes');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Bookshelf app backend');
});

app.use('/books', bookRoutes);

app.use('/authors', authorRoutes);

app.use('/publishers', publisherRoutes);

// eslint-disable-next-line
app.use((err, req, res, next) => {
    // eslint-disable-next-line
    console.log(err.stack);

    res.status(404).send('Nothing was found');
});

app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Bookshelf backend listenning on port: ', PORT);
});
