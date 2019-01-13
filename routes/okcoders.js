var express = require('express');
var router = express.Router();

// router.get('/', function(req,res) {
//     res.send("<html><h1>Welcome to OKCoders 2019!</h1></html>");
// });

router.get('/', function(req, res) {
    res.render('okcoders', { title: "OKCoders 2019", content: "Welcome to OKCoders" });
  });

router.get('/instructors', function(req,res) {
    res.json({instructors: ['Zach', 'Carson', 'Bob', 'Trae']})
})

module.exports = router;