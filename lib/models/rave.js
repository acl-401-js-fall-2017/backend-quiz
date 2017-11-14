const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
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