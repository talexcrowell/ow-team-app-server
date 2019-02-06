'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/',(req, res, next) => {
  const {username, password, email} = req.body;
  const requiredFields = ['username', 'password'];
  const missingField = requiredFields.find(field => !(field in req.body));
  
  if (missingField){
    const err = new Error(`Missing '${missingField}' in request body`);
    err.status = 422;
    return next(err);
  }

  const stringFields = ['username', 'password', 'email'];
  const nonStringField = stringFields.find(field =>
    field in req.body && typeof req.body[field] !== 'string');

  if(nonStringField){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Incorrect field type: expected string',
      location: missingField
    });
  }

  const trimmedFields = ['username', 'password'];
  const nonTrimmedField = trimmedFields.find(field => 
    req.body[field].trim() !== req.body[field]
  );

  if(nonTrimmedField){
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Cannot start or end with whitespace',
      location: nonTrimmedField
    });  
  }

  const sizedFields = {
    username: {
      min: 1
    },
    password:{
      min:8,
      max:72
    }
  };

  const tooSmallField = Object.keys(sizedFields).find(field => 
    'min' in sizedFields[field] && req.body[field].trim().length < sizedFields[field].min
  );

  const tooLargeField = Object.keys(sizedFields).find(field =>
    'max' in sizedFields[field] && req.body[field].trim().length > sizedFields[field].max
  );

  if(tooSmallField || tooLargeField){
    return res.status(422).json({
      code: 422,
      reason:'ValidationError',
      message: tooSmallField ? `must be at least ${sizedFields[tooSmallField].min} characters long` : `must be at most ${sizedFields[tooLargeField].max} characters long`,
      location: tooSmallField || tooLargeField
    });
  }
  
  return User.find({username})
    .count()
    .then(count => {
      if (count > 0){
        return Promise.reject({
          code: 400,
          reason: 'ValidationError',
          message: 'Username already exists',
          location: 'Username'
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