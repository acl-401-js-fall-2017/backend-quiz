const router = require('express').Router();
const Pet = require('../models/pet');

module.exports = router
    .post('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then(pet => res.json(pet))
            .catch(next);
    });