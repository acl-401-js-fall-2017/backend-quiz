const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

const pet = require('./routes/pets');
const rave = require('./routes/raves');

app.use(morgan('dev'));
app.use(bodyParser.json());

// add routes
app.use('/api/pets', pet);
app.use('/api/raves', rave);

app.use(errorHandler());

module.exports = app;