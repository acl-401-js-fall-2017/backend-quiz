const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');


router 
    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(result => res.json(result))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Pet.find()
            .select('name type')
            .then(result => res.json(result))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Pet.findById(req.params.id)
            .then(result =>{
                res.json(result);
            })
            .catch(next);
    })

    .get('/:type', (req, res, next) => {
        Pet.find(req.params.type)
            .then(result =>{
                res.json(result);
            })
            .catch(next);
    });

module.exports = router;