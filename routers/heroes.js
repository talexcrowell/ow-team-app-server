'use strict';

const express = require('express');
const passport= require('passport');

const Hero = require('../models/hero');

const router = express.Router();

router.use('/', passport.authenticate('jwt', {session:false, failWithError: true}));

//Retrieve list of heroes
router.get('/', (req, res, next) => {
  Hero.find({}).sort({ heroName: 'asc'})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;

