module.exports = function(app) {
    
    app.get('/', function(req, res){ //feito chamada para a pagina principal
        res.render("home/index");
    });
};