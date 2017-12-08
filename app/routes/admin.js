module.exports = function(application) {
    application.get('/include_news', function(req, res){
        res.render("admin/form_add_notice");
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        
        var connection = application.config.dbConnection();
        var newsModel = application.app.models.newsModel;
    
        newsModel.saveNotice(noticia, connection, function(error, result){
            //res.render("news/news", {news: result});
            res.redirect('/news');
        });
    });
};