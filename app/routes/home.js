module.exports = function(app) {
    
    app.get('/', function(req, res){ //feito chamada para a pagina principal

        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function(error, result){ 
            res.render("home/index", {content: result});
        })
    });
};