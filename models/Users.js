const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    receipt: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
      },
    isActive: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    redemption: [{
        User: String,
        quantity: Number,
        date: Date,
    }]
});

const User = mongoose.model('User', UserSchema)
module.exports = User;