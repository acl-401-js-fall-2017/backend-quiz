const router = require('express').Router();
const Pet = require('../../lib/models/pet');

router 
    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(posted => res.json(posted))
            .catch(next);
    })

    .get('/getPet/', (req, res, next) => {
        const petType = req.query.type;
        return Pet.find({type: petType})
            .then( found => {
                return res.json(found[0]);
            })
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