const express = require('express');
const router = express.Router();

const BookModel = require('../db/Book/bookModel');

router.get('/', function(req, res) {
    // const { query } = req;
    // const { criteria, search } = query;

    BookModel.find((err, books) => {
        if (err) {
            // eslint-disable-next-line
            console.error('Some error occur', err);

            throw err;
        }

        return books;
    }).then((books) => {
        res.json(books);
    }).catch((error) => {
        res.send(`Some error occur ${error}`);
    });
});

router.get('/:id', function(req, res) {
    res.send(`Get a book by id: ${req.params.id}`);
});

router.put('/', function(req, res) {
    res.send('Add new book');
});

router.post('/', function(req, res) {
    res.send('Update book');
});

router.delete('/', function(req, res) {
    res.send('Delete book');
});

module.exports = router;