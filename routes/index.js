const express = require('express');
const main = require('../src/code/main.js')

//import connection from '../bin/db/connection';
var router = express.Router();

/* GET api listing. */
router.use(function(req, res, next) {
  //cors();
  
  var protocol=req.protocol+"://";
  var host=req.hostname;
  

  //res.header('Access-Control-Allow-Origin', protocol+host+':4200');
  res.header('Access-Control-Allow-Origin', "*");
        
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization,X-Custom-Header,x-access-token');
  res.header('Access-Control-Allow-Credentials', true);
  
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API for dynamic read file 0.0.1: GET: /get-meta-data/:module_name/:file_name')
  
});

router.get('/get-meta-data/:module_name/:file_name',main.dynamicReadFile);
router.get('*', function(req, res){
  res.status(404).send('Page Not found: 404');
});
module.exports = router;
