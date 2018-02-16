var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderJournalPage = function(req, res, body){
  var recent = getRecentArticle(body.articles);
  res.render('journal' , {
    title: 'Journal',
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
      console.log(body);
      renderJournalPage(req, res, body);
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
