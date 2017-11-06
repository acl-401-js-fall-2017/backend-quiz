const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequiredString = {
    type: String,
    required: true
};

const schema = new Schema({

    name: RequiredString,
    type: {
        type: String,
        enum: ['cat', 'dog', 'bird', 'fish', 'snake'],
        required: true,
    },
    breed: String,
    catchPhrase: {
        type: String,
        maxLength: 140
    }
});

module.exports = mongoose.model('Pet', schema);