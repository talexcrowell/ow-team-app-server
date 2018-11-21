'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const schema = new mongoose.Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

schema.set('toJSON', {
  virtuals: true,
  transform: (doc, res) => {
    delete res._id;
    delete res.__v;
    delete res.password;
  }
});

schema.methods.validatePassword = (password) => {
  return bcrypt.compare(password, this.password);
};

schema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', schema);