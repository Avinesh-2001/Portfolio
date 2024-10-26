const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.js');
const { sendEmail } = require('../emailService.js'); // import sendEmail

// POST route to create a new contact
router.post('/', (req, res) => {
  const contactData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  Contact.create(contactData, (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Error saving contact' });
    }

    // Send confirmation email
    sendEmail(contactData.email, contactData.name)
      .then(() => {
        res.status(201).json({ message: 'Contact saved successfully', id: results.insertId });
      })
      .catch((emailError) => {
        console.error('Error sending email: ', emailError);
        res.status(201).json({ message: 'Contact saved, but there was an error sending the email.', id: results.insertId });
      });
  });
});

module.exports = router;
