const router = require('express').Router();
const Pet = require('../models/pet');

module.exports = router

    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(pet => res.json(pet))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Pet.find()
            .select('name type _id')
            .lean()
            .then(pet => res.json(pet.sort((a, b) => a.name < b.name)))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        if (!id) {
            next({ code: 404, error: `id ${id} does not exist` });
        }
        Pet.update({ _id: id }, req.body, (err, data) => res.send(data));
    });

