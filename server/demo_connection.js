var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com',
    user: 'master',
    password: '461lsmash!',
    database: 'smash'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});