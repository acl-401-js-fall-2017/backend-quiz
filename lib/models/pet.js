const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        enum: ['cat', 'dog', 'bird', 'fish', 'snake'],
        required: true
    },
    breed: String,
    catchPhrase: {
        type: String,
        maxlength: 140
    }
});

module.exports = mongoose.model('Character', schema);