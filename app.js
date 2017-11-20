var express = require('express'); //recupera biblioteca express
var app = express(); //executa a função que o modulo express retorna

app.set('view engine', 'ejs'); //agora o express sabe que o ejs será a nossa engine de views

app.get('/tecnologia', function(req, res){ //feito chamada para a pagina principal
    res.render("secao/tecnologia");
})

app.get('/', function(req, res){ //feito chamada para a pagina principal
    res.send("<html><body>Portal de notícias</body></html>");
})


app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000!');
});