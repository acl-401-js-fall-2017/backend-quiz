const router = require('express').Router();
const Rave = require('../lib/models/rave');

router 
    .post('/', (req, res, next) => {
        new Rave(req.body).save()
            .then(posted => res.json(posted))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        return Rave.find()
            .then( found => {
                return res.json(found);
            })
            .catch(next);
    });

module.exports = router;