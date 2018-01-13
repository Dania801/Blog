var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

// Get all users
module.exports.getUsersList = function(req, res){
  console.log('getUsersList has been called from the REST api');
  Blog
    .find({}, (err, users) =>{
      if(err){
        sendJsonResponse(res, 404, err);
      }else if(!users){
        sendJsonResponse(res, 404, {"message": "No users found!"});
      }else{
        sendJsonResponse(res, 200, users);
      }
    });
};

// Get a specific user
module.exports.getUser = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .findOne({"_id": req.params.userid}, (err, user) =>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "Sorry, Couldn't find a user with the specified ID!"});
        }else{
          sendJsonResponse(res, 200, user);
        }
      })
  }else{
    sendJsonResponse(res, 404, {"message": "Sorry, userid is missing!"});
  }
};

//Creating A new user
module.exports.createUser = function(req, res){
  Blog
    .create({
      profile: {
    		firstName: req.body.firstName,
    		lastName: req.body.lastName,
    		email: req.body.email,
    		password: req.body.password,
    		profilePic: req.body.profilePic
    	}
    }, {upsert: true}, (err, user)=>{
      if(err){
        sendJsonResponse(res, 404, err);
      }else if(!user){
        sendJsonResponse(res, 404, {"message": "Couldn't add new user"});
      }else{
        sendJsonResponse(res, 201, user);
      }
    })
};

module.exports.updateUser = function(req, res){

};

module.exports.deleteUser = function(req, res){

};
