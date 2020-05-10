const mongoose = require('mongoose')

const Chat = new mongoose.Schema({

    name: { type: String, default: ''},
    description: { type: String, default:''},
   


})

module.exports = mongoose.model('Chat', Chat)