require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authRouter, AuthService } = require('./auth');
const tokenService = require('./auth/TokenService');

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

app.set('superSecret', process.env.SERVER_SECRET);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(tokenService.receiveToken);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//ROUTE HANDLER
const scoresRouter = require('./routes/scores');
app.use('/auth', authRouter);
app.use('/api/scores', AuthService.allow({roles: []}), scoresRouter);

//const scoresRouter = require('./routes/scores');
//app.use('/api/scores', scoresRouter);

app.get('*', function(req, res) {
  res.status(404).send({message: 'Hmm...Not Found.'});
});

module.exports = app;




