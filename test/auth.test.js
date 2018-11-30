'use strict';

const chai = require('chai');
const mongoose = require('mongoose');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

const app = require('../server');
const User  = require('../models/user');
const { JWT_SECRET, TEST_DATABASE_URL } = require('../config');

const expect = chai.expect;

chai.use(chaiHttp);

describe ('Overwatch Buddy API Auth', function(){
  const username = 'exampleUser';
  const password = 'examplePass';
  const email = 'example@example.com';

  
  before(function () {
    return mongoose.connect(TEST_DATABASE_URL, { useNewUrlParser: true, useCreateIndex : true });
  });

  beforeEach(function () {
    return User.hashPassword(password)
      .then(digest => {
        User.create({
          username,
          password: digest,
          email
        });
      });
  });

  afterEach(function () {
    return Promise.all([
      User.deleteMany()
    ]);
  });

  after(function () {
    return mongoose.disconnect();
  });


  describe('/api/login', function(){
    it('should reject requests with no credentials', function() {
      return chai.request(app).post('/api/login')
        .then((res) => {
          expect(res).to.have.status(400);
        });
    });

    it('should reject request with incorrect usernames', function(){
      return chai.request(app).post('/api/login')
        .send({username: 'wrongUser', password})
        .then((res)=>{
          expect(res).to.have.status(401);
        });
    });

    it('should reject requests with incorrect passwords', function(){
      return chai.request(app).post('/api/login')
        .send({username, password: 'wrongPass'})
        .then((res)=> {
          expect(res).to.have.status(401);
        });
    });

    it('should return a valid auth token', function(){
      return chai.request(app).post('/api/login')
        .send({username, password})
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.authToken).to.be.a('string');
          const payload = jwt.verify(res.body.authToken, JWT_SECRET, {algorithm: ['HS256']});
          expect(payload.user).to.include.keys(['username','email', 'id']);
          expect(payload.user.username).to.equal(username);
          expect(payload.user.email).to.equal(email);
        });
    });
  });
});

