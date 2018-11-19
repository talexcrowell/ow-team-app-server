'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, CLIENT_ORIGIN } = require('./config');
const app = express();


app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(cors({origin: CLIENT_ORIGIN}));
app.use(express.json());
app.use(express.static('public'));

app.get('/teamlist', (req, res) => res.json({heroName: 'Tracer'}));

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

app.listen(PORT, function() {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err=>{
  console.error(err);
});

module.exports = app;
