/**
 * Recover the library express.
 */
var express = require('express'); 

/**
 * Execute the function that the module express returns.
 */
var app = express(); 

/**
 * Now the express knows that the ejs will be our engine of views.
 */
app.set('view engine', 'ejs'); 

/**
 * Directory where are the views, remember that the path of the archieve will be 
 * find from local where we call this function. That is from app.js.
 */
app.set('views', './app/views');

module.exports = app;