const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    comments: {
        type: String,
        maxlength: 250
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Character', schema);



// {
//     pet: <required: id of the pet being raved>,
//     comments: <required: string, max length: 250 characters>,
//     email: <required: email of the user making the rave>
// }