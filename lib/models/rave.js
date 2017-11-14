const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const RequiredString = { 
    type: String,
    required : true
};

const raveSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref : 'Pet',
        required: true
    },
    comments: RequiredString,
    email: RequiredString
});

module.exports = mongoose.model('Rave', raveSchema);