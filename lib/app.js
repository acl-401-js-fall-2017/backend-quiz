const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

const petRouter = require('./routes/pets');
const raveRouter = require('./routes/raves');


app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/pets', petRouter);
app.use('/api/raves', raveRouter);

app.use(errorHandler());

module.exports = app;