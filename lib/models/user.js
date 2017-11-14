const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    comments: {
        type: String,
        max: 250
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);