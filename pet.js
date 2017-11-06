const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: Date,
    pob: String
});

module.exports = mongoose.model('Pet', petSchema);