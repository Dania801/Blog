var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');
var ctrlArticles = require('../controllers/articles');
var ctrlAlbum = require('../controllers/album');
var ctrlEvents = require('../controllers/events');

router.get('/user', ctrlUsers.getUsersList); //Done
router.get('/user/:userid', ctrlUsers.getUser); //Done
router.post('/user', ctrlUsers.createUser); //Done
router.put('/user/:userid', ctrlUsers.updateUser); //Done
router.delete('/user/:userid', ctrlUsers.deleteUser);

router.get('/user/:userid/articles', ctrlArticles.getArticlesList);
//router.get('/user/:userid/articles/:articleid', ctrlArticles.getArticle);
router.post('/user/:userid/articles', ctrlArticles.createArticle); //Done
router.put('/user/:userid/articles/:articleid', ctrlArticles.updateArticle);
router.delete('/user/:userid/articles/:articleid', ctrlArticles.deleteArticle);

router.get('/user/:userid/album', ctrlAlbum.getAlbum); //Done
router.get('/user/:userid/album/:picid', ctrlAlbum.getPicture); //Done
router.post('/user/:userid/album', ctrlAlbum.createPicture); //Done
router.put('/user/:userid/album/:picid', ctrlAlbum.updatePicture); //Done
router.delete('/user/:userid/album/:picid', ctrlAlbum.deletePicture);

router.get('/user/:userid/events', ctrlEvents.getEventsList); //Done
router.get('/user/:userid/events/:eventid', ctrlEvents.getEvent); //Done
router.post('/user/:userid/events', ctrlEvents.createEvent);//Done // Still some work is needed in formating date , and default endDate
router.put('/user/:userid/events/:eventid', ctrlEvents.updateEvent); //Done
router.delete('/user/:userid/event/:eventid', ctrlEvents.deleteEvent);

module.exports = router;
