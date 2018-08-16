var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD',()=>{console.log('Database connected')})

module.exports = {mongoose};