const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raveSchema = new Schema({
    petId: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        maxlength: 250
    },
    email: {
        type: String,
        required: true
    },<required: email of the user making the rave>
    
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
        type: String, 
        maxlength: 65 
    }
    
});

module.exports = mongoose.model('Rave', raveSchema);