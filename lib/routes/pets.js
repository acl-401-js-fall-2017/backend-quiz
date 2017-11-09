const Pet = require('../models/Pet');
const router = module.exports = require('express').Router();

router
    .post('/', (req, res, next) => {
        return new Pet(req.body)
            .save()
            .then(mongoRes => res.send(mongoRes))
            .catch(next);
    })
    .get('/', (req, res, next) => {
        if(req.query.type) return Pet
            .find({'type': req.query.type})
            .lean()
            .then(r => res.send(r));
        else return Pet
            .find({})
            .lean()
            .then(r => res.send(r))
            .catch(next);
    })
;

