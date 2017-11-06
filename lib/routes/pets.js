const router = require('express').Router();
const Pet = require('../models/pet');
const Rave = require('../models/rave');

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
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Promise.all([
            Pet.findById(id)
                .select('name company _id')
                .lean(),
            Rave.find({ reviewer: id })
                .select('rating reviewText')
                .populate('film', 'title')
                .lean()
        ])
            .then(([reviewer, reviews]) => {
                if (!reviewer) {
                    next({ code: 404, error: `id ${id} does not exist` });
                }
                reviewer.reviews = reviews.sort((a,b) => a._id < b._id);
                res.json(reviewer);
            });
    })