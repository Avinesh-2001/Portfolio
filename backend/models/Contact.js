// models/Contact.js
const db = require('../config/db');

const Contact = {
  create: (data, callback) => {
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [data.name, data.email, data.message], (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results);
    });
  },
};

module.exports = Contact;
