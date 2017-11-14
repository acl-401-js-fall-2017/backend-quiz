const router = require('express').Router();
const Pet = require('../models/pet');

router
    .post ('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then( result => res.json(result))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Pet.find()
            .then(pets => res.json(pets))
            .catch(next);
    });

module.exports = router;

