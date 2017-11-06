const Rave = require('../models/Rave');
const Pet = require('../models/Pet');
const router = require('express').Router();
const {Schema} = require('mongoose');

module.exports = router
    .post('/', (req, res, next) => {

        const checkReqs = [
            Pet.findById(req.body.pet),
            Rave                                // always returns nothing... can't check for previous rave by same email
                .find({'pet': Schema.Types.ObjectId(req.body.pet), 'email': req.body.email})
                .then(mongoRes => !mongoRes.length)
        ];

        return Promise.all(checkReqs)
            .then(([petExists, petIsUnraved]) => {
                if(petExists && petIsUnraved) return new Rave(req.body).save();
                else throw {error: 400, message: 'rave requirements not met'};
            })
            .then(mongoRes => res.send(mongoRes))
            .catch(next);
        // return new Rave(req.body)
    })
;