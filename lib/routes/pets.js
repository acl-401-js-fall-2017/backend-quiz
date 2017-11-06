const router = require('express').Router();
const Pet = require('../models/pet');

module.exports = router
    .post('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then(pet => res.json(pet))
            .catch(next);
    })

    .get('/', (req, res, next)=>{
        Pet.find()
            .select('_id name type')
            .lean()
            .then(pets => res.json(pets.sort((a, b) => a._id < b._id)))
            .catch(next);
    });