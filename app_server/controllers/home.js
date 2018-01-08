module.exports.index = function(req , res){
  res.render('home' , {
    title: 'Home',
    userInfo: {
      firstName: 'Dania',
      lastName: 'Refaie',
      profilePic: '/images/Home/pictures/album2.jpg',
      email: 'example1@gmail.com',
      password: '123'
    },
    articles: {
      recentArticle: {
        title: "Exploring Norway's Coast",
        image: "/images/Home/pictures/album9.jpg",
        lines: "Integer vel gravida neque. Nulla gravida tortor sit amet ultricies iaculis. Proin viserra libero Ina magna condimentum iaculis. Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 21,
        month: 'October',
        year: 2016,
        hour: "07:00",
        period: 'pm'
      },
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
