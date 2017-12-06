module.exports = function(app){ 
    
    app.get('/notice', function(req, res){ 
        
        var connection = app.config.dbConnection();
        var noticeModel = app.app.models.noticeModel;

        noticeModel.getNotice(connection, function(err, result){
            res.render("news/notice", {notice: result});
        });
    });
};