module.exports = function(application) {
    application.get('/include_news', function(req, res){
        application.app.controllers.admin.form_add_notice(application, req, res);
    });

    application.post('/news/save', function(req, res){
        application.app.controllers.admin.news_save(application, req, res);
    });
};