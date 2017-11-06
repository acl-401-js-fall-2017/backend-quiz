const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');
// const respond = require('../respond');

router

    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(result => res.json(result))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        console.log('req', req.body);
        Pet.find()
            .then(result => res.json(result))
            .catch(next);
    });

// .get('/:dog', (req, res, next) => { 

// });



module.exports = router;