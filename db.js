var mysql = require('mysql');

var db_config = {
	host     : '94.73.148.62',
	user     : 'move',
	password : 'Bxz82#e3',
	database : 'themediamove'
}

var connection;
	connection = mysql.createConnection(db_config);
	connection.connect(function(err){
		if(err){
			console.log('Database connection error:',err);
		}
	});

module.exports = connection