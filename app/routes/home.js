module.exports = function(application) {
    application.get('/', function(req, res){ //feito chamada para a pagina principal
        application.app.controllers.home.index(application, req, res);
    });
};