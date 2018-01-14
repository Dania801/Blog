var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');
var ctrlArticles = require('../controllers/articles');
var ctrlAlbum = require('../controllers/album');
var ctrlEvents = require('../controllers/events');

router.get('/user', ctrlUsers.getUsersList); //Done
router.get('/user/:userid', ctrlUsers.getUser); //Done
router.post('/user', ctrlUsers.createUser); //Done
router.put('/user/:userid', ctrlUsers.updateUser);
router.delete('/user/:userid', ctrlUsers.deleteUser);

router.get('/user/:userid/articles', ctrlArticles.getArticlesList);
//router.get('/user/:userid/articles/:articleid', ctrlArticles.getArticle);
router.post('/user/:userid/articles', ctrlArticles.createArticle);
router.put('/user/:userid/articles/:articleid', ctrlArticles.updateArticle);
router.delete('/user/:userid/articles/:articleid', ctrlArticles.deleteArticle);

router.get('/user/:userid/album', ctrlAlbum.getAlbum);
router.get('/user/:userid/album/:pic', ctrlAlbum.getPicture);
router.post('/user/:userid/album', ctrlAlbum.createPicture);
router.put('/user/:userid/album/:pic', ctrlAlbum.updatePicture);
router.delete('/user/:userid/album/:pic', ctrlAlbum.deletePicture);

router.get('/user/:userid/events', ctrlEvents.getEventsList); //Done
router.get('/user/:userid/events/:eventid', ctrlEvents.getEvent); //Done
router.post('/user/:userid/events', ctrlEvents.createEvent);
router.put('/user/:userid/events/:eventid', ctrlEvents.updateEvent);
router.delete('/user/:userid/event/:eventid', ctrlEvents.deleteEvent);

module.exports = router;
