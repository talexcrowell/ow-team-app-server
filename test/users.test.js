'use strict';

const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const { TEST_DATABASE_URL} = require('../config');

const User = require('../models/user');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Overwatch Buddy API - Users', function () {
  const username = 'exampleUser';
  const password = 'examplePass';
  const email = 'example@example.com';

  before(function () {
    return mongoose.connect(TEST_DATABASE_URL)
      .then(() => mongoose.connection.db.dropDatabase());
  });

  beforeEach(function () {
    return ;
  });

  afterEach(function () {
    return mongoose.connection.db.dropDatabase();
  });

  after(function () {
    return mongoose.disconnect();
  });
  
  describe('/api/users', function () {
    describe('POST', function () {
      it('Should create a new user', function () {
        const testUser = { username, password, email };

        let res;
        return chai
          .request(app)
          .post('/api/users')
          .send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.keys('id', 'username', 'email');

            expect(res.body.id).to.exist;
            expect(res.body.username).to.equal(testUser.username);
            expect(res.body.email).to.equal(testUser.email);

            return User.findOne({ username });
          })
          .then(user => {
            expect(user).to.exist;
            expect(user.id).to.equal(res.body.id);
            expect(user.email).to.equal(testUser.email);
            return user.validatePassword(password);
          })
          .then(isValid => {
            expect(isValid).to.be.true;
          });
      });

      it('Should reject users with missing username', function () {
        let res;
        const testUser = { password, email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string(`Missing 'username' in request body`);
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });

      it('Should reject users with missing password', function(){
        let res;
        const testUser = { username, email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string(`Missing 'password' in request body`);
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });

      it('Should reject users with non-string username', function() {
        let res;
        const testUser = { username: [username] , password, email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Incorrect field type: expected string');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });

      });

      it('Should reject users with non-string password', function(){
        let res;
        const testUser = { username , password: [password], email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Incorrect field type: expected string');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });

      it('Should reject users with non-trimmed username', function(){
        let res;
        const testUser = { username: '     exampleuser' , password, email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Cannot start or end with whitespace');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });

      it('Should reject users with non-trimmed password', function(){
        let res;
        const testUser = { username , password: '     password', email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Cannot start or end with whitespace');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });

      it('Should reject users with empty username',function(){
        let res;
        const testUser = { username: '' , password, email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Must be at least 1 characters long');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });
      it('Should reject users with password less than 8 characters', function(){
        let res;
        const testUser = { username, password: 'abc', email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Must be at least 8 characters long');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });
      it('Should reject users with password greater than 72 characters', function(){
        let res;
        const testUser = { username, password: 'asdfghjklaasdfghjklaasdfghjklaasdfghjklaasdfghjklaasdfghjklaasdfghjklaasdfghjkla', email };
        return chai.request(app).post('/api/users').send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(422);
            expect(res.body.message).to.include.string('Must be at most 72 characters long');
            return User.find({ username});
          })
          .then(results => {
            expect(results).to.be.an('array').empty;
          });
      });
      it('Should reject users with duplicate username', function(){
        const testUser = { username, password, email };
        const dupeUser = { username, password, email: 'anotheremail@email.com' };
        let res;
        return chai.request(app)
          .post('/api/users')
          .send(testUser)
          .then(_res => {
            res = _res;
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.keys('id', 'username', 'email');
            expect(res.body.id).to.exist;
            expect(res.body.username).to.equal(testUser.username);
            expect(res.body.email).to.equal(testUser.email);
            return chai.request(app).post('/api/users').send(dupeUser);
          })
          .then(results => {
            expect(results).to.have.status(500);
          });
      });
    });
  });
});