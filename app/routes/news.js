module.exports = function(app){ 

    var mysql = require('mysql');

    var connection  = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'portal_noticias'
    });

    app.get('/news', function(req, res){ 
        res.render("news/news");
    });
};