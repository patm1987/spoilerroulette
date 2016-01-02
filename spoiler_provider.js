/**
 * Created by Patrick on 1/2/2016.
 */

var mysql = require('mysql');

function SpoilerProvider() {
}

SpoilerProvider.prototype.getSpoiler = function(spoilerCB) {
	var sqlConnection = mysql.createConnection({
		host: 'localhost',
		user: 'spoiler_select',
		password: '',
		database: 'spoilers'
	});
	sqlConnection.connect();
	sqlConnection.query(
		'SELECT * FROM spoilers ORDER BY RAND() LIMIT 1',
		function(err, rows, fields) {
			if (err) {
				spoilerCB('Error!', 'Error: ' + err);
			}
			else {
				spoilerCB(rows[0].title, rows[0].body);
			}
		});
	sqlConnection.end();
};

module.exports = SpoilerProvider;
