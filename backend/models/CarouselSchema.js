const mongoose = require('mongoose');

const CarouselItemSchema = new mongoose.Schema({
  image: String,
  title: String,
  subtitle: String,

});

module.exports = mongoose.model('CarouselItem', CarouselItemSchema);
