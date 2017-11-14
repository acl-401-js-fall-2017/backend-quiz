const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./utils/error-handler');

// ## middleware ###
app.use(express.json());
app.use(morgan('dev'));

// ### required routes ###
const pets = require('../lib/routes/pets');
const raves = require('../lib/routes/raves');


// ### used routes ###
app.use('/api/pets', pets);
app.use('/api/raves', raves);

// ### error catcher ###
app.use(errorHandler());

module.exports = app;