const mongoose = require('mongoose');
const config = require('config');

module.exports = async function() {
  const targetDB = config.get('db');
  try {
    const db = await mongoose.connect(targetDB, {useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    throw new Error(error);
  } 
  
}