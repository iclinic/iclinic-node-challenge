const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(morgan('combined'));

require('./api/routes')(app);
require('./db')(app);

module.exports = app;