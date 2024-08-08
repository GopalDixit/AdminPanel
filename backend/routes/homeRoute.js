const express = require('express');
const router = express.Router();
const HomePageContent = require('../models/homePageSchema');

// Get home page content
router.get('/', async (req, res) => {
  try {
    const content = await HomePageContent.findOne();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update home page content
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    let content = await HomePageContent.findOne();
    if (content) {
      content.title = title;
      content.description = description;
      content = await content.save();
    } else {
      content = new HomePageContent({ title, description });
      await content.save();
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
