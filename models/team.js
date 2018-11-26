'use strict';

const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  name: {type: String, required: true},
  team: mongoose.Schema.Types.Mixed,
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
