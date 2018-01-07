module.exports.index = function(req , res){
  res.render('welcome' , {
    pageInfo: {
      title: 'Welcome to Blogate',
      desc: 'START YOUR OWN STUNNING BLOG',
      journalTitle: 'Go ahead, Make it last!',
      journalDesc: 'Blogate is so easy to use and you can organize your daily journal in a very neat way',
      eventsTitle: 'Plan your life and organize your events',
      albumTitle: 'Create your own photo album',
      mediaTitle: 'Have an access to your social media networks',
      registerTitle: 'Have an access to your social media networks '
    },
    events: [{
      day: 12,
      month: 'Dec',
      year: 2017,
      title: 'Review mockups',
      image: '/images/Welcome/pictures/pic8.jpg',
      position: 'bottom'
    },{
      day: 20,
      month: 'Oct',
      year: 2017,
      title: 'Team meeting',
      image: '/images/Welcome/pictures/pic2.jpg',
      position: 'center left'
    },{
      day: 15,
      month: 'Jan',
      year: '2018',
      title: 'Purchase ticket',
      image: '/images/Welcome/pictures/pic5.jpg',
      position: 'bottom right'
    }],
    album: [
      '/images/Welcome/pictures/album1.jpg',
      '/images/Welcome/pictures/album2.jpg',
      '/images/Welcome/pictures/album3.jpg',
      '/images/Welcome/pictures/album4.jpg',
      '/images/Welcome/pictures/album5.jpg',
      '/images/Welcome/pictures/album6.jpg'
    ]
  }) ;
}
