'use strict';

const express = require('express');

const Hero = require('../models/hero');


const router = express.Router();


//Retrieve list of heroes
router.get('/', (req, res, next) => {
  Hero.find({})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;

