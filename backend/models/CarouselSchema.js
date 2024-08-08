const mongoose = require('mongoose');

const CarouselItemSchema = new mongoose.Schema({
  image: String,
  title: String,
  subtitle: String,
  description: String,
});

module.exports = mongoose.model('CarouselItem', CarouselItemSchema);
