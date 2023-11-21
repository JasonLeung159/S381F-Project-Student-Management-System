const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    STUid : String,
    email : {
        type: String,
        required: true,
        unique: true
    },
    year : String,
    Subject : String,
    Score : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;