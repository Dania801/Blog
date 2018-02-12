var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderHomePage = function(req, res, body){
  var recentArticle = getRecentArticle(body.articles);
  var tags = getTags(body.articles);
  var firstColumn = getColumn(body.articles, tags[0]);
  var secondColumn = getColumn(body.articles, tags[1]);
  var thirdColumn = getColumn(body.articles, tags[2]);
  console.log(getEvents(body.events));
  res.render('home' , {
    title: 'Home',
    userInfo: body.profile,
    articles: {
      recentArticle: getRecentArticle(body.articles),
      columns:[
        {
          tag: tags[0],
          articles: firstColumn
        },
        {
          tag: tags[1],
          articles: secondColumn
        },
        {
          tag: tags[2],
          articles: thirdColumn
        }
      ]
    },
    album:getAlbumHighlight(body.album),
    events: getEvents(body.events)
  }) ;
}

module.exports.homePage = function(req , res){
  console.log(req.params);
  var requestOptions, path;
  path = '/api/user/' + req.params.userid;
  requestOptions = {
    url: apiOptions.server + path ,
    method: 'GET',
    json: {},
    qs: {}
  };

  request(requestOptions, (err, response, body)=>{
    console.log(body)
    renderHomePage(req, res, body);
  });

}

var getEvents = function(events){
  let eventsArr = [];
  let eventsSize = events.length;
  let index = eventsSize < 6 ? eventsSize : 6;
  for(var i = 0 ; i < index ; i++){
    eventsArr.push(events[i]);
  }
  return eventsArr;
}

var getTags = function(articles){
  let flags = [];
  for(let i= 0 ; i < articles.length ; i++){
    if(!flags.includes(articles[i].tag) && (flags.length < 3))
      flags.push(articles[i].tag);
  }
  return flags;
}

var getColumn = function(articles, tag){
  let column = [];
  for(var i = 0 ; i < articles.length ; i++){
    if(articles[i].tag === tag && column.length < 2){
      column.push(articles[i]);
    }
  }
  return column;
}

var getAlbumHighlight = function(album){
  var pics = [];
  var albumSize = album.length ;
  var index = albumSize < 6 ? albumSize : 6 ;
  for(var i = 0; i < index ; i++){
    pics[i] = album[i];
  }
  return pics;
}

var getRecentArticle= function(articles){
  return articles[articles.length -1];
}
