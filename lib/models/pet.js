const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    petType: {
        enum: ['cat', 'dog', 'bird', 'fish', 'snake'],
        required: true
    },
    breed: {
        type: String
    },
    catchPhrase: {
        type: String,
        max: 140
    }
});

module.exports = mongoose.model('Pet', petSchema);