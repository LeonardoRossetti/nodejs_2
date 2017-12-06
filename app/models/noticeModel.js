module.exports = function(){

    this.getNotice = function(connection, callback) {
        connection.query("select * from noticias where id_noticia = 1", callback);
    }

    return this;

}