var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderAlbumPage = function(req, res, body){
  console.log(body);
  console.log(getFavourite(body.album));
  let favourite = getFavourite(body.album);
  res.render('album' , {
    title: 'Photo Album',
    userInfo: body.profile,
    favouriteImages: favourite,
    images: body.album
  }) ;
}

module.exports.albumPage = function(req , res){
  var requestOptions, path ;
  path = '/api/user/'+ req.params.userid + '/album';
  requestOptions = {
    url: apiOptions.server + path ,
    method: 'GET',
    json: {},
    qs: {}
  };
  request(requestOptions, (err, response, body) =>{
    if(response.statusCode === 200){
      renderAlbumPage(req, res, body);
    }
  })
}

var getFavourite = function(album){
  var favourite = [];
  if(album & album.length){
    var counter = 0 ;
    for(var i =0 ; i < album.length ; i++){
      if(album.favourite && counter < 3){
        favourite.push(album[i]);
        counter++ ;
      }
      if(counter >= 3){
        break;
      }
    }
  }
  return favourite;
}
