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
  if(req.params && req.params.userid && req.params.picid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let album = user[0].album.filter(pic => pic._id == req.params.picid);
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!album){
          sendJsonResponse(res, 404, {"message": "No events found"});
        }else{
          sendJsonResponse(res, 200, album[0]);
        }
      });
  }else{
      if(!req.params.userid){
        sendJsonResponse(res, 404, {"message": "userid isn't givin!"});
      }else if(!req.params.picid){
        sendJsonResponse(res, 404, {"message": "picid isn't givin!"});
      }else{
        sendJsonResponse(res, 404, {"message": "Missed parameters!"});
      }
  }
};

module.exports.createPicture = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .update({"_id": req.params.userid}, {$push: {'album' : {
        image: req.body.image,
        caption: req.body.caption
      }}},(err, album)=> {
        if(err){
          sendJsonResponse(res, 404, err);
        }else{
          sendJsonResponse(res, 201, album);
        }
      })
  }else{
    sendJsonResponse(res, 404, {"message": "userid isn't givin!"});
  }

};

module.exports.updatePicture = function(req, res){

};

module.exports.deletePicture = function(req, res){

};
