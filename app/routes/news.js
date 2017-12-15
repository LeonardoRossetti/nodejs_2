module.exports = function(application){ 
    application.get('/news', function(req, res){ 
        application.app.controllers.news.news(application, req, res)        
    });

    application.get('/notice', function(req, res){ 
        application.app.controllers.news.notice(application, req, res);
    });
};