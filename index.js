'use strict'
require('babel-register');

var app = require('./src/app').app; 
const PORT=process.env.PORT||8000;

app.listen(PORT, function () {
  console.log('PORT Listening:',PORT);
})
