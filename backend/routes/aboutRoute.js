const express = require('express');
const router = express.Router();
const Content = require('../models/AboutSchema');

// Get content
router.get('/content', async (req, res) => {
    try {
        const content = await Content.findOne();
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }
        res.json(content);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Post content
router.post('/content', async (req, res) => {
    const { title, subtitle, description, feature1, feature2, feature3, image1, image2 } = req.body;

    if (!title || !subtitle || !description) {
        return res.status(400).json({ message: 'Title, subtitle, and description are required' });
    }

    try {
        // Check if content already exists
        let content = await Content.findOne();
        if (content) {
            // Update existing content
            content.title = title;
            content.subtitle = subtitle;
            content.description = description;
            content.feature1 = feature1;
            content.feature2 = feature2;
            content.feature3 = feature3;
            content.image1 = image1;
            content.image2 = image2;

            await content.save();
        } else {
            // Create new content
            content = new Content({ title, subtitle, description, feature1, feature2, feature3, image1, image2 });
            await content.save();
        }

        res.status(201).json(content);
    } catch (error) {
        console.error('Error saving content:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
