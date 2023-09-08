const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config(); 
require('./config/database')

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());

//config both serve-favicon and static middleware
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'build'))); 



const port = process.env.PORT || 3001; 


//catch all
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



//port listening
app.listen(port, function() {
    console.log('express app ruining on port ${port}')
})