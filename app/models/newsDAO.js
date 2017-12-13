function NewsDAO(connection){
    this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback) {
    this._connection.query("select * from noticias", callback);
};

NewsDAO.prototype.getNotice = function(callback) {
    this._connection.query("select * from noticias where id_noticia = 1", callback);
};

NewsDAO.prototype.saveNotice = function(notice, callback) {
    //Para que isso funcione é necessário que o rótulo das 
    //variáveis tenha o mesmo nome que as colunas da tabela
    this._connection.query('INSERT INTO NOTICIAS SET ? ', notice, callback);
};

module.exports = function() {
    return NewsDAO;
};