const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
