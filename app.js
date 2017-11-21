var app = require('./config/server');

app.get('/', function(req, res){ //feito chamada para a pagina principal
    res.render("home/index");
})

app.get('/inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
})

app.get('/noticias', function(req, res){ 
    res.render("noticias/noticias");
})

app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000!');
});