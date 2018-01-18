var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderEventsPage = function(req, res){
  res.render('events' , {
    title: 'Events',
    userInfo: {
      firstName: 'Dania',
      lastName: 'Refaie',
      profilePic: '/images/Home/pictures/album2.jpg',
      email: 'example1@gmail.com',
      password: '123'
    },events: [
      {
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      },{
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      },{
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      },{
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      },{
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      },{
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      },{
        title: 'Review mockups',
        fromDay: 12,
        fromMonth: 'Dec',
        fromYear: '2017',
        toDay: 15,
        toMonth: 'Jan',
        toYear: '2018'
      }
    ]
  }) ;
}

module.exports.eventsPage = function(req , res){
  renderEventsPage(req, res);
}
