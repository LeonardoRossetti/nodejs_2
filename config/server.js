var express = require('express'); //recupera biblioteca express
var app = express(); //executa a função que o modulo express retorna

app.set('view engine', 'ejs'); //agora o express sabe que o ejs será a nossa engine de views

module.exports = app;