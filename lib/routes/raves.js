const router = require('express').Router();
const Rave = require('../models/rave');

module.exports = router
    .post('/', (req, res, next) => {
        new Rave(req.body)
            .save()
            .then(rave => res.json(rave))
            .catch(next);
    });

    