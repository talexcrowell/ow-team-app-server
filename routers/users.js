'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/',(req, res, next) => {
  const {username, password, email} = req.body;
  
  return User.find({username})
    .count()
    .then(count => {
      if (count > 0){
        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Username already exists',
          location: 'username'
        });
      }
      return User.hashPassword(password);
    })
    .then(hash => {
      return User.create({
        username,
        password: hash,
        email
      });
    })
    .then(user => {
      return res.location(`/api/users/${user.id}`).status(201).json(user);
    })
    .catch(err => {
      if (err.reason === 11000) {
        err = new Error('The username already exists');
        err.status = 400;
      }
      next(err);
    });
});

module.exports = router;