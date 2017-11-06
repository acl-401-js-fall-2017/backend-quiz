const router = require('express').Router();
const Pet = require('../models/pet');

router
    .post('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then(mongoRes => { 
                // was trying to working on typing did not finish in time :(
                if (!req.params.name && req.params.type) {
                    next({ code: 400, error: 'bad request'});
                } else {
                    res.send(mongoRes);
                }
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Pet.find({})
            .select('name')
            .lean()
            .then(mongoRes => res.send(mongoRes))
            .catch(next);
    });

module.exports = router;