const router = require('express').Router();
const Pet = require('../../lib/models/pet');

router
    .post('/', (req, res, next) => {
        new Pet(req.body).save()
            .then(pet => res.json(pet))
            .catch(next);
    });
    
module.exports = router;