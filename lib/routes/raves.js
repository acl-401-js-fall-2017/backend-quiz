const router = require('express').Router();
const Rave = require('../../lib/models/rave');

router
    .post('/', (req, res, next) => {
        new Rave(req.body).save()
            .then(rave => res.json(rave))
            .catch(next);
    });

module.exports = router;