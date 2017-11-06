const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    pet:{
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    comments: {
        type: String,
        maxlength: 250,
        email: {
            type: String,
            required: true
        }
    }


});

module.exports = mongoose.model('Rave', Schema);