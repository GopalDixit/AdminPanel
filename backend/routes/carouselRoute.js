const express = require('express');
const router = express.Router();
const CarouselItem = require('../models/CarouselSchema');

// Get all carousel items
router.get('/', async (req, res) => {
  try {
    const items = await CarouselItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new carousel item
router.post('/', async (req, res) => {
  const newItem = new CarouselItem(req.body);
  try {
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

// DELETE a specific carousel item by ID
router.delete('/:id', async (req, res) => {
  try {
    const item = await CarouselItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a specific carousel item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await CarouselItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
