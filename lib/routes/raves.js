const router = require('express').Router();
const Rave = require('../models/rave');

router
    .post('/', (req, res, next) => {
        new Rave(req.body)
            .save()
            .then(mongoRes => res.send(mongoRes))
            .catch(next);
    });

module.exports = router;