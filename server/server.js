//Imports
const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const loadTestData = require('./testData');
const path = require('path');

//Import Routes
const productsRoute  = require('./routes/products');
const codesRoute  = require('./routes/codes');

//Create app 
const app = express();

//Middlewares
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use('/api', productsRoute);
app.use('/api', codesRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('Web blog api');
});

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