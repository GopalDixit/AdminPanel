const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    feature1: String,
    feature2: String,
    feature3: String,
    image1: String,
    image2: String
});

module.exports = mongoose.model('Content', contentSchema);