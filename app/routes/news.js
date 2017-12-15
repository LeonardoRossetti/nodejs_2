//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){ 

    application.get('/news', function(req, res){ 
        
        var connection = application.config.dbConnection();
        var newsDAO = new application.app.models.NewsDAO(connection);

        newsDAO.getNews(function(error, result){
            res.render("news/news", {news: result});
        });
    });

    application.get('/notice', function(req, res){ 
        
        var connection = app.config.dbConnection();
        var newsDAO = new app.app.models.NewsDAO(connection);

        newsDAO.getNotice(function(err, result){
            res.render("news/notice", {notice: result});
        });
    });
};