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
  console.log("getUser is being called from inside the api");
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

// Updating a user
module.exports.updateUser = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .findById(req.params.userid)
      .select('profile')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err)
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "didn't find a user with the specfied ID!"});
        }else{
          user.profile.firstName = req.body.firstName? req.body.firstName: user.profile.firstName;
          user.profile.lastName = req.body.lastName? req.body.lastName: user.profile.lastName;
          user.profile.email = req.body.email? req.body.email: user.profile.email;
          user.profile.password = req.body.password? req.body.password: user.profile.password;
          user.profile.profilePic = req.body.profilePic? req.body.profilePic: user.profile.profilePic;
          user.save((err, user)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, user);
            }
          });
        };
      });
  }else{
    sendJsonResponse(res, 404, {"message": "no userid is givin!"});
  }
};

//Deleting a user
module.exports.deleteUser = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .findById(req.params.userid)
      .select('profile')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err)
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "didn't find a user with the specfied ID!"});
        }else{
          user.remove();
          user.save((err, user)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, user);
            }
        });
      };
    });
  }else{
    sendJsonResponse(res, 404, {"message": "No userid is givin!"});
  }
};
