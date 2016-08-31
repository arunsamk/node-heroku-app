var express = require('express');
var application = express();
var port = process.env.port || 7007;

application.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

application.listen(port, function(err){
	if(err){
		console.log('Erroooooooorrrrr Occured ', err);
	}
	console.log('server is listening', port);
});