var express = require('express');
var ctrlMain = require('../controllers/main.js') ;
var ctrlWelcome = require('../controllers/welcome.js') ;
var ctrlHome = require('../controllers/home.js') ;
var ctrlAlbum = require('../controllers/album.js') ;
var ctrlJournal = require('../controllers/journal.js') ;
var ctrlEvent = require('../controllers/events.js') ;
var router = express.Router();

/* GET home page. */
router.get('/' , ctrlWelcome.index) ;
router.get('/home' , ctrlHome.index) ;
router.get('/album' , ctrlAlbum.index) ;
router.get('/journal' , ctrlJournal.index) ;
router.get('/events' , ctrlEvent.index) ;

module.exports = router;
