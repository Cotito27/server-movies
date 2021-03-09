const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');

// const bcrypt = require('bcrypt');
const cors = require('cors');

// const multer = require('multer');

const bodyParser = require('body-parser');

// settings 
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


// static files
app.use(express.static(path.join(__dirname, 'public')));

// app.use(multer({
//   dest: path.join(__dirname, "public/upload"),
//   limits: { fieldSize: 202600000 }
// }).single('archivo'));


// routes
app.use(require('./routes/index').router);   

// 404 handler
app.use((req, res, next) => {
  res.json({
    error: true,
    message: 'Page not found'
  });
});

// starting the server
module.exports = {app};