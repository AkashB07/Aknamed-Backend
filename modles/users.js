const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema for storing user details
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    dob:{
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
