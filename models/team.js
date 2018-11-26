'use strict';

const mongoose = require('mongoose');

// const abilitiesSchema = new mongoose.Schema({
//   abilityName: String,
//   desc: String
// });

const teamSchema = new mongoose.Schema({
  heroName: String,
  role: String,
  damage: Number,
  dps: Number,
  health: Number,
  hps: Number,
  abilities: [String],
  ultimate: Object
});



const schema = new mongoose.Schema({
  name: {type: String, required: true},
  team: [teamSchema],
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});


schema.set('toJSON', {
  virtuals: true,
  transform: (doc, res) => {
    delete res._id;
    delete res.__v;
  }
});

module.exports = mongoose.model('Team', schema);
