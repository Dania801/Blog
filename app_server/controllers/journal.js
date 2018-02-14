var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderJournalPage = function(req, res, body){
  var recent = getRecentArticle(body);
  console.log('Articles List !');
  console.log(body);
  res.render('journal' , {
    title: 'Journal',
    userInfo: {
      firstName: 'Dania',
      lastName: 'Refaie',
      profilePic: '/images/Home/pictures/album2.jpg',
      email: 'example1@gmail.com',
      password: '123'
    },
    recentArticles: recent ,
    articles: body
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
  articlesList.push(articles[articles.length-1]);
  articlesList.push(articles[articles.length-2]);
  articlesList.push(articles[articles.length-3]);
  return articlesList;
}
