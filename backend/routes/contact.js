const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/contact', async (req, res) => {
  try {
    const contact = await Contact.findOne().sort({ updatedAt: -1 });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    let contact = await Contact.findOne();
    if (contact) {
      contact = await Contact.findByIdAndUpdate(contact._id, { name, email, subject, message, updatedAt: new Date() }, { new: true });
    } else {
      contact = new Contact({ name, email, subject, message });
      await contact.save();
    }
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
