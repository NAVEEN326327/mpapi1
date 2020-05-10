const Chat = require('../models/chat')

module.exports = {

    // sending full data
    get: (params) => {
        return new Promise((resolve, reject)=> {
            Chat.find(params)
            .then(data =>{
    
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
      
    },

    // sending data by id
    getById: (id) => {
        return new Promise((resolve, reject) => {
            Chat.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => [
                reject(new Error('Chat ' +id+ ' not found'))
            ])
        })
    },


//  Chat post
    post: (params) => {
        return new Promise((resolve, reject) => {
             Chat.create(params)
             .then(data => {
                 resolve(data)
             })
             .catch(err => {
                 reject(err)
             })
        })
     },



    // Update data
    put: (id, params) => {
        return new Promise((resolve, reject) => {
            Chat.findByIdAndUpdate(id, params, {new: true})
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },



      // Delete specific user
      delete: (id) => {
        return new Promise((resolve, reject) => {
            Chat.findByIdAndRemove(id)
            .then(() => {
                resolve({
                    id: id
                })
            })
            .catch(err => {
                reject(err)
            })
        })
   }
 
}