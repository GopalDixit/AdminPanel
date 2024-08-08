const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gopaldixit9450:N4tEEMO3UwssJiYP@admincluster.rgu9w.mongodb.net/?retryWrites=true&w=majority&appName=admincluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
