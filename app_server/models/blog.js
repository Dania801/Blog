var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  password: {type: String},
  profilePic: {type: String}
});

var articleSchema = new mongoose.Schema({
  title: {type: String},
  createdOn: {type: Date},
  image: {type: String},
  tag: {type: String},
  text: {type: String}
});

var albumSchema = new mongoose.Schema({
  image: {type: String},
  caption: {type: String}
});

var eventSchema = new mongoose.Schema({
  title: {type: String},
  beginDate: {type: Date},
  endDate: {type: Date},
  notes: {type: String}
});

var socialSchema = new mongoose.Schema({
  facebook: {type: String},
  twitter: {type: String},
  instagram: {type: String},
  github: {type: String},
  reddit: {type: String}
});

var userSchema = new mongoose.Schema({
  profile: profileSchema,
  artiles: [articleSchema],
  album: [albumSchema],
  events: [eventSchema],
  socialMedia: socialSchema
});

mongoose.model('blog',  userSchema);
