const router = require('express').Router();
const Pet = require('../../lib/models/pet');

router 
    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(posted => res.json(posted))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        return Pet.find()
            .then( found => {
                return res.json(found);
            })
            .catch(next);
    });

module.exports = router;