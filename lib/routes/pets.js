const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router

    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(result => res.json(result))
            .catch(next);
    })

    .get('/', (req, res) => {
        Pet.find()
            .then(pets => res.json(pets));
    })

    .get('/:id', (req, res, next) => {
        Pet.findById(req.params.id)
            .then(pet => {
                if(!pet) {
                    res.statusCode = 404;
                    res.send('id ${req.params.id} doe not exist');
                }
                else res.json(pet);
            })
            .catch(next);
    });

module.exports = router;
