module.exports = function() {

    this.getNews = function(connection, callback) {
        connection.query("select * from noticias", callback);
    };

    this.getNotice = function(connection, callback) {
        connection.query("select * from noticias where id_noticia = 1", callback);
    }

    this.saveNotice = function(notice, connection, callback) {
        //Para que isso funcione é necessário que o rótulo das 
        //variáveis tenha o mesmo nome que as colunas da tabela
        connection.query('INSERT INTO NOTICIAS SET ? ', notice, callback);
    }

    return this;
}