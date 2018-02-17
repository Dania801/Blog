var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderEventsPage = function(req, res, body){
  console.log(body);
  res.render('events' , {
    title: 'Events',
    userInfo: body.profile,
    events: body.events
  }) ;
}

module.exports.eventsPage = function(req , res){
  var requestOptions, path ;
  path = '/api/user/'+ req.params.userid + '/events';
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  }
  request(requestOptions, (err, response, body) =>{
    if(response.statusCode === 200){
      renderEventsPage(req, res, body);
    }
  });
}
