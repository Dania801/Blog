var express = require('express');
var ctrlMain = require('../controllers/main.js') ;
var router = express.Router();

/* GET home page. */
router.get('/' , ctrlMain.index) ;

module.exports = router;
