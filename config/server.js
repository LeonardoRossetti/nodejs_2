/**
 * Recover the library express.
 */
var express = require('express'); 

/**
 * Consign will initialize global things for us into our app
 */
var consign = require('consign');

/**
 * We are using body-parser like a middleware to act on all requests and responses from HTML
 */
var bodyParser = require('body-parser');

/**
 * Used to validate all the datas inputed on app
 */
var expressValidator = require('express-validator');

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

//urlencoded({extended: true}) -> Allow that our codify URI will be implemented by json 
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator);

consign()
    //Consign will read a folder on app called 'app/routes' and it will add the routes for us.
    .include('app/routes') 
    //Initialize the DB Connection
    .then('config/dbConnection.js')
    //Initialize all models info models folder
    .then('app/models')
    //Throw into app
    .into(app);

module.exports = app;