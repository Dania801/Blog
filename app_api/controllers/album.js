var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

// Getting photo album
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
  }else{
    sendJsonResponse(res, 404, {"message": "No userid is givin!"});
  }
};

//Getting a specific picture
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

//Creating a picture
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

//Updating a picture
module.exports.updatePicture = function(req, res){
  if(req.params && req.params.userid && req.params.picid){
    Blog
      .findById(req.params.userid)
      .select('album')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "No user found!"});
        }else{
          let thePic = user.album.filter(pic => pic._id == req.params.picid);
          thePic[0].image = req.body.image? req.body.image: thePic[0].image;
          thePic[0].caption = req.body.caption? req.body.caption: thePic[0].caption;

          user.save((err, album)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, album);
            }
          })
        }
      })
  }else{
    if(!req.params.userid){
      sendJsonResponse(res, 404, {"message": "userid ins't givin!"});
    }else if(!req.params.picid){
      sendJsonResponse(res, 404, {"message": "picid isn't givin"});
    }else{
      sendJsonResponse(res, 404, {"message": "Some parameters are missed!"});
    }
  }
};

//Deleting a picture
module.exports.deletePicture = function(req, res){
  if(req.params && req.params.userid && req.params.picid){
    Blog
      .findById(req.params.userid)
      .select('album')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "No user found!"});
        }else{
          let thePic = user.album.filter(pic => pic._id == req.params.picid);
          thePic[0].remove();

          user.save((err, album)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, album);
            }
          })
        }
      })
  }else{
    if(!req.params.userid){
      sendJsonResponse(res, 404, {"message": "userid ins't givin!"});
    }else if(!req.params.picid){
      sendJsonResponse(res, 404, {"message": "picid isn't givin"});
    }else{
      sendJsonResponse(res, 404, {"message": "Some parameters are missed!"});
    }
  }
};
