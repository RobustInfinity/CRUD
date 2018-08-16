var express = require('express');
var router = express.Router();
var list = require('../config/model');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;

router.get('/',(request, response)=>{
    list.get(request, response);
})

router.post('/add',(request, response)=>{
  var name = request.body.name;
  var age = request.body.age;
  list.add({name, age});
  response.redirect('/')
})

router.post('/update', (request, response)=>{
  response.render('index',{title: 'UPDATE', list: []})
})

router.post('/delete',(request, response)=>{
  response.render('index',{title: 'DELETE', list: []})
})