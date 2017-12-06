module.exports = function(app){ 
    
    app.get('/notice', function(req, res){ 
        
        var connection = app.config.dbConnection();
        var newsModel = app.app.models.newsModel;

        newsModel.getNotice(connection, function(err, result){
            res.render("news/notice", {notice: result});
        });
    });
};