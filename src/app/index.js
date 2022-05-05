'use strict';

// Express app and routes go in this file

// Use Express
const express = require('express');
const app = express();

// Import Basic auth middleware
// Import Bearer auth middleware

// Make a POST /signup route
app.post('/signup', (req, res, next) => {
  res.status(200).send('Hewwo');
}); 

// Make a POST /signin route 
app.post('/signin', (req, res, next) => {
  console.log('Signin hit. Printing ');
  res.status(200).send('Hewwo');
}); 

function start(PORT) {
  app.listen(PORT, () => (console.log('Listening on port:', PORT)));
} 

module.exports = {
  start,
  app,
}
