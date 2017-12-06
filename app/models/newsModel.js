module.exports = function() {

    this.getNews = function(connection, callback) {
        connection.query("select * from noticias", callback);
    };

    this.getNotice = function(connection, callback) {
        connection.query("select * from noticias where id_noticia = 1", callback);
    }

    return this;
}