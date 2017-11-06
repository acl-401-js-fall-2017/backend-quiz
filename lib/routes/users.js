const router = require('express').Router();
const User = require('../models/user');
// const Rave = require('../models/rave');

router
    .post('/', (req, res, next) => {
        new User(req.body).save()
            .then(user => res.json(user))
            .catch(next);
    });

module.exports = router;