require('dotenv').config(); 
require('./config/database');

// Require the Mongoose models
const User = require('./user');

//local var 
let user, item, category, order; 
let users, items, categories, orders; 

