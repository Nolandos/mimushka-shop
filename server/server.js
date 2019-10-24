//Imports
const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const loadTestData = require('./testData');
const path = require('path');
const fileUpload = require('express-fileupload');
const passport = require("passport");

//Import Routes
const productsRoute  = require('./routes/products');
const codesRoute  = require('./routes/codes');
const usersRoute = require("./routes/users");
const emailRoute  = require('./routes/email');

//Create app 
const app = express();

//Middlewares
app.use(passport.initialize());
app.use(helmet());
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(mongoSanitize());
app.use(fileUpload());
app.use('/api', productsRoute);
app.use('/api', codesRoute);
app.use('/api', usersRoute);
app.use('/api', emailRoute);

// Passport config
require("./helpers/passport")(passport);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  });

// connects our back end code with the database
mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));


//Listening on PORT
app.listen(config.PORT, () => {
    console.log('Server is running on port :', config.PORT);
});