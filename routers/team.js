'use strict';

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Team = require('../models/team');

const router = express.Router();

router.use('/', passport.authenticate('jwt', {session:false, failWithError: true}));


router.get('/', (req, res, next)=> {
  const userId = req.user.id;

  Team.find({userId})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }

  Team.findOne({_id: id, userId})
    .then(result => {
      if(result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {

  const name = req.body.currentTeam.name;
  const team= req.body.currentTeam.team;
  const userId = req.user.id;

  const newTeam = { name, team, userId };


  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }
  Team.create(newTeam)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('Team name already exists');
        err.status = 400;
      }
      next(err);
    });
});


module.exports = router;
