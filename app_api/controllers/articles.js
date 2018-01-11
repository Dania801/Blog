var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.getAriclesList = function(req, res){
  // Getting a list of events for specific user
    if(req.params && req.params.userid){
      Blog
        .find({"_id": req.params.userid}, (err, user) =>{
          let articles = user[0].events ;
          if(err){
            sendJsonResponse(res, 404, err);
          }else{
            sendJsonResponse(res, 200, articles);
          }
        });
    };
};

module.exports.getArticle = function(req, res){

};

module.exports.createArticle = function(req, res){

};

module.exports.updateArticle = function(req, res){

};

module.exports.deleteArticle = function(req, res){

};
