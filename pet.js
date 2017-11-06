const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        array: ['cat','dog','bird','fish','snake'],
        required: true
    },

    breed: String,
    
    catchPhrase: {
        type: Number, 
        max: 65 
    }
    
});

module.exports = mongoose.model('Pet', petSchema);