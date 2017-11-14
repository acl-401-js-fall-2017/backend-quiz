const Router = require('express').Router;
const router = Router();
const Rave = require('../models/rave');
// const Pet = require('../models/pet');


router 
    .post('/', (req, res, next) => {
        new Rave(req.body).save()
            .then(result => res.json(result))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Rave.find()
            .populate({ path: 'pet', select: 'name type'})
            .then(result => res.json(result))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Rave.findById(req.params.id)
            .then(result =>{
                res.json(result);
            })
            .catch(next);
    });

module.exports = router;