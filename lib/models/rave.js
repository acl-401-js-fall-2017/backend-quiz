const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequiredString = {
    type: String,
    required: true
};

const schema = new Schema({

    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    comments:{
        type: String,
        maxLength: 250,
        required:true
    },
    email: RequiredString

});

module.exports = mongoose.model('Rave', schema);