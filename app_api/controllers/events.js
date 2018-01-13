var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

// Getting a list of events for specific user
module.exports.getEventsList = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let events = user[0].events ;
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!events){
          sendJsonResponse(res, 404, {"message": "No events found"});
        }else{
          sendJsonResponse(res, 200, events);
        }
      });
  };
};

module.exports.getEvent = function(req, res){

};

module.exports.createEvent = function(req, res){

};

module.exports.updateEvent = function(req, res){

};

module.exports.deleteEvent = function(req, res){

};
