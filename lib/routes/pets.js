const router = require('express').Router();
const Pet = require('../models/pet');

module.exports = router
    .post('/', (req, res, next) => {
        const pets = Array.isArray(req.body) ? req.body : [req.body];
        Promise.all(pets.map(pet => new Pet(pet).save()))
            .then(got => {
                got.length < 2 ? res.json(got[0]) : res.json(got);
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {
        if (req.query.type){
            Pet.findOne({type: req.query.type})
                .then( pet => res.json(pet));
        }
        else{
            Pet
                .find()
                .lean()
                .then(pets => res.json(pets))
                .catch(next); 
        } 
    });
