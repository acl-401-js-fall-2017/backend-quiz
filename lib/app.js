const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

const pets = require('../lib/routes/pets');
const raves = require('../lib/routes/raves');

app.use(morgan('dev'));
app.use(bodyParser.json());

// add routes
app.use('/api/pets', pets);
app.use('/api/raves', raves);

app.use(errorHandler());

module.exports = app;