var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

// Getting list of articles
module.exports.getArticlesList = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let articles = user[0].articles ;
        let profile = user[0].profile ;
        let info = {profile, articles} ;
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!articles){
          sendJsonResponse(res, 404, {"message": "Sorry, No articles found!"});
        }else{
          sendJsonResponse(res, 200, info);
        }
      });
  }else{
    sendJsonResponse(res, 404, {"message": "No userid is givin"});
  }
}

// Getting a specific article
module.exports.getArticle = function(req, res){
  if(req.params && req.params.userid && req.params.articleid){
    Blog
      .find({"_id": req.params.userid}, (err, user) =>{
        let article = user[0].articles.filter(article => article._id == req.params.articleid);
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!article){
          sendJsonResponse(res, 404, {"message": "No events found"});
        }else{
          sendJsonResponse(res, 200, article[0]);
        }
      });
  }else{
      if(!req.params.userid){
        sendJsonResponse(res, 404, {"message": "userid isn't givin!"});
      }else if(!req.params.articleid){
        sendJsonResponse(res, 404, {"message": "articleid isn't givin!"});
      }else{
        sendJsonResponse(res, 404, {"message": "Missed parameters!"});
      }
  }
}

// Creating an article
module.exports.createArticle = function(req, res){
  if(req.params && req.params.userid){
    Blog
      .update({"_id": req.params.userid}, {$push: {'articles' : {
        title: req.body.title,
        image: req.body.image,
        tag: req.body.tag,
        text: req.body.text
      }}},(err, article)=> {
        if(err){
          sendJsonResponse(res, 404, err);
        }else{
          sendJsonResponse(res, 201, article);
        }
      })
  }else{
    sendJsonResponse(res, 404, {"message": "No userid is givin"});
  }
}

//Updating an article
module.exports.updateArticle = function(req, res){
  if(req.params && req.params.userid && req.params.articleid){
    Blog
      .findById(req.params.userid)
      .select('articles')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "No user found!"});
        }else{
          let theArticle = user.articles.filter(article => article._id == req.params.articleid);
          theArticle[0].title = req.body.title? req.body.title: theArticle[0].title;
          theArticle[0].image = req.body.image? req.body.image: theArticle[0].image;
          theArticle[0].tag = req.body.tag? req.body.tag: theArticle[0].tag;
          theArticle[0].text = req.body.text? req.body.text: theArticle[0].text;

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
      sendJsonResponse(res, 404, {"message": "articleid isn't givin"});
    }else{
      sendJsonResponse(res, 404, {"message": "Some parameters are missed!"});
    }
  }
}

//Deleting an article
module.exports.deleteArticle = function(req, res){
  if(req.params && req.params.userid && req.params.articleid){
    Blog
      .findById(req.params.userid)
      .select('articles')
      .exec((err, user)=>{
        if(err){
          sendJsonResponse(res, 404, err);
        }else if(!user){
          sendJsonResponse(res, 404, {"message": "No user found!"});
        }else{
          let theArticle = user.articles.filter(article => article._id == req.params.articleid);
          theArticle[0].remove();
          user.save((err, articles)=>{
            if(err){
              sendJsonResponse(res, 404, err);
            }else{
              sendJsonResponse(res, 200, articles);
            }
          })
        }
      })
  }else{
    if(!req.params.userid){
      sendJsonResponse(res, 404, {"message": "userid ins't givin!"});
    }else if(!req.params.articleid){
      sendJsonResponse(res, 404, {"message": "articleid isn't givin"});
    }else{
      sendJsonResponse(res, 404, {"message": "Some parameters are missed!"});
    }
  }
}
