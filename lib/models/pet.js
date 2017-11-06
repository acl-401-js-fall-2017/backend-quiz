const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const petSchema = new Schema({
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
    catchPhrase: String
});

module.exports = mongoose.model('Pet', petSchema );