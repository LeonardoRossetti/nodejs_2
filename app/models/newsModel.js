module.exports = function() {

    this.getNews = function(connection, callback) {
        connection.query("select * from noticias", callback);
    };

    return this;
}