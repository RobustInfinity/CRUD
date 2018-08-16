
var {User} = require('./schema');
var {mongoose} = require('./connection');

var list = {
    add : function(obj){
        var user = new User({
            name : obj.name,
            age : obj.age
        });
         User.create(obj)
         .then((result)=>{
             console.log(result)
         })
         .catch((err)=>{
             console.log(err);
         })
    },
    get : function(request, response){
            User.find({},(err,docs)=>{
                console.log(docs);
                response.send(docs)
            })
    }
}

module.exports = list;