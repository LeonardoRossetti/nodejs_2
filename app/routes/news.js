//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){ 

    application.get('/news', function(req, res){ 
        
        var connection = application.config.dbConnection();
        var newsModel = application.app.models.newsModel;

        newsModel.getNews(connection, function(error, result){
            res.render("news/news", {news: result});
        });
    });
};