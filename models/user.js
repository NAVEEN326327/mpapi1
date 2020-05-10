const mongoose = require('mongoose')

const User = new mongoose.Schema({

    name: { type: String, default: ''},
    email: { type: String, default:''},
    age: { type: Number, default: 0},
    friends: { type: Number, default:0 },
    level: { type: Number, default: 1},
    minutes: {type: Number, default:0},
    phone: {type:Number, default: 91},
    profession: {type: String, default: '' },
    ttime: {type: Number, default: 0},
    password: {type: String, default: ''},


})

module.exports = mongoose.model('User', User)