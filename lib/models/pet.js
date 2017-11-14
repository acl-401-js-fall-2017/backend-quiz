const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['cat', 'dog', 'bird', 'fish', 'snake'],
        required: true
    },
    breed: String,
    catchPhrase: {
        type: String,
        maxlength: 140
    },
    raves: [{
        type: Schema.Types.ObjectId,
        ref: 'Rave'
    }]
});

module.exports = mongoose.model('Pet', schema);