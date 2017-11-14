const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const RequiredString = { 
    type: String,
    required : true
};

const petSchema = new Schema({
    name: RequiredString,
    type: {
        required: true,
        type: String,
        enum: ['cat', 'dog', 'bird', 'fish', 'snake']
    },
    breed: String,
    catchPhrase: {
        type: String,
        maxLength: 140
    }
});

module.exports = mongoose.model('Pet', petSchema);