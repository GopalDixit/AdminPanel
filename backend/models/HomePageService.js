const mongoose = require('mongoose');

const HomePageServiceSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
});

module.exports = mongoose.model('HomePageService', HomePageServiceSchema);
