const mongoose = require('mongoose');
const schema = new mongoose.Schema({
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
    } 
});

module.exports = mongoose.model('Pet', schema);