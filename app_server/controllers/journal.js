var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderJournalPage = function(req, res, body){
  var recent = getRecentArticle(body.articles);
  res.render('journal' , {
    title: 'Journal',
    userid: req.params.userid,
    userInfo: body.profile,
    recentArticles: recent ,
    articles: body.articles
  });
}

module.exports.journalPage = function(req , res){
  var requestOptions, path;
  path = '/api/user/'+ req.params.userid + '/articles';
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };
  request(requestOptions, (err, response, body)=>{
      if(response.statusCode === 200){
        renderJournalPage(req, res, body);
      }
  })
}

var getRecentArticle = function(articles){
  var articlesList = [];
  if(articles && articles.length){
    articlesList.push(articles[articles.length-1]);
    articlesList.push(articles[articles.length-2]);
    articlesList.push(articles[articles.length-3]);
  }
  return articlesList;
}

module.exports.addArticle = function(req, res){
  var requestOptions, path, article;
  path= '/api/user/'+ req.params.userid + '/articles';
  article= {
    title: req.body.title,
    image: req.body.image,
    tag: req.body.tag,
    text: req.body.text
  };
  console.log(article);
  requestOptions= {
    url: apiOptions.server + path,
    method: 'POST',
    json: article,
    qs: {}
  };
  request(requestOptions, (err, response, body)=>{
    if(response.statusCode === 201){
      console.log('New article is added to the journal!');
      res.redirect('/home/'+req.params.userid+'/journal');
    }else{
      console.log('Unable to add new article to the journal!');
    }
  })
}
