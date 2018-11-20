'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('./config');

const Hero = require('./models/hero');

const { heroes } = require('./seed-data');

console.log(`Connecting to mongodb at ${DATABASE_URL}`);
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex : true })
  .then(() => {
    console.info('Deleting Data...');
    return Hero.deleteMany();
  })
  .then(() => {
    console.info('Seeding Database...');
    return Hero.insertMany(heroes);
  })
  .then(results => {
    console.log('Inserted', results);
    console.info('Disconnecting...');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });