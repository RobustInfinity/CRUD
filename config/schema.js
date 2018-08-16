
//ES6 : Object destructuring
var {mongoose} = require('./connection');
var Schema = mongoose.Schema;



var UserSchema = new Schema({
    name :{
        type : String,
        trim : true
    },
    age : {
        type : Number,
        default: 0
    }
})


var User = mongoose.model('Info',UserSchema);
//when name of property and variable is same
module.exports = {User};