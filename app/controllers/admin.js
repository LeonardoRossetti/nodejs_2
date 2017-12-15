module.exports.form_add_notice = function(application, req, res){
    res.render("admin/form_add_notice", {validacao:{}, noticia:{}});
}

module.exports.news_save = function(application, req, res){
    var noticia = req.body;
    
    //using express-validator
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty();
    req.assert('noticia', 'Noticia é obrigatória').notEmpty();
    
    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_notice", {validacao: erros, noticia: noticia});
        return;
    }        
    
    var connection = application.config.dbConnection();
    var newsDAO = new application.app.models.NewsDAO(connection);

    newsDAO.saveNotice(noticia, function(error, result){
        res.redirect('/news');
    });
}