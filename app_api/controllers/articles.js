var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.getArticlesList = function(req, res){
  Blog
    .find({"_id": req.params.userid}, (err, user)=>{
      var articles = user[0].articles;
      console.log(articles);
      if(err){
        sendJsonResponse(res, 404, err);
      }else{
        sendJsonResponse(res, 200, articles);
      }
    })
};

module.exports.getArticle = function(req, res){
  if(req.params && req.params.userid && req.params.articleid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let articles = user[0].articles;/*.filter(article => article._id == req.params.articleid);*/
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!articles){
          sendJsonResponse(res, 404, {"message": "No articles found!"});
        }else{
          sendJsonResponse(res, 200, articles);
        }
      });
  }else{
    if(!req.params.userid){
      sendJsonResponse(res, 404, {"message": "userid isn't given!"});
    }
    if(!req.params.articleid){
      sendJsonResponse(res, 404, {"message": "articleid isn't given"});
    }
  }
};

module.exports.createArticle = function(req, res){

};

module.exports.updateArticle = function(req, res){

};

module.exports.deleteArticle = function(req, res){

};
