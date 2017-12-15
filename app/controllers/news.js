module.exports.news = function(application, req, res){
    var connection = application.config.dbConnection();
    var newsDAO = new application.app.models.NewsDAO(connection);

    newsDAO.getNews(function(error, result){
        res.render("news/news", {news: result});
    });
}
    
module.exports.notice = function(application, req, res){
    var connection = application.config.dbConnection();
    var newsDAO = new application.app.models.NewsDAO(connection);

    newsDAO.getNotice(function(err, result){
        res.render("news/notice", {notice: result});
    });
}
        
            