const User = require('../models/user')

module.exports = {


    // Sending full data
    get: (params) => {
        return new Promise((resolve, reject)=> {
            User.find(params)
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
            User.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => [
                reject(new Error('User ' +id+ ' not found'))
            ])
        })
    },


    // post 
    post: (params) => {
       return new Promise((resolve, reject) => {
            User.create(params)
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
            User.findByIdAndUpdate(id, params, {new: true})
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
             User.findByIdAndRemove(id)
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