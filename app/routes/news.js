var dbConnection = require('../../config/dbConnection');

module.exports = function(app){ 

    var connection = dbConnection();

    app.get('/news', function(req, res){ 
        
        connection.query("select * from noticias", function(error, result){
            res.render("news/news", {news: result});
        });
    });
};