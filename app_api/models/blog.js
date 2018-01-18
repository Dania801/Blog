var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true},
  profilePic: {type: String}
});

var articleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  createdOn: {type: Date, required: true, default: new Date()},
  image: {type: String},
  tag: {type: String, required: true},
  text: {type: String, required: true}
});

var albumSchema = new mongoose.Schema({
  image: {type: String, required: true},
  caption: {type: String}
});

var eventSchema = new mongoose.Schema({
  title: {type: String, required: true},
  beginDate: {type: Date, required: true},
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
  articles: [articleSchema],
  album: [albumSchema],
  events: [eventSchema],
  socialMedia: socialSchema
});

module.exports = mongoose.model('Blog', userSchema, 'blog');
