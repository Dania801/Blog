module.exports.index = function(req , res){
  res.render('journal' , {
    title: 'Journal',
    userInfo: {
      firstName: 'Dania',
      lastName: 'Refaie',
      profilePic: '/images/Home/pictures/album2.jpg',
      email: 'example1@gmail.com',
      password: '123'
    },
    recentArticles: [
      {
        tag: "Journal",
        image: "/images/Journal/pictures/art1.jpg",
        title: "Some Title",
        lines: "Integer vel gravida neque. Nulla gravida tortor sit amet ultricies iaculis. Proin viserra libero Ina magna condimentum iaculis. Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      },{
        tag: "Journal",
        image: "/images/Journal/pictures/art2.jpg",
        title: "Some Title",
        lines: "Integer vel gravida neque. Nulla gravida tortor sit amet ultricies iaculis. Proin viserra libero Ina magna condimentum iaculis. Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      },{
        tag: "Journal",
        image: "/images/Journal/pictures/art3.jpg",
        title: "Some Title",
        lines: "Integer vel gravida neque. Nulla gravida tortor sit amet ultricies iaculis. Proin viserra libero Ina magna condimentum iaculis. Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      }
    ],
    articles: [
      {
        tag: "Technology",
        image: "/images/Journal/pictures/art4.jpg",
        title: "Some Title",
        lines: "Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      },{
        tag: "Social",
        image: "/images/Journal/pictures/album7.jpg",
        title: "Some Title",
        lines: "Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      },{
        tag: "Social",
        image: "/images/Journal/pictures/album12.jpg",
        title: "Some Title",
        lines: "Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      },{
        tag: "Personal",
        image: "/images/Journal/pictures/advent8.jpg",
        title: "Some Title",
        lines: "Donec eu estadio libero. Pellentesque sed erat eu justo consequat tincidunt nec in purus. Aenean veniis leonardo et magna piacerat sodales. Quisque fermentum imperdiet odio vel feugia taecenas laoreet mauris tempor dolor porta ullamcorper. Aenean maximus tortor non turpis placerat auctor....",
        day: 12,
        month: "October",
        year: "2016",
        hour: "07:00",
        period: "pm"
      }
    ]
  }) ;
}
