var http = require('http');

/*
//Faz a mesma coisa:
http.createServer( function(req, res){
    res.end('<html><body>Portal de notícias</body></html>');
}).listen(3000);*/

var server = http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end('<html><body>Tecnologia</body></html>');
    } else if(categoria == '/games'){
        res.end('<html><body>Games</body></html>');
    } else{
        res.end('<html><body>Portal de notícias</body></html>');
    }
});

server.listen(3000);

