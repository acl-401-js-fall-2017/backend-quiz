const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(bodyParser.json());

const routes = require('./routes/routes');
app.use('/api/routes', routes);

app.use(errorHandler());

module.exports = app;