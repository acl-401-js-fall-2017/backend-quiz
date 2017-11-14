const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raveSchema = new Schema({
    pet:{
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true},
    comments:{ 
        type: String,
        maxlength: 250,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Rave', raveSchema);