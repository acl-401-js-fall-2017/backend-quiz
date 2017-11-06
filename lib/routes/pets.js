const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router

    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(result => res.json(result))
            .catch(next);
    });

module.exports = router;