const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const { query } = req;
    const { criteria, search } = query;

    res.send(`Get all publishers or publishers that match criteria ${criteria} and search ${search}`);
});

router.get('/:id', function(req, res) {
    res.send(`Get a publisher by id: ${req.params.id}`);
});

router.put('/', function(req, res) {
    res.send('Add new publisher');
});

router.post('/', function(req, res) {
    res.send('Update publisher');
});

router.delete('/', function(req, res) {
    res.send('Delete publisher');
});

module.exports = router;