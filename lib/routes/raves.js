const router = require('express').Router();
const Rave = require('../models/rave');

module.exports = router

    .post('/', (req, res, next) => {
        new Rave(req.body).save()
            .then(rave => res.json(rave))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Rave.find()
            .select('pet email')
            .lean()
            .then(rave => res.json(rave.sort((a, b) => a.name < b.name)))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        if (!id) {
            next({ code: 404, error: `id ${id} does not exist` });
        }
        Rave.update({ _id: id }, req.body, (err, data) => res.send(data));
    });

