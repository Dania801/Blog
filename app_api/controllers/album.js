var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.getAlbum = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let album = user[0].album ;
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!album){
          sendJsonResponse(res, 404, {"message": "Sorry, No events found!"});
        }else{
          sendJsonResponse(res, 200, album);
        }
      });
  }
};

module.exports.getPicture = function(req, res){

};

module.exports.createPicture = function(req, res){

};

module.exports.updatePicture = function(req, res){

};

module.exports.deletePicture = function(req, res){

};
