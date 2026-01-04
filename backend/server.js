const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json());


// Define Routes
// This line tells the app to use your contact.js route file
app.use('/api/contact', require('./routes/contact')); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));