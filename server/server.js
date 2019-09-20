//Imports
const express = require('express');
const cors = require('cors');

const app = express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(8000, function(){
    console.log('Server is running on port:', 8000);
});