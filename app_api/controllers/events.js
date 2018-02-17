var mongoose = require('mongoose');
var moment = require('moment');
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
        let profile = user[0].profile ;
        let info = {profile, events};
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!events){
          sendJsonResponse(res, 404, {"message": "No events found"});
        }else{
          sendJsonResponse(res, 200, info);
        }
      });
  }else{
    sendJsonResponse(res, 404, {"message": "No userid is givin"});
  }
};

// Getting a specific event
module.exports.getEvent = function(req, res){
  if(req.params && req.params.userid && req.params.eventid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let events = user[0].events.filter(event => event._id == req.params.eventid);
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!events){
          sendJsonResponse(res, 404, {"message": "No events found"});
        }else{
          sendJsonResponse(res, 200, events[0]);
        }
      });
  }else{
      if(!req.params.userid){
        sendJsonResponse(res, 404, {"message": "userid isn't givin!"});
      }else if(!req.params.eventid){
        sendJsonResponse(res, 404, {"message": "eventid isn't givin!"});
      }else{
        sendJsonResponse(res, 404, {"message": "Missed parameters!"});
      }
  }
};

//Creating a new event
module.exports.createEvent = function(req, res){
  //ISO format for both begin and end date
  var begin = new Date(req.body.beginDate+"T16:00:00Z");
  var end = new Date(req.body.endDate+"T16:00:00Z");

  if(req.params && req.params.userid){
    Blog
      .update({"_id": req.params.userid}, {$push: {'events' : {
        title: req.body.title,
        beginDate: begin,
        endDate: end,
        notes: req.body.notes
      }}},(err, event)=> {
        if(err){
          sendJsonResponse(res, 404, err);
        }else{
          sendJsonResponse(res, 201, event);
        }
      })
  }else{
    sendJsonResponse(res, 404, {"message": "No userid is givin!"});
  }

};

// Updating an event
module.exports.updateEvent = function(req, res){
  if(req.params && req.params.userid && req.params.eventid){
    Blog
      .findById(req.params.userid)
      .select('events')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "No user found!"});
        }else{
          let theEvent = user.events.filter(event => event._id == req.params.eventid);
          //Check the format
          var begin = req.body.beginDate? new Date(req.body.beginDate+"T16:00:00Z"): "";

          theEvent[0].title = req.body.title? req.body.title: theEvent[0].title;
          theEvent[0].beginDate = begin? begin: theEvent[0].beginDate;
          theEvent[0].endDate = req.body.endDate? req.body.endDate: theEvent[0].endDate;
          theEvent[0].notes = req.body.notes? req.body.notes: theEvent[0].notes;

          user.save((err, events)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, events);
            }
          })
        }
      })
  }else{
    if(!req.params.userid){
      sendJsonResponse(res, 404, {"message": "userid ins't givin!"});
    }else if(!req.params.picid){
      sendJsonResponse(res, 404, {"message": "eventid isn't givin"});
    }else{
      sendJsonResponse(res, 404, {"message": "Some parameters are missed!"});
    }
  }
};

// Deleting an event
module.exports.deleteEvent = function(req, res){
  if(req.params && req.params.userid && req.params.eventid){
    Blog
      .findById(req.params.userid)
      .select('events')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "No user found!"});
        }else{
          let theEvent = user.events.filter(event => event._id == req.params.eventid);
          console.log(theEvent);
          theEvent[0].remove();
          user.save((err, events)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, events);
            }
          })
        }
      })
  }else{
    if(!req.params.userid){
      sendJsonResponse(res, 404, {"message": "userid ins't givin!"});
    }else if(!req.params.picid){
      sendJsonResponse(res, 404, {"message": "eventid isn't givin"});
    }else{
      sendJsonResponse(res, 404, {"message": "Some parameters are missed!"});
    }
  }
};
