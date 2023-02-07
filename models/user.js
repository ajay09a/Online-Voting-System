const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    aadhar: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;