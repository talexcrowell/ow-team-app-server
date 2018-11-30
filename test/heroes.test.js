'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const express = require('express');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');

const app = require('../server');
const Hero = require('../models/hero');
const User = require('../models/user');

const {heroes} = require('../seed-data');

const { TEST_DATABASE_URL } = require('../config');
const { JWT_SECRET } = require('../config');

chai.use(chaiHttp);
const expect = chai.expect;
const sandbox = sinon.createSandbox();

describe('Overwatch Buddy API - Heroes', function () {
  let users = [{
    _id:'000000000000000000000001',
    username: 'example',
    email: 'example@example.com',
    password: '$2a$10$XaJlI7ja3uNVmJzilSdZM.lBrJrJTin8sP6EgTcE/9y46KTIpOfEy'
  }];

  let user;
  let token;

  before(function () {
    return mongoose.connect(TEST_DATABASE_URL, { useNewUrlParser: true, useCreateIndex : true })
      .then(() => Promise.all([
        Hero.deleteMany(),
        User.deleteMany()
      ]));
  });

  beforeEach(function () {
    return Promise.all([
      User.insertMany(users),
      Hero.insertMany(heroes)
    ])
      .then(([users]) => {
        user = users[0];
        token = jwt.sign({ user }, JWT_SECRET, { subject: user.username });
      });
  });

  afterEach(function () {
    sandbox.restore();
    return Promise.all([
      Hero.deleteMany(),
      User.deleteMany()
    ]);
  });

  after(function () {
    return mongoose.disconnect();
  });

  describe('GET /api/heroes', function () {

    it('should return the correct number of heroes', function () {
      return Promise.all([
        Hero.find({}),
        chai.request(app).get('/api/heroes').set('Authorization', `Bearer ${token}`)
      ])
        .then(([data, res]) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(data.length);
        });
    });

    it('should return a list sorted asc with the correct right fields', function () {
      return Promise.all([
        Hero.find({}).sort({ heroName: 'asc' }),
        chai.request(app).get('/api/heroes').set('Authorization', `Bearer ${token}`)
      ])
        .then(([data, res]) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(data.length);
          res.body.forEach(function (item, i) {
            expect(item).to.be.a('object');
            expect(item).to.include.all.keys('id', 'heroName', 'damage', 'dps', 'health', 'hps', 'abilities', 'image','role', 'ultimate');
            expect(item.id).to.equal(data[i].id);
            expect(item.heroName).to.equal(data[i].heroName);
            expect(item.damage).to.equal(data[i].damage);
            expect(item.dps).to.equal(data[i].dps);
            expect(item.health).to.equal(data[i].health);
            expect(item.hps).to.equal(data[i].hps);
            expect(item.abilities).to.deep.equal(data[i].abilities);
            expect(item.image).to.equal(data[i].image);
            expect(item.role).to.equal(data[i].role);
            expect(item.ultimate).to.deep.equal(data[i].ultimate);
          });
        });
    });

  });
});