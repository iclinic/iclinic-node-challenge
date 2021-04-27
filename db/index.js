const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const targetDB = config.get('db');
  mongoose.connect(targetDB)
    .then(() => console.info(`Connected to ${targetDB}...`));
}