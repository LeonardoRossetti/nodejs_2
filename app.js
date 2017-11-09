var express = require('express'); //recupera biblioteca express
var app = express(); //executa a função que o modulo express retorna

app.get('/', function(req, res){ //feito chamada para a pagina principal
    res.send("<html><body>Portal de notícias</body></html>");
})

app.get('/tecnologia', function(req, res){ //feito chamada para a pagina principal
    res.send("<html><body>Portal de tecnologia</body></html>");
})

app.listen(3000, function(){
    console.log('Servidor rodando com Express na porta 3000!');
});