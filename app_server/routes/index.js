var express = require('express');
var ctrlMain = require('../controllers/main.js') ;
var ctrlWelcome = require('../controllers/welcome.js') ;
var ctrlHome = require('../controllers/home.js') ;
var ctrlAlbum = require('../controllers/album.js') ;
var ctrlJournal = require('../controllers/journal.js') ;
var ctrlEvent = require('../controllers/events.js') ;
var router = express.Router();

/* GET home page. */
router.get('/' , ctrlWelcome.welcomePage) ;
router.get('/home/:userid' , ctrlHome.homePage) ;
router.get('/album' , ctrlAlbum.albumPage) ;
router.get('/home/:userid/journal' , ctrlJournal.journalPage) ;
router.get('/events' , ctrlEvent.eventsPage) ;

module.exports = router;
