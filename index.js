const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const listingRoutes = require('./routes/listingRoutes');
const cors = require('cors');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/listings', listingRoutes);

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Add this to test server alive easily
app.get('/', (req, res) => {
  res.send('Server is running!');
});

sequelize.sync()
  .then(() => {
    console.log('Sequelize sync successful');
    app.listen(80, () => {
      console.log('Server running on http://0.0.0.0:80');
    });
  })
  .catch(err => {
    console.error('Sequelize sync error:', err);
  });
