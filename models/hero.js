'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  heroName: String,
  role: String,
  damage: Number,
  dps: Number,
  health: Number,
  hps: Number,
  abilities: [String],
  ultimate: Object
});

schema.set('toJSON', {
  virtuals: true,
  transform: (doc, res) => {
    delete res._id;
    delete res.__v;
  }
});

module.exports = mongoose.model('Hero', schema);