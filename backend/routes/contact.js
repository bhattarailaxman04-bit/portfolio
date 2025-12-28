const express = require('express');
const router = express.Router();
const Message = require('../models/Message'); // Ensure this file is named Message.js in your models folder

// @route   POST api/contact
// @desc    Save message ONLY to MongoDB Atlas
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please fill all fields' });
  }

  try {
    // This is the part that connects to your MongoDB Atlas
    const newMessage = new Message({ name, email, message });
    
    // Save to the cloud
    await newMessage.save();

    res.status(200).json({ msg: 'Message saved to MongoDB Atlas successfully!' });
  } catch (err) {
    console.error("Database Error:", err.message);
    res.status(500).json({ msg: 'Server error: Could not save to database.' });
  }
});

module.exports = router;