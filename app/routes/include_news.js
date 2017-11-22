module.exports = function(app) {
    app.get('/include_news', function(req, res){
        res.render("admin/form_add_notice");
    });
};