const router = require('express').Router();
const Pet = require('../models/pet');

router
    .post('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then(mongoRes => res.send(mongoRes))
            .catch(next);
    });

module.exports = router;