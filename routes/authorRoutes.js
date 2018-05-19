const express = require('express');
const AuthorModel = require('../db/Author/authorModel');

const router = express.Router();

router.get('/', (req, res) => {
    AuthorModel.find((err, authors) => {
        if (err) {
            // eslint-disable-next-line
            console.error('Some error occur', err);

            return err;
        }

        return authors;
    }).then((authors) => {
        res.json(authors);
    }).catch((error) => {
        res.send(`Some error occur ${error}`);
    });
});

router.get('/:id', (req, res) => {
    res.send(`Get a author by id: ${req.params.id}`);
});

router.put('/', (req, res) => {
    let { author } = req.body;

    author = JSON.parse(author);

    if (author) {
        AuthorModel.create(author, (err, newAuthor) => {
            if (err) return err;
            
            res.json(newAuthor);
        });
    } else {
        res.status(400).send('Bad Request');
    }
});

router.post('/', (req, res) => {
    const { author, id } = req.body;
    const options = {
        new: true,
    };

    AuthorModel.findOneAndUpdate({ _id: id }, JSON.parse(author), options, (err, updatedAuthor) => {
        if (err) return err;

        res.json(updatedAuthor);
    });
});

router.delete('/', (req, res) => {
    const { id } = req.body;

    AuthorModel.remove({ _id: id }, (err, result) => {
        if (err) return err;

        res.send(`Author(s) ${result.n} with id: ${id} were deleted`);
    });
});

module.exports = router;
