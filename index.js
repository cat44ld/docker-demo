var express = require('express');
var app = express();


app.get('/', (req, res) => {
	res.send('Hello, world!');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("app listening on http://%s:%s", host, port);
});

