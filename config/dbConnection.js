var mysql = require('mysql');

var connMysql = function (){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    //On this way the connection will be executed only with we call the function
    //This is a better way to do the connection because we don't wish to create a new 
    //conection each time we recieve a new request
    return connMysql;
}