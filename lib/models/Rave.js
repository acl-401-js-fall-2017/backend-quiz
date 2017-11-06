const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    comments: {
        type: String,
        maxlength: 250
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Rave', schema);