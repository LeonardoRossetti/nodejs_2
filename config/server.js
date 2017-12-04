/**
 * Recover the library express.
 */
var express = require('express'); 

var consign = require('consign');

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

/**
 * Consign will read a folder on app called 'app/routes' and it will add the routes for us.
 */
consign().include('app/routes').into(app);

module.exports = app;