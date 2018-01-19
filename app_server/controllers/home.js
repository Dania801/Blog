var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderHomePage = function(req, res, body){
  var recentArticle = getRecentArticle(body.articles);

  res.render('home' , {
    title: 'Home',
    userInfo: body.profile,
    articles: {
      recentArticle: getRecentArticle(body.articles),
      columns:[
        {
          tag: "PERSONAL",
          articles: [
            {
              title: "Exploring Norway's Coast",
              image: "/images/Home/pictures/advent5.jpg",
              lines: "Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
              day: 21,
              month: 'October',
              year: 2016,
              hour: "07:00",
              period: 'pm'
            },{
              title: "Exploring Norway's Coast",
              image: "/images/Home/pictures/advent9.jpg",
              lines: "Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
              day: 21,
              month: 'October',
              year: 2016,
              hour: "07:00",
              period: 'pm'
            }
          ]
        },
        {
          tag: "POLITOCAL",
          articles: [
            {
              title: "Exploring Norway's Coast",
              image: "/images/Home/pictures/album10.jpg",
              lines: "Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
              day: 21,
              month: 'October',
              year: 2016,
              hour: "07:00",
              period: 'pm'
            },{
              title: "Exploring Norway's Coast",
              image: "/images/Home/pictures/album11.jpg",
              lines: "Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
              day: 21,
              month: 'October',
              year: 2016,
              hour: "07:00",
              period: 'pm'
            }
          ]
        },
        {
          tag: "TECHNOLOGY",
          articles: [
            {
              title: "Exploring Norway's Coast",
              image: "/images/Home/pictures/album12.jpg",
              lines: "Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
              day: 21,
              month: 'October',
              year: 2016,
              hour: "07:00",
              period: 'pm'
            },{
              title: "Exploring Norway's Coast",
              image: "/images/Home/pictures/album13.jpg",
              lines: "Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
              day: 21,
              month: 'October',
              year: 2016,
              hour: "07:00",
              period: 'pm'
            }
          ]
        }
      ]
    },
    album:[{
      caption: "Beautiful day!",
      image: "/images/Home/pictures/art4.jpg"
    },{
      caption: "Beautiful day!",
      image: "/images/Home/pictures/girl5.jpg"
    },{
      caption: "Beautiful day!",
      image: "/images/Home/pictures/girl4.jpg"
    },{
      caption: "Beautiful day!",
      image: "/images/Home/pictures/food3.jpg"
    },{
      caption: "Beautiful day!",
      image: "/images/Home/pictures/p1.jpg"
    },{
      caption: "Beautiful day!",
      image: "/images/Home/pictures/coffee1.jpg"
    }],
    events: [{
      title: "Review mockups",
      day: 12,
      month: "Dec",
      year: "2017"
    },{
      title: "Team meeting",
      day: 13,
      month: "Nov",
      year: "2017"
    },{
      title: "Purchase ticket",
      day: 20,
      month: "Dec",
      year: "2017"
    },{
      title: "Purchase ticket",
      day: 12,
      month: "Dec",
      year: "2017"
    },{
      title: "Team meeting",
      day: 12,
      month: "Dec",
      year: "2017"
    },{
      title: "Review mockups",
      day: 12,
      month: "Dec",
      year: "2017"
    }]
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
    renderHomePage(req, res, body);
  });

}

var getTags = function(articles){
  let flags = [];
  for(let i= 0 ; i < article.length ; i++){
    if(!flags.includes(articles[i].tag))
      flags.push(articles[i].tag);
  }
  return flags;
}

var getColumns = function(articles, tags){
  let firstColumn = [];
  for(var i= 0 ; i < articles.length ; i++){
    if(tags.includes(articles[i].flag)){
      
      flag.splice(i, 1);
    }
  }
}

var getRecentArticle= function(articles){
  return articles[articles.length -1];
}
