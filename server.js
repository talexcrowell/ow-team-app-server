'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');


const { PORT, CLIENT_ORIGIN, DATABASE_URL } = require('./config');

const heroesRouter = require('./routers/heroes');
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');

passport.use(localStrategy);
passport.use(jwtStrategy);

const app = express();

app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
  skip: (req, res) => process.env.NODE_ENV === 'test'
}));

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(express.static('public'));
app.use(express.json());


app.use('/api/heroes', heroesRouter);
app.use('/api/users', usersRouter);
app.use('/api', authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, {message: err.message});
    res.status(err.status).json(errBody);
  } else{
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

if (require.main === module){
  mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useCreateIndex: true})
    .then(instance => {
      const conn = instance.connections[0];
      console.log(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
    })
    .catch(err => {
      console.error(err);
    });
  
  app.listen(PORT, function() {
    console.info(`Server listening on ${this.address().port}`);
  }).on('error', err=>{
    console.error(err);
  });
}

module.exports = app;
