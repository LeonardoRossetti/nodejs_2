module.exports = function(app){ 

    app.get('/news', function(req, res){ 
        var mysql = require('mysql');

        var connection  = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345678',
            database: 'portal_noticias'
        });

        connection.query("select * from noticias", function(error, result){
            res.send(result);
        });

        //res.render("news/news");
    });
};