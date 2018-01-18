var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderAlbumPage = function(req, res){
  res.render('album' , {
    title: 'Photo Album',
    userInfo: {
      firstName: 'Dania',
      lastName: 'Refaie',
      profilePic: '/images/Home/pictures/album2.jpg',
      email: 'example1@gmail.com',
      password: '123'
    },
    favouriteImages: [
      {
        image: "/images/Album/pictures/coffee1.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/coffee2.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/coffee3.jpg",
        caption: "Beautiful day!"
      }
    ],
    images: [
      {
        image: "/images/Album/pictures/art1.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/art4.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/girl5.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/girl4.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/food3.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/p1.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/p2.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/album8.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/food4.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/album13.jpg",
        caption: "Beautiful day!"
      },{
        image: "/images/Album/pictures/food2.jpg",
        caption: "Beautiful day!"
      }
    ]
  }) ;
}

module.exports.albumPage = function(req , res){
  renderAlbumPage(req, res);
}
