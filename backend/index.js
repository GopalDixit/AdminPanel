const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');
const homeRoutes = require('./routes/homeRoute');
const aboutContent = require('./routes/aboutRoute')
const serviceRoutes = require('./routes/ServiceRoutes');
const galleryRoute = require('./routes/galleryRoutes')
const carouselRoutes = require('./routes/carouselRoute');
const homePageServiceRoutes = require('./routes/homePageService');
const db = require('./database/db');

db();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Use Routes
app.use('/api/home', homeRoutes); 
app.use('/api/contact', contactRoutes);  
app.use('/api/carousel', carouselRoutes);  
app.use('/api/content',aboutContent)
app.use('/api/services', serviceRoutes);
app.use('/api/gallery',galleryRoute)
app.use('/api/carousel', carouselRoutes);
app.use('/api/homepageservices', homePageServiceRoutes);


const PORT = process.env.PORT || 4800;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
