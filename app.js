var express = require('express'); //recupera biblioteca express
var app = express(); //executa a função que o modulo express retorna

app.set('view engine', 'ejs'); //agora o express sabe que o ejs será a nossa engine de views

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