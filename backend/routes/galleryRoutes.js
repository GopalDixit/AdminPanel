const express = require('express');
const router = express.Router();
const Gallery = require('../models/gallerySchema'); // Correct model name

// GET all images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new image
router.post('/', async (req, res) => {
  const { imageUrl } = req.body;

  try {
    const newImage = new Gallery({ imageUrl });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an image by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Gallery.findByIdAndDelete(id);
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
