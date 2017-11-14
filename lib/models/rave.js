const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    comment: {
        type: String,
        maxlength:250,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Rave', petSchema);

