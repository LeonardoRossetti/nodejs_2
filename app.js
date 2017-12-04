var app = require('./config/server');

/**
 * Routes
 * Not used more because we have to used 'Consign'
 */
//var homeRoute = require('./app/routes/home')(app);
//var includeNewsRoute = require('./app/routes/include_news')(app);
//var newsRoute = require('./app/routes/news');
//newsRoute(app); //Just another way to do the same thing

/**
 * Server running
 */
app.listen(3000, function(){
    console.log('Server is running on Express in the port 3000!');
});