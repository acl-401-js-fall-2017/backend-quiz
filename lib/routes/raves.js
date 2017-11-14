const router = require('express').Router();
const Rave = require('../models/rave');

router
    .post ('/', (req, res, next) => {
        new Rave (req.body)
            .save()
            .then( result => res.json(result))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Rave.find()
            .then(rave => res.json(rave))
            .catch(next);
    });