const router = require('express').Router();
const Pet = require('../../lib/models/pet');

router 
    .post('/', (req, res, next) => {
        const newPet = new Pet(req.body);
        // const validation = newPet.validateSync();
        // if (validation.errors) throw { code: 400, error: 'invalid pet schema' };
        newPet.save()
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