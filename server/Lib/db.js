
var mysql = require('mysql');
var params = { 
	host: '127.0.0.1', 
	user: 'root', 
	password: '', 
	database: 'gesthotel'}
	
exports.connection = function () {
    var db = mysql.createConnection(params);
    return db;
}
this.connection().connect()
