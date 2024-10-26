// server.js
const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./Routes/contactRoutes.js');

const app = express();
const PORT = process.env.PORT || 5002;

const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/contacts', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
