const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');
const pets = require('./routes/pets');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/pets', pets);


app.use(errorHandler());

module.exports = app;