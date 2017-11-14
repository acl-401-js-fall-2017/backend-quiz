const router = require('express').Router();
const Rave = require('../models/rave');
const Pet = require('../models/pet');

module.exports = router
    .post('/', (req, res, next) => {
        Pet.findById(req.body.pet)
            .then( (got) => {
                if (!got) throw { code: 400, error: 'Pet does not exist '};
            })
            .then( ()=>{
                Rave.find({email:req.body.email})
                    .then(got => got.forEach( review => {
                        if(review.pet === req.body.pet) throw { code: 400, error: 'you cant post more then one review for each pet '};
                    }));
            })
            .then( () => {
                new Rave(req.body).save()
                    .then(got => res.json(got));
            })     
            .catch(next);
    });