const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raveSchema = new Schema ({
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pets',
        required: true
    },
    comment: {
        type: String,
        required: true,
        maxlength: 250
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Rave', raveSchema);