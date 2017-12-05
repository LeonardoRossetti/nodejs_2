//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){ 

    app.get('/news', function(req, res){ 
        
        var connection = app.config.dbConnection();

        connection.query("select * from noticias", function(error, result){
            res.render("news/news", {news: result});
        });
    });
};