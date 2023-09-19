const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors'); 
const app = express();
const router = express.Router();
const petfinder = require('@petfinder/petfinder-js');
require('dotenv').config(); 
require('./config/database')



app.use(logger('dev'));
app.use(express.json());


//config both serve-favicon and static middleware
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'build'))); 
app.use(cors({origin: 'http://localhost:3000' })); 



//API route 
app.use('/api/users', require('./routes/api/users')); 
app.use('/api/petfinder', require('./routes/api/petfinder'));


const port = process.env.port || 3001; 

//catch all
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//port listening
app.listen(port, function() {
    console.log(`express app ruining on port ${port}`)
})