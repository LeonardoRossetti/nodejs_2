module.exports = function(app) {
    app.get('/include_news', function(req, res){
        res.render("admin/form_add_notice");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        res.send(noticia);
    });
};