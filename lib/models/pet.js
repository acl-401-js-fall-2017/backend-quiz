const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        max: 140
    }
});

module.exports = mongoose.model('Pet', schema);