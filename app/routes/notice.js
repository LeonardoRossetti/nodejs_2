module.exports = function(app){ 
    
    app.get('/notice', function(req, res){ 
        
        var connection = app.config.dbConnection();
        var newsDAO = new app.app.models.NewsDAO(connection);

        newsDAO.getNotice(function(err, result){
            res.render("news/notice", {notice: result});
        });
    });
};